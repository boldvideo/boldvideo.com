import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import "./about.css";
import "@/components/landing-v10.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bold turns video libraries into AI teaching assistants that know the curriculum, cite the source, and scale without hiring. Built by Marcel Fahle and Rob Hope.",
  alternates: { canonical: "/about" },
};

const FOUNDERS = [
  {
    name: "Marcel Fahle",
    role: "Co-founder",
    image: "/images/marcel.jpg",
    bio: "25 years in software, 15 in video infrastructure. Built a headless video platform that still has its original customers. Saw coaching programs drowning in content no one could find — and knew the fix wasn't another search bar.",
    links: {
      twitter: "https://twitter.com/marcelfahle",
      linkedin: "https://linkedin.com/in/marcelfahle",
    },
  },
  {
    name: "Rob Hope",
    role: "Co-founder",
    image: "/images/rob.jpg",
    bio: "A decade creating video content for top brands. Founded One Page Love and built multiple courses with hundreds of lessons. Experienced the content findability problem firsthand — from the creator side.",
    links: {
      twitter: "https://twitter.com/robhope",
      linkedin: "https://linkedin.com/in/robhope",
    },
  },
];

type Person = {
  name: string;
  role: string;
  image: string;
  bio: ReactNode;
  links: { twitter?: string; linkedin?: string };
};

const TEAM: Person[] = [
  {
    name: "Vanessa Roberts",
    role: "Advisor",
    image: "/images/vanessa.jpg",
    bio: (
      <>
        4x founder, 3 exits. 20 years building companies that matter. Last
        decade spent coaching founders through the parts of the job that break
        them. Runs{" "}
        <a href="https://founderwell.com" target="_blank" rel="noreferrer">
          FounderWell
        </a>
        , where coaches use Bold every day. Tells us when we&apos;re selling to
        the wrong person, or building the wrong thing.
      </>
    ),
    links: {
      linkedin: "https://linkedin.com/in/vanessaroberts",
    },
  },
  {
    name: "Monika Fahle",
    role: "Head of Customer Success",
    image: "/images/monika.jpg",
    bio: "Runs customer success at Bold. Spent 10 years turning new users into power users at European tech companies. Also a lawyer by training. The kind of brain that hunts friction and doesn't miss details.",
    links: {
      linkedin: "https://linkedin.com/in/monikafahle",
    },
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="founder-card">
      <div className="founder-photo">
        <Image src={person.image} alt={person.name} width={400} height={400} />
      </div>
      <h3>{person.name}</h3>
      <div className="founder-role">{person.role}</div>
      <p>{person.bio}</p>
      <div className="founder-links">
        {person.links.twitter && (
          <a
            href={person.links.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} on Twitter`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        )}
        {person.links.linkedin && (
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} on LinkedIn`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="landing-v10">
      <div className="announce">
        <strong>Growing out of Kajabi?</strong>
        <div className="sep" />
        <a href="/migrate">See how to migrate &rarr;</a>
      </div>

      <SiteNav />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-container">
            <div className="about-label">Our story</div>
            <h1>
              Video libraries shouldn&apos;t be graveyards.
            </h1>
            <p className="about-lede">
              Coaching programs pour thousands of hours into video content. Then
              it sits in a library no one can search, in a player that
              doesn&apos;t understand what&apos;s being taught. Students rewatch
              entire modules looking for one answer. Coaches repeat themselves
              endlessly. Great teaching gets buried.
            </p>
          </div>
        </section>

        <section className="about-story">
          <div className="about-container">
            <div className="story-grid">
              <div className="story-block">
                <h2>The problem we kept seeing</h2>
                <p>
                  Marcel spent 15 years building video infrastructure — encoding
                  pipelines, adaptive streaming, headless delivery. The
                  technology to host and play video got good. But the technology
                  to actually understand what&apos;s inside a video? That stayed
                  stuck in 2010.
                </p>
                <p>
                  Rob spent a decade creating video courses and watching students
                  struggle to find answers buried in hours of recordings. The
                  content was excellent. The experience of using it was not.
                </p>
              </div>
              <div className="story-block">
                <h2>How Bold started</h2>
                <p>
                  Marcel built video infrastructure for Rob&apos;s course
                  platform in late 2023. They kept circling the same question:
                  why does every video platform treat content as dumb files? Why
                  can&apos;t the platform know what&apos;s being taught?
                </p>
                <p>
                  Bold is the answer. A video platform that deeply analyzes
                  every lesson, then powers an AI assistant that answers student
                  questions with cited timestamps from the actual teaching. Not
                  generic AI. Your expertise, findable and conversational.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-founders">
          <div className="about-container">
            <div className="about-label">Founders</div>
            <h2>Built by people who&apos;ve lived the problem</h2>
            <div className="founders-grid">
              {FOUNDERS.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="about-container">
            <div className="about-label">Team &amp; advisors</div>
            <h2>The people keeping us honest</h2>
            <div className="founders-grid">
              {TEAM.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <CtaSection
        heading="See Bold on your content"
        description="The best way to understand Bold is to see it working on your actual library. Book a 30-minute demo."
      />

      <SiteNavFooter />
    </div>
  );
}
