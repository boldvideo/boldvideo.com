import { ArrowIcon } from "./arrow-icon";
import { CtaGlow } from "./cta-glow";
import { migrationPlatforms } from "@/lib/platforms";

const BOOKING_URL = "https://savvycal.com/marcel-from-bold/7838d613";

type Avatar = { src: string; alt: string };

type SecondaryButton = {
  text: string;
  href: string;
  external?: boolean;
};

interface CtaSectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonExternal?: boolean;
  /** Mono uppercase label above the heading. */
  eyebrow?: string;
  /** Team avatar pile centered above the eyebrow. */
  avatars?: Avatar[];
  /** Secondary CTA rendered next to the primary button (outlined ghost style). */
  secondaryButton?: SecondaryButton;
  /** Show the "BOLD MIGRATES FROM" logo strip beneath the buttons. */
  migrationStrip?: boolean;
}

export function CtaSection({
  heading = "You invested in the content. Make it actually teach.",
  description = "See how Bold turns your video library into your hardest-working team member.",
  buttonText = "Book a demo",
  buttonHref = BOOKING_URL,
  buttonExternal = true,
  eyebrow,
  avatars,
  secondaryButton,
  migrationStrip,
}: CtaSectionProps) {
  const stripPlatforms = migrationStrip
    ? migrationPlatforms.filter((p) => p.logoReady)
    : [];

  return (
    <section className="cta">
      <CtaGlow />
      <div className="container">
        {avatars && avatars.length > 0 ? (
          <ul className="cta-avatars">
            {avatars.map((person, i) => (
              <li key={person.src} style={{ zIndex: avatars.length - i }}>
                <img
                  alt={person.alt}
                  height={44}
                  src={person.src}
                  width={44}
                />
              </li>
            ))}
          </ul>
        ) : null}
        {eyebrow ? <p className="cta-eyebrow">{eyebrow}</p> : null}
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="cta-actions">
          <a
            className="btn-cta"
            href={buttonHref}
            rel={buttonExternal ? "noreferrer" : undefined}
            target={buttonExternal ? "_blank" : undefined}
          >
            {buttonText}
            <ArrowIcon />
          </a>
          {secondaryButton ? (
            <a
              className="btn-cta-ghost"
              href={secondaryButton.href}
              rel={secondaryButton.external ? "noreferrer" : undefined}
              target={secondaryButton.external ? "_blank" : undefined}
            >
              {secondaryButton.text}
            </a>
          ) : null}
        </div>
        {migrationStrip && stripPlatforms.length > 0 ? (
          <div className="cta-strip">
            <p className="cta-strip-label">Bold migrates from</p>
            <ul>
              {stripPlatforms.map((platform) => (
                <li key={platform.slug}>
                  <img
                    alt={`${platform.name} logo`}
                    height={28}
                    src={platform.flatLogoSrc ?? platform.logoSrc}
                    style={{
                      height: `calc(24px * var(--logo-scale-${platform.opticalSize ?? "md"}, 1))`,
                      ...(platform.flatMaxWidth
                        ? { maxWidth: platform.flatMaxWidth }
                        : {}),
                    }}
                    width={120}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
