import ReactMarkdown from "react-markdown";
import { SiteNav, SiteNavFooter } from "./site-nav";
import { SiteLink } from "./site-link";
import "./landing-v10.css";

type LegalPageProps = {
  content: string;
  description: string;
  title: string;
  updatedAt: string;
};

export function LegalPage({
  content,
  description,
  title,
  updatedAt,
}: LegalPageProps) {
  return (
    <main className="landing-v10 legal-page" id="main-content">
      <div className="announce">
        <strong>Legal</strong>
        <div className="sep" />
        <a href="mailto:support@boldvideo.com">
          Questions? support@boldvideo.com
        </a>
      </div>

      <SiteNav />

      <section className="legal-hero container">
        <div className="hero-glow" />
        <div className="legal-hero-inner">
          <div className="hero-eyebrow">Legal</div>
          <h1>{title}</h1>
          <p className="hero-sub">{description}</p>
          <p className="legal-updated">Last updated {updatedAt}</p>
        </div>
      </section>

      <section className="legal-body container">
        <article className="legal-card">
          <ReactMarkdown
            components={{
              a: ({ children, href = "" }) => (
                <SiteLink className="legal-link" href={href}>
                  {children}
                </SiteLink>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </section>

      <SiteNavFooter />
    </main>
  );
}
