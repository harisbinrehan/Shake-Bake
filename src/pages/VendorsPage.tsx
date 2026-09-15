import { TallHero } from "../components/heroes";
import { Reveal } from "../components/Reveal";
import { useUI } from "../context/UIContext";
import { shows } from "../data/shows";
import { categoryDefs } from "../data/categories";
import { wixImage } from "../data/media";

const reasons = [
  {
    num: "01",
    title: "Collector-focused audience",
    body: "Passionate collectors, trusted vendors, and rare finds all under one roof — an audience that comes to buy, trade and connect.",
  },
  {
    num: "02",
    title: "High-energy environment",
    body: "Homefield Olathe transforms into a high-energy marketplace where fans, collectors, vendors and athletes collide under one roof.",
  },
  {
    num: "03",
    title: "The spotlight is on you",
    body: "Frank and Vernon firmly believe the spotlight belongs on the vendors and the hobby community. The show creates an environment where everyone feels welcomed, supported, and valued.",
  },
];

export function VendorsPage() {
  const { openVendor } = useUI();

  return (
    <div>
      <TallHero
        kicker="Become a Vendor"
        kickerColor="#F2C14E"
        title={
          <>
            Sell.
            <br />
            Trade.
            <br />
            <span className="text-ember">Connect.</span>
          </>
        }
        description="Become part of the Johnson County Card Show."
        image={wixImage("f26660_d2918073731c48538c7d18d3b4606554~mv2.jpg", 1600, 900)}
        minHeight="min(80vh,780px)"
      >
        <button
          type="button"
          onClick={() => openVendor()}
          className="mt-[26px] h-[60px] px-9 bg-ember text-white border-0 cursor-pointer font-cond text-lg font-bold tracking-[.18em] uppercase transition-[background,transform] hover:bg-[#FF5A33] hover:-translate-y-0.5"
          style={{ boxShadow: "0 20px 44px -20px rgba(255,61,20,.9)" }}
        >
          Reserve Your Table
        </button>
      </TallHero>

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(44px,6vw,100px)]">
        <h2 className="m-0 mb-[clamp(22px,3vw,40px)] font-display text-[clamp(32px,5vw,76px)] leading-[.98] uppercase">
          Why vend at JCCS?
        </h2>
        <div className="grid gap-px bg-white/[.12] border border-white/[.12]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {reasons.map((r) => (
            <div key={r.num} className="bg-panel p-[clamp(22px,3vw,34px)]">
              <div className="font-display text-xl text-ember">{r.num}</div>
              <h3 className="mt-3.5 font-cond text-[22px] font-bold tracking-[.06em] uppercase">{r.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-body">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-[22px]">
          {categoryDefs.map((c) => (
            <span key={c.name} className="py-2.5 px-4 border border-white/[.16] font-cond text-sm font-semibold tracking-[.18em] uppercase text-offwhite">
              {c.name.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(44px,6vw,100px)]">
          <h2 className="m-0 mb-[clamp(20px,3vw,36px)] font-display text-[clamp(30px,4.4vw,66px)] leading-[.96] uppercase">
            Upcoming vendor opportunities
          </h2>
          <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            {shows.map((s) => (
              <Reveal key={s.id} as="article" className="bg-panel border border-white/[.12] p-6 flex flex-col transition-colors hover:border-gold/60">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-cond text-sm font-bold tracking-[.2em]" style={{ color: "#F2C14E" }}>
                    {s.mon}
                  </span>
                  <span className="font-display text-[38px] leading-[.96]">{s.day}</span>
                </div>
                <h3 className="mt-3.5 font-cond text-xl font-bold tracking-[.06em] uppercase">{s.title}</h3>
                <p className="mt-2.5 mb-[18px] text-sm leading-[1.65] text-muted flex-1">
                  {s.dayLabel} · {s.hours}
                  <br />
                  Homefield Olathe Training Center
                  <br />
                  Table availability confirmed via the official form.
                </p>
                <button
                  type="button"
                  onClick={() => openVendor(s.id)}
                  className="h-12 bg-white text-ink border-0 cursor-pointer font-cond text-[15px] font-bold tracking-[.16em] uppercase hover:bg-gold transition-colors"
                >
                  Reserve Table
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
