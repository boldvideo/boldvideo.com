import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  comment?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function addToLoops(email: string, name: string, comment: string) {
  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.warn("[loops] LOOPS_API_KEY not set, skipping");
    return;
  }

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      source: "website-request-access",
      ...(comment && { comment }),
    }),
  });

  if (!res.ok) {
    // 409 = contact already exists, try update instead
    if (res.status === 409) {
      const updateRes = await fetch(
        "https://app.loops.so/api/v1/contacts/update",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            ...(comment && { comment }),
          }),
        },
      );
      if (!updateRes.ok) {
        console.error("[loops] update failed:", await updateRes.text());
      }
      return;
    }
    console.error("[loops] create failed:", await res.text());
  }
}

async function notifySlack(name: string, email: string, comment: string) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[slack] SLACK_WEBHOOK_URL not set, skipping");
    return;
  }

  const text = [
    `*New access request* from *${name}* (${email})`,
    comment && `> ${comment}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    console.error("[slack] webhook failed:", await res.text());
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 },
      );
    }

    if (!body.email?.trim() || !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 },
      );
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const comment = body.comment?.trim() || "";

    // Fire both in parallel — don't let one failure block the other
    await Promise.allSettled([
      addToLoops(email, name, comment),
      notifySlack(name, email, comment),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
