import { ArrowIcon } from "./arrow-icon";
import { CtaGlow } from "./cta-glow";

const BOOKING_URL = "https://savvycal.com/marcel-from-bold/7838d613";

interface CtaSectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaSection({
  heading = "You invested in the content. Make it actually teach.",
  description = "See how Bold turns your video library into your hardest-working team member.",
  buttonText = "Book a demo",
  buttonHref = BOOKING_URL,
}: CtaSectionProps) {
  return (
    <section className="cta">
      <CtaGlow />
      <div className="container">
        <h2>{heading}</h2>
        <p>{description}</p>
        <a
          className="btn-cta"
          href={buttonHref}
          rel="noreferrer"
          target="_blank"
        >
          {buttonText}
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
