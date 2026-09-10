import { TallHero } from "../components/heroes";
import { Reveal } from "../components/Reveal";
import { founders, journey } from "../data/founders";
import { wixImage, MEDIA_BASE } from "../data/media";

// Poster path matches the source site's own (untransformed) URL for this asset.
const HERO_POSTER = `${MEDIA_BASE}03c59c_76338b5b278a4f3681ea4432f1bcbedef000.jpg`;
const HERO_VIDEO = "https://video.wixstatic.com/video/03c59c_76338b5b278a4f3681ea4432f1bcbede/1080p/mp4/file.mp4";

const values = [
  {
    title: "Integrity",
    body: "Built on similar values that define Shake & Bake — integrity, service before self, and excellence in all we do — the show has become a trusted destination for sports cards, TCG, and memorabilia.",
  },
  {
    title: "Service",
    body: "Frank and Vernon firmly believe the spotlight belongs on the vendors and the hobby community. The show creates an environment where everyone feels welcomed, supported, and valued.",
  },
  {
    title: "Excellence",
    body: "From carefully curated vendor tables to a high-quality experience for families and serious collectors alike, the Shake & Bake Team leads each event with a commitment to excellence.",
  },
];

export function AboutPage() {
  return (
    <div>
      <TallHero
        kicker="Our Story"
        title={
          <>
            Built by collectors.
            <br />Created for the community.
          </>
        }
        image={HERO_POSTER}
        video={HERO_VIDEO}
        minHeight="min(76vh,720px)"
      />

      <section className="max-w-[1000px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(40px,6vw,90px)]">
        <p className="m-0 font-cond text-[clamp(20px,2.4vw,32px)] leading-[1.35] text-white">
          Shake &amp; Bake Sports Cards and Collectibles is built on one simple idea: the hobby is better when it's
          shared.
        </p>
        <p className="mt-[22px] text-[17px] leading-[1.8] text-body">
          We are a community-first brand dedicated to bringing collectors, fans, and vendors together through
          high-energy shows, trusted transactions, and a genuine love for sports cards, TCG, and all forms of hobby
          memorabilia and collectibles. What started as a passion for collecting has grown into a platform where
          beginners feel welcome, seasoned collectors find value, and vendors have a place to thrive. From rare finds
          to everyday favorites — whether it's a vintage sports card, a sought-after trading card game piece, or a
          unique collectible — we focus on creating an environment where every item tells a story and every
          connection matters.
        </p>
        <h2 className="mt-11 font-display text-[clamp(26px,3vw,44px)] uppercase">Our Mission</h2>
        <p className="mt-4 text-[17px] leading-[1.8] text-body">
          Our mission is to elevate the sports card, TCG, and hobby memorabilia community by creating memorable
          events, fostering trusted relationships, and building a space where collectors of all levels feel at home.
          Whether you're chasing your next grail card, hunting for a rare pull, setting up as a vendor, or attending
          your first show, Shake &amp; Bake is where the hobby comes alive.
        </p>
      </section>

      <Reveal as="section" className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(44px,6vw,100px)]">
          <div className="grid gap-px bg-white/[.12] border border-white/[.12]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {values.map((v) => (
              <div key={v.title} className="bg-panel p-[clamp(22px,3vw,36px)]">
                <h3 className="m-0 font-display text-[clamp(26px,3vw,40px)] uppercase text-ember">{v.title}</h3>
                <p className="mt-3.5 text-[15px] leading-[1.75] text-body">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-[clamp(30px,4vw,54px)] p-[clamp(22px,3vw,40px)] border-l-2 border-ember bg-panel">
            <div className="font-cond text-xs tracking-[.28em] uppercase text-muted">2025</div>
            <h3 className="mt-3 font-display text-[clamp(22px,2.6vw,36px)] uppercase">The Johnson County Card Show</h3>
            <p className="mt-3.5 max-w-[760px] text-base leading-[1.8] text-body">
              In 2025, that vision became reality with the launch of The Johnson County Card Show — a premier,
              community-focused event created to give collectors, vendors, and hobby enthusiasts a dedicated space to
              connect, trade, and grow together.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(44px,6vw,100px)]">
          <h2 className="m-0 mb-[clamp(22px,3vw,40px)] font-display text-[clamp(32px,5vw,76px)] leading-[.88] uppercase">
            The Founders
          </h2>
          <div className="grid gap-[clamp(20px,3vw,44px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            {founders.map((f) => (
              <article key={f.name} className="border border-white/[.12] bg-panel">
                <img src={wixImage(f.imageId, 900, 1125)} alt={f.name} loading="lazy" className="w-full aspect-[4/5] object-cover object-top" />
                <div className="p-[22px]">
                  <h3 className="m-0 font-display text-[clamp(22px,2.4vw,32px)] uppercase">{f.name}</h3>
                  <p className="mt-2 font-cond text-sm tracking-[.2em] uppercase text-ember">{f.title}</p>
                  <p className="mt-3.5 text-[15px] leading-[1.75] text-body">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <h3 className="mt-[clamp(38px,5vw,70px)] font-display text-[clamp(26px,3.4vw,50px)] uppercase">Our Journey</h3>
          <div className="mt-[22px] border-l border-white/[.14] pl-[clamp(18px,3vw,34px)] flex flex-col gap-[26px]">
            {journey.map((j) => (
              <div key={j.kicker}>
                <div className="font-cond text-xs tracking-[.28em] uppercase text-ember">{j.kicker}</div>
                <p className="mt-2.5 max-w-[820px] text-base leading-[1.8] text-body">{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
