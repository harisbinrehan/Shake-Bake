import { FadedHero } from "../components/heroes";
import { Reveal } from "../components/Reveal";
import { useNavigate } from "react-router-dom";
import { categoryDefs } from "../data/categories";
import { wixImage } from "../data/media";

export function ExperiencePage() {
  const navigate = useNavigate();

  return (
    <div>
      <FadedHero
        kicker="The Experience"
        title={
          <>
            More than
            <br />a card show
          </>
        }
        image={wixImage("f26660_2b001973f1524c4eb006c31e9228334a~mv2.jpg", 1000, 1250)}
        opacity={0.3}
        grayscale={0.5}
        gradient="linear-gradient(180deg,rgba(10,10,11,.88),rgba(10,10,11,.98))"
      />

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(40px,6vw,90px)] grid gap-[clamp(24px,4vw,64px)] items-center" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
        <div>
          <h2 className="m-0 font-display text-[clamp(26px,3vw,44px)] uppercase">What to expect</h2>
          <p className="mt-4 text-base leading-[1.75] text-body">
            Welcome to the official site of the Johnson County Card Show — Hub of one of the region's premier events
            for SPORTS, TCG, ONE-PIECE cards, comics, art and other hobby collectibles. Hosted by Shake &amp; Bake,
            this show brings together passionate collectors, trusted vendors, and rare finds all under one roof.
          </p>
          <p className="mt-3.5 text-base leading-[1.75] text-body">
            From high-grade cards to unique memorabilia, you'll discover incredible items, meet fellow hobbyists, and
            experience the excitement of the trading card community.
          </p>
          <p className="mt-3.5 text-base leading-[1.75] text-body">
            And it isn't only cards — whether it's face painting, cornhole, trivia, raffles, or giant jenga, there is
            something fun for everyone.
          </p>
        </div>
        <img src={wixImage("f26660_e7728ec2b1d748cdb7f484a01e9f9140~mv2.jpg", 1200, 900)} alt="Families and collectors on the show floor" loading="lazy" className="w-full aspect-[4/3] object-cover border border-white/[.12]" />
      </section>

      <Reveal as="section" className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(44px,6vw,100px)]">
          <h2 className="m-0 mb-[clamp(20px,3vw,36px)] font-display text-[clamp(30px,4.4vw,66px)] leading-[.96] uppercase">
            Collectibles on the floor
          </h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {categoryDefs.map((c) => (
              <article key={c.name} className="group relative aspect-[4/5] overflow-hidden border border-white/[.12] hover:border-ember/70 transition-colors">
                <img
                  src={wixImage(c.imageId, 700, 933)}
                  alt={`${c.name} at the Johnson County Card Show`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.07]"
                />
                <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.05) 35%,rgba(10,10,11,.9) 100%)" }} />
                <h3 className="absolute left-4 right-4 bottom-4 m-0 font-display text-[22px] uppercase">{c.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(44px,6vw,100px)] grid gap-[clamp(24px,4vw,64px)] items-center" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          <img src={wixImage("f26660_c58af02306f3421aabe450ab62c40fde~mv2.jpg", 1200, 900)} alt="Collectors trading at the show" loading="lazy" className="w-full aspect-[4/3] object-cover border border-white/[.12]" />
          <div>
            <h2 className="m-0 font-display text-[clamp(30px,4vw,60px)] leading-[.96] uppercase">Community</h2>
            <p className="mt-4 text-base leading-[1.75] text-body">
              The hobby is better when it's shared. We are a community-first brand dedicated to bringing collectors,
              fans, and vendors together through high-energy shows, trusted transactions, and a genuine love for
              sports cards, TCG, and all forms of hobby memorabilia and collectibles.
            </p>
            <p className="mt-3.5 text-base leading-[1.75] text-body">
              Beginners feel welcome, seasoned collectors find value, and vendors have a place to thrive.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-[26px]">
              <button type="button" onClick={() => navigate("/shows")} className="h-[54px] px-7 bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.08em] uppercase hover:bg-[#FF5A33]">
                View Upcoming Shows
              </button>
              <button type="button" onClick={() => navigate("/videos")} className="h-[54px] px-7 bg-transparent text-white border border-white/30 cursor-pointer font-cond text-base font-bold tracking-[.08em] uppercase hover:border-white">
                Watch the show
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
