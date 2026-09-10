import { Link } from "react-router-dom";
import { footerNav } from "../data/nav";
import { socialDefs } from "../data/socials";
import { contacts, legalLinks, venue } from "../data/venue";
import { wixImage } from "../data/media";
import { useIsMobile } from "../hooks/useViewport";

const LOGO = wixImage("03c59c_2b0d31c5ada746598c19a50709c85e64~mv2.jpeg", 160, 160);

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(48px,6vw,90px)] pb-[30px]">
        <div className="grid gap-[clamp(24px,4vw,54px)] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Shake & Bake logo" className="w-[54px] h-[54px] object-cover border border-white/[.18]" />
              <div className="leading-none">
                <div className="font-display text-2xl tracking-[.03em]">JCCS</div>
                <div className="font-cond text-[11px] tracking-[.28em] text-ember mt-[5px] uppercase">Shake &amp; Bake</div>
              </div>
            </div>
            <p className="mt-5 max-w-[300px] text-sm leading-[1.7] text-muted">
              Where collectors, vendors, and hobby enthusiasts come together.
            </p>
          </div>

          <div>
            <h3 className="m-0 mb-4 font-cond text-xs tracking-[.28em] uppercase text-muted">Explore</h3>
            <div className="flex flex-col gap-2.5 items-start">
              {footerNav.map((n) => (
                <Link key={n.path} to={n.path} className="font-cond text-base font-semibold tracking-[.12em] uppercase text-offwhite hover:text-ember transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="m-0 mb-4 font-cond text-xs tracking-[.28em] uppercase text-muted">Visit us</h3>
            <p className="m-0 font-cond text-base leading-[1.7] tracking-[.06em] uppercase text-offwhite">
              {venue.name}
              <br />
              {venue.addressLine1}
              <br />
              {venue.addressLine2}
            </p>
            <a
              href={venue.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3.5 font-cond text-sm tracking-[.16em] uppercase border-b"
              style={{ borderColor: "rgba(255,61,20,.5)" }}
            >
              Homefield website
            </a>
          </div>

          <div>
            <h3 className="m-0 mb-4 font-cond text-xs tracking-[.28em] uppercase text-muted">Contact</h3>
            <p className="m-0 font-cond text-base leading-[1.8] tracking-[.06em] uppercase text-offwhite">
              {contacts.people.map((p) => (
                <span key={p.name} className="block">
                  {p.name} <a href={p.phoneHref} className="text-white">{p.phone}</a>
                </span>
              ))}
            </p>
            <a href={`mailto:${contacts.email}`} className="inline-block mt-3 text-sm break-all">
              {contacts.email}
            </a>
            <div className="flex flex-wrap gap-[7px] mt-[18px]">
              {socialDefs.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-[38px] h-[38px] inline-flex items-center justify-center border border-white/[.18] text-offwhite font-cond text-[13px] font-bold tracking-[.04em] transition-colors hover:bg-ember hover:border-ember hover:text-white"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between mt-[clamp(34px,5vw,64px)] pt-[22px] border-t border-white/10">
          <p className="m-0 text-[13px]" style={{ color: "#6E6E74" }}>
            © 2026 Shake &amp; Bake. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted">
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-transparent border-0 p-0 cursor-pointer font-cond text-[13px] tracking-[.2em] uppercase text-muted hover:text-white transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
      {isMobile && <div className="h-[78px]" />}
    </footer>
  );
}
