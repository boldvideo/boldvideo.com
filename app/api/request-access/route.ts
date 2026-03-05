import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  comment?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    // TODO: Replace with Resend or Loops.so integration
    // For now, log the submission so no leads are lost in dev
    console.warn("[request-access]", {
      name: body.name.trim(),
      email: body.email.trim(),
      comment: body.comment?.trim() || "",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
