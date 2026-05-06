import Link from "next/link";
import { footerColumns, footerMetaLinks, navLinks } from "@/lib/site-content";
import { SiteLink } from "./site-link";
import "../components/landing-v10.css";

type SiteNavProps = {
  cta?: string;
};

export function SiteNav({ cta = "Book a demo" }: SiteNavProps) {
  return (
    <nav aria-label="Main navigation" className="landing-v10">
      <div className="nav-inner">
        <Link className="nav-logo" href="/" aria-label="Bold — Home">
          <svg width="94" height="26" viewBox="0 0 2446 670" fill="none">
            <path
              d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z"
              fill="var(--mint)"
            />
            <path
              d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z"
              fill="var(--mint)"
            />
            <path
              d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z"
              fill="var(--mint)"
            />
            <path
              d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z"
              fill="var(--mint)"
            />
          </svg>
        </Link>
        <div className="nav-right">
          {navLinks.map((link) => (
            <SiteLink href={link.href} key={link.href}>
              {link.label}
            </SiteLink>
          ))}
          <a
            className="nav-cta"
            href="https://savvycal.com/marcel-from-bold/7838d613"
            rel="noreferrer"
            target="_blank"
          >
            {cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteNavFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="landing-v10">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link
              aria-label="Bold — Home"
              className="footer-brand"
              href="/"
            >
              <svg width="100" height="28" viewBox="0 0 2446 670" fill="none">
                <path
                  d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z"
                  fill="white"
                />
                <path
                  d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z"
                  fill="white"
                />
                <path
                  d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z"
                  fill="white"
                />
                <path
                  d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z"
                  fill="white"
                />
              </svg>
            </Link>
            <p className="footer-tl">
              Video intelligence for coaching programs. Turn your library into
              an AI coach that cites the moment that matters.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <SiteLink href={link.href} key={link.href}>
                  {link.label}
                </SiteLink>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bot">
          <span>
            &copy; {currentYear}{" "}
            <SiteLink href="/">Bold Video</SiteLink>
          </span>
          <div>
            {footerMetaLinks.map((link) => (
              <SiteLink href={link.href} key={link.href}>
                {link.label}
              </SiteLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
