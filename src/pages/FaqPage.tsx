import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlainIntro } from "../components/heroes";
import { faqDefs } from "../data/faqs";

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div>
      <PlainIntro kicker="Answers" title="FAQ" maxWidth={1000} />
      <section className="max-w-[1000px] mx-auto px-[clamp(18px,4vw,56px)] pb-[clamp(50px,7vw,110px)]">
        <div className="mt-[clamp(26px,4vw,50px)]">
          {faqDefs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-white/[.12]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 py-[22px] px-0.5 bg-transparent border-0 cursor-pointer text-left"
                >
                  <span className="font-cond text-xs tracking-[.24em] text-muted min-w-[26px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 font-cond text-[clamp(18px,2vw,24px)] font-semibold tracking-[.04em] uppercase"
                    style={{ color: isOpen ? "#FF3D14" : "#FFFFFF" }}
                  >
                    {f.q}
                  </span>
                  <span className="font-display text-[22px] text-ember">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="m-0 pb-[26px] pl-[42px] pr-0.5 max-w-[760px] text-base leading-[1.8] text-body">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10 p-6 border border-white/[.12] bg-panel">
          <h2 className="m-0 font-display text-2xl uppercase">Still have a question?</h2>
          <p className="mt-2.5 mb-[18px] text-[15px] leading-[1.7] text-body">
            Reach the Shake &amp; Bake team directly and we'll get back to you.
          </p>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="h-[52px] px-7 bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:bg-[#FF5A33]"
          >
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
