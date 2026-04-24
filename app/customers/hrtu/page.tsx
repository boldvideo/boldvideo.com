import type { Metadata } from "next";
import { CustomerPage } from "@/components/customer-page";

export const metadata: Metadata = {
  title: "HRT University · Customer Story",
  description:
    "HRT University replaced a hallucinating chatbot with an AI that actually knows their curriculum — 97 lessons, 90+ podcast episodes, and every live Q&A, all findable by the exact timestamp.",
};

export default function HrtuCustomerPage() {
  return (
    <CustomerPage
      description="HRTU trains licensed healthcare providers in hormone therapy. 97 lessons, weekly live Q&A sessions, and a podcast with 90+ episodes — yet students kept asking the same clinical questions because none of it was findable. Bold made the library searchable, accurate, and sticky."
      eyebrow="Customer Story · HRT University"
      heroImage={{
        alt: "Nico, founder of HRT University",
        height: 1350,
        src: "/customers/hrtu/nico.jpg",
        width: 900,
      }}
      logo={{
        alt: "HRT University",
        height: 80,
        src: "/customers/hrtu/logo.png",
        width: 240,
      }}
      quote={{
        attribution: "Nico",
        avatarAlt: "Nico, founder of HRT University",
        avatarSrc: "/customers/hrtu/nico.jpg",
        role: "Founder, HRT University",
        text: "I created HRT University to blend science, strategy, and innovation into a clear, practical system. Bold is what finally made that system feel like a product — students keep finding new answers, and providers reach for it daily.",
      }}
      stats={[
        { label: "Lessons indexed", value: "97+" },
        { label: "Podcast episodes", value: "90+" },
        { label: "iOS + Android apps", value: "2" },
      ]}
      story={[
        {
          body: (
            <>
              <p>
                HRTU had built a serious body of work — a full curriculum,
                weekly live Q&amp;A, a long-running podcast. But students kept
                asking the same clinical questions because none of it was
                searchable by concept.
              </p>
              <p>
                The chatbot they were using hallucinated answers and sent
                students on a scavenger hunt through Kajabi to find the right
                video. Good content, wrong surface.
              </p>
            </>
          ),
          eyebrow: "The problem",
          heading: "A library full of answers no one could find",
        },
        {
          body: (
            <>
              <p>
                Bold replaced the chatbot with an assistant that points to the
                exact lesson and timestamp — across the course, the podcast,
                and every recorded Q&amp;A.
              </p>
              <p>
                No hallucinations. Every answer cites the source video and the
                minute it happens. Students trust it because it reads like a
                study partner who has actually watched the curriculum.
              </p>
            </>
          ),
          eyebrow: "The fix",
          heading: "An AI that actually knows the curriculum",
        },
        {
          body: (
            <>
              <p>
                What was a one-time course became a tool practitioners reach
                for daily. Students stay enrolled because they keep finding new
                answers — the library gets more valuable the more they use it.
              </p>
              <p>
                Bold shipped the iOS and Android apps alongside the web
                experience, so students can ask a clinical question between
                patients and get a cited answer in seconds.
              </p>
            </>
          ),
          eyebrow: "The result",
          heading: "A one-time course became a daily product",
        },
      ]}
      title="HRT University replaced a broken chatbot with an AI that actually knows the curriculum"
      websiteLabel="Visit hrtuniversity.com"
      websiteUrl="https://hrtuniversity.com/"
    />
  );
}
