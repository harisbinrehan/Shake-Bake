import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { CategoryMarquee } from "../components/CategoryMarquee";
import { useUI } from "../context/UIContext";
import { useCountdown } from "../hooks/useCountdown";
import { useIsMobile } from "../hooks/useViewport";
import { shows, showImage, getShowById, featuredShowId } from "../data/shows";
import { categoryDefs } from "../data/categories";
import { galleryIds } from "../data/gallery";
import { socialDefs } from "../data/socials";
import { wixImage } from "../data/media";

const HERO_POSTER = wixImage("f26660_0e21358cc6464517b8ae996d41db948d~mv2.jpg", 1600, 900);
const HERO_VIDEO = "https://video.wixstatic.com/video/f26660_3c15c9f1eb17403e9ad83b5080d3f6f3/1080p/mp4/file.mp4";

export function HomePage() {
  const { openVendor } = useUI();
  const countdown = useCountdown("2026-09-26T10:00:00-05:00");
  const isMobile = useIsMobile();
  const featured = getShowById(featuredShowId);
  const homeShows = shows.slice(0, 4);
  const galleryPreview = galleryIds.slice(6, 12);
  const socialFeed = galleryIds.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section aria-label="Johnson County Card Show" className="min-h-viewport relative flex flex-col justify-end overflow-hidden border-b border-white/10">
        <video autoPlay muted loop playsInline preload="metadata" poster={HERO_POSTER} aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "saturate(.85) contrast(1.05)" }}>
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.86) 0%,rgba(10,10,11,.45) 34%,rgba(10,10,11,.82) 76%,#0A0A0B 100%)" }} />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "radial-gradient(120% 70% at 50% 100%,rgba(255,61,20,.18) 0%,rgba(255,61,20,0) 60%)" }} />

        <div className="relative z-[2] w-full max-w-[1440px] mx-auto pt-[110px] px-[clamp(18px,4vw,56px)] pb-[clamp(28px,4vw,54px)]">
          <div className="inline-flex items-center gap-2.5 mb-[clamp(14px,2vw,22px)] py-[7px] px-3.5 border border-white/[.22] backdrop-blur-md" style={{ background: "rgba(10,10,11,.5)" }}>
            <span className="w-[7px] h-[7px] bg-ember rounded-full animate-pulse2" />
            <span className="font-cond text-xs tracking-[.26em] uppercase">Hosted by Shake &amp; Bake · Olathe, KS</span>
          </div>
          <h1 className="m-0 font-display text-[clamp(46px,10.2vw,172px)] leading-[.92] tracking-[-.015em] uppercase [text-wrap:balance]">
            Johnson County
            <br />
            <span className="text-ember">Card Show</span>
          </h1>
          <p className="mt-[clamp(16px,2vw,24px)] max-w-[640px] text-[clamp(15px,1.5vw,20px)] leading-[1.55] text-offwhite [text-wrap:pretty]">
            Where collectors, vendors, and hobby enthusiasts come together.
          </p>

          <div className="flex flex-wrap gap-3 mt-[clamp(22px,3vw,34px)]">
            <Link
              to="/shows"
              className="inline-flex items-center justify-center gap-2.5 h-[58px] px-[clamp(22px,3vw,38px)] bg-ember text-white border-0 cursor-pointer font-cond text-[17px] font-bold tracking-[.18em] uppercase transition-[background,transform,box-shadow] hover:bg-[#FF5A33] hover:-translate-y-0.5"
              style={{ clipPath: "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)", boxShadow: "0 18px 40px -18px rgba(255,61,20,.9)" }}
            >
              View All Dates
            </Link>
            <button
              type="button"
              onClick={() => openVendor()}
              className="inline-flex items-center justify-center h-[58px] px-[clamp(22px,3vw,38px)] bg-white/[.07] text-white border border-white/[.34] backdrop-blur-md cursor-pointer font-cond text-[17px] font-bold tracking-[.18em] uppercase transition-[background,border-color,transform] hover:bg-white/[.14] hover:border-white hover:-translate-y-0.5"
            >
              Become a Vendor
            </button>
          </div>
        </div>

        <div className="relative z-[2] border-t border-white/[.14] backdrop-blur-md" style={{ background: "rgba(10,10,11,.6)" }}>
          <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(14px,2vw,20px)] flex flex-wrap items-center gap-[clamp(16px,4vw,54px)]">
            <div className="flex flex-col gap-1">
              <span className="font-cond text-[11px] tracking-[.3em] uppercase text-ember">Next Show</span>
              <span className="font-display text-[clamp(22px,3vw,34px)] tracking-[.01em] uppercase">September 26–27</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-cond text-[11px] tracking-[.3em] uppercase text-muted">Venue</span>
              <span className="font-cond text-[clamp(17px,2vw,22px)] font-semibold tracking-[.06em] uppercase">Homefield Olathe</span>
            </div>
            <div className="flex gap-2.5 ml-auto">
              {countdown.map((c) => (
                <div key={c.label} className="min-w-[64px] py-2 px-2.5 border border-white/[.14] bg-white/[.04] text-center">
                  <div className="font-display text-2xl leading-none [font-variant-numeric:tabular-nums]">{c.value}</div>
                  <div className="font-cond text-[10px] tracking-[.22em] uppercase text-muted mt-[5px]">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isMobile && <div aria-hidden="true" className="flex-none h-[78px]" />}
        <div aria-hidden="true" className="absolute left-1/2 bottom-[132px] -translate-x-1/2 w-px h-[34px] animate-scrollHint" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.7))" }} />
      </section>

      <CategoryMarquee />

      {/* UP NEXT */}
      <Reveal as="section" aria-labelledby="upnext" className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)]">
        <div className="flex items-baseline justify-between gap-5 flex-wrap mb-[clamp(22px,3vw,38px)]">
          <h2 id="upnext" className="m-0 font-display text-[clamp(34px,5.4vw,84px)] leading-[.96] tracking-[-.01em] uppercase">
            Up Next
          </h2>
          <Link to="/shows" className="font-cond text-sm font-semibold tracking-[.22em] uppercase text-muted border-b border-white/25 hover:text-white hover:border-ember transition-colors">
            View all 2026 dates
          </Link>
        </div>

        <div className="grid gap-px bg-white/[.12] border border-white/[.12]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))" }}>
          <div className="relative bg-[#0E0E10] min-h-[clamp(300px,38vw,520px)] overflow-hidden">
            <img
              src={showImage(featured, 1100, 1400)}
              alt="Johnson County Card Show September two-day show flyer"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.15),rgba(10,10,11,.75))" }} />
            <div className="absolute left-0 top-0 bg-ember text-white py-2.5 px-4 font-cond text-xs font-bold tracking-[.26em] uppercase">
              2-Day Flagship
            </div>
          </div>
          <div className="bg-[#0E0E10] p-[clamp(24px,3.4vw,52px)] flex flex-col justify-center">
            <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">Homefield Olathe · Olathe, KS</span>
            <h3 className="mt-3 font-display text-[clamp(30px,3.6vw,56px)] leading-[.98] tracking-[-.005em] uppercase">
              September 26–27
            </h3>
            <p className="mt-2.5 font-cond text-[clamp(16px,1.6vw,20px)] font-semibold tracking-[.1em] uppercase text-offwhite">
              September 2-Day Show
            </p>

            <div className="grid gap-px bg-white/[.12] border border-white/[.12] mt-[clamp(20px,2.6vw,30px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
              {featured.days.map((d) => (
                <div key={d.day} className="bg-[#141416] py-4 px-[18px]">
                  <div className="font-cond text-[11px] tracking-[.26em] uppercase text-muted">{d.day}</div>
                  <div className="font-display text-[19px] mt-1.5">{d.hours}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mt-[clamp(20px,2.6vw,30px)]">
              <Link to={`/shows/${featured.id}`} className="flex-1 basis-[180px] h-[54px] flex items-center justify-center bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:bg-[#FF5A33]">
                View Show Details
              </Link>
              <button type="button" onClick={() => openVendor(featured.id)} className="flex-1 basis-[180px] h-[54px] bg-transparent text-white border border-white/30 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:border-white hover:bg-white/[.06]">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ONE SHOW EVERY KIND OF COLLECTOR */}
      <Reveal as="section" aria-labelledby="find" className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)]">
          <h2 id="find" className="m-0 mb-[clamp(24px,3vw,44px)] font-display text-[clamp(34px,6.4vw,104px)] leading-[.93] tracking-[-.015em] uppercase">
            One show.
            <br />
            <span className="text-muted">Every kind of collector.</span>
          </h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>
            {categoryDefs.map((c, i) => (
              <article key={c.name} className="group relative aspect-[3/4] overflow-hidden border border-white/[.12] bg-panel2 hover:border-ember/70 transition-colors">
                <img
                  src={wixImage(c.imageId, 700, 933)}
                  alt={`${c.name} at the Johnson County Card Show`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.07]"
                  style={{ filter: "grayscale(.35) contrast(1.05)" }}
                />
                <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.05) 30%,rgba(10,10,11,.88) 100%)" }} />
                <div className="absolute left-0 right-0 bottom-0 p-[18px]">
                  <div className="font-cond text-[11px] tracking-[.26em] text-ember">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display text-[clamp(20px,2vw,28px)] leading-none uppercase">{c.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* MORE THAN A CARD SHOW */}
      <Reveal as="section" aria-labelledby="more" className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)] grid gap-[clamp(24px,4vw,64px)] items-center" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          <div>
            <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">The Experience</span>
            <h2 id="more" className="mt-3.5 font-display text-[clamp(34px,5.4vw,86px)] leading-[.93] tracking-[-.015em] uppercase">
              More than
              <br />a card show
            </h2>
            <p className="mt-[22px] max-w-[520px] text-[clamp(15px,1.4vw,18px)] leading-[1.72] text-body [text-wrap:pretty]">
              Welcome to the official site of the Johnson County Card Show — Hub of one of the region's premier
              events for SPORTS, TCG, ONE-PIECE cards, comics, art and other hobby collectibles. Hosted by Shake &amp;
              Bake, this show brings together passionate collectors, trusted vendors, and rare finds all under one
              roof.
            </p>
            <p className="mt-4 max-w-[520px] text-[clamp(15px,1.4vw,18px)] leading-[1.72] text-body [text-wrap:pretty]">
              From high-grade cards to unique memorabilia, you'll discover incredible items, meet fellow hobbyists,
              and experience the excitement of the trading card community.
            </p>
            <Link to="/experience" className="inline-block mt-[26px] h-[52px] leading-[52px] px-[30px] bg-transparent text-white border border-white/30 font-cond text-[15px] font-bold tracking-[.2em] uppercase hover:border-white hover:bg-white/[.06]">
              Explore the experience
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={wixImage("f26660_2b001973f1524c4eb006c31e9228334a~mv2.jpg", 1000, 1250)} alt="Collectors browsing vendor tables at the Johnson County Card Show" loading="lazy" className="w-full aspect-[3/4] object-cover border border-white/[.12]" />
            <img src={wixImage("f26660_71f41ba129f145199ea15e980a28e895~mv2.jpg", 1000, 1250)} alt="Show floor at Homefield Olathe" loading="lazy" className="w-full aspect-[3/4] object-cover border border-white/[.12] mt-[clamp(20px,4vw,54px)]" />
          </div>
        </div>
      </Reveal>

      {/* 2026 TOUR DATES */}
      <Reveal as="section" aria-labelledby="upcoming" className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)]">
          <div className="flex items-baseline justify-between gap-5 flex-wrap mb-[clamp(22px,3vw,38px)]">
            <h2 id="upcoming" className="m-0 font-display text-[clamp(34px,5.4vw,84px)] leading-[.96] uppercase">2026 Tour Dates</h2>
            <Link to="/shows" className="font-cond text-sm font-semibold tracking-[.22em] uppercase text-muted border-b border-white/25 hover:text-white hover:border-ember transition-colors">
              All shows
            </Link>
          </div>
          <div className="flex flex-col">
            {homeShows.map((s) => (
              <div key={s.id} className="grid gap-[clamp(10px,2vw,28px)] items-center py-[clamp(18px,2.4vw,26px)] px-[clamp(4px,1vw,14px)] border-t border-white/[.12] hover:bg-white/[.035] transition-colors" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
                <div className="flex items-baseline gap-3">
                  <span className="font-cond text-[15px] font-bold tracking-[.2em] text-ember">{s.mon}</span>
                  <span className="font-display text-[clamp(34px,4vw,58px)] leading-[.96]">{s.day}</span>
                </div>
                <h3 className="m-0 font-cond text-[clamp(19px,2vw,26px)] font-bold tracking-[.06em] uppercase">{s.title}</h3>
                <p className="m-0 font-cond text-[15px] tracking-[.1em] uppercase text-muted">
                  {s.dayLabel} · {s.hours}
                  <br />
                  Olathe Training Center
                </p>
                <div className="flex gap-2 flex-wrap justify-end">
                  <Link to={`/shows/${s.id}`} className="h-11 px-[18px] flex items-center bg-transparent text-white border border-white/25 font-cond text-sm font-bold tracking-[.16em] uppercase hover:border-white">
                    Details
                  </Link>
                  <button type="button" onClick={() => openVendor(s.id)} className="h-11 px-[18px] bg-ember text-white border-0 cursor-pointer font-cond text-sm font-bold tracking-[.16em] uppercase hover:bg-[#FF5A33]">
                    Tables
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* VENDOR BAND */}
      <Reveal as="section" aria-labelledby="vendband" className="relative border-t border-white/10 overflow-hidden">
        <img src={wixImage("f26660_b0a6b1e16abd4ed0808ae4e8ab26eb72~mv2.jpg", 1600, 900)} alt="Vendor tables lined up at the Johnson County Card Show" loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "grayscale(.5)" }} />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(10,10,11,.96) 0%,rgba(10,10,11,.82) 45%,rgba(255,61,20,.35) 100%)" }} />
        <div className="relative max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)]">
          <span className="font-cond text-xs tracking-[.3em] uppercase" style={{ color: "#F2C14E" }}>Vendors</span>
          <h2 id="vendband" className="mt-3.5 font-display text-[clamp(40px,8vw,128px)] leading-[.92] tracking-[-.02em] uppercase">
            Sell. Trade.
            <br />Connect.
          </h2>
          <p className="mt-5 max-w-[520px] text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-offwhite">
            Become part of the Johnson County Card Show. Curated vendor tables, a collector-focused audience, and a
            high-energy floor at Homefield Olathe.
          </p>
          <div className="flex flex-wrap gap-3 mt-[30px]">
            <button type="button" onClick={() => openVendor()} className="h-[58px] px-[34px] bg-white text-ink border-0 cursor-pointer font-cond text-[17px] font-bold tracking-[.18em] uppercase transition-[background,transform] hover:bg-gold hover:-translate-y-0.5">
              Reserve Your Table
            </button>
            <Link to="/vendors" className="h-[58px] flex items-center px-[34px] bg-transparent text-white border border-white/[.36] font-cond text-[17px] font-bold tracking-[.18em] uppercase hover:border-white">
              Vendor Information
            </Link>
          </div>
        </div>
      </Reveal>

      {/* OUR STORY */}
      <Reveal as="section" aria-labelledby="story" className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)] grid gap-[clamp(24px,4vw,64px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          <div>
            <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">Our Story</span>
            <h2 id="story" className="mt-3.5 font-display text-[clamp(32px,4.6vw,72px)] leading-[.98] uppercase">
              Built by collectors.
              <br />Created for the community.
            </h2>
            <blockquote className="mt-7 pl-[22px] border-l-2 border-ember font-cond text-[clamp(20px,2.4vw,32px)] font-medium leading-[1.25] text-white">
              "Modern collecting is more than just an exchange; it is a shared journey."
            </blockquote>
            <p className="mt-6 max-w-[560px] text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-body [text-wrap:pretty]">
              Shake &amp; Bake Sports Cards and Collectibles was established to champion the community, providing a
              high-energy stage where retailers and hobbyists unite. We specialize in creating a vibrant marketplace
              for sports cards, TCG, and rare memorabilia, ensuring every transaction is rooted in trust and passion.
            </p>
            <Link to="/about" className="inline-block mt-[26px] h-[52px] leading-[52px] px-[30px] bg-transparent text-white border border-white/30 font-cond text-[15px] font-bold tracking-[.2em] uppercase hover:border-white hover:bg-white/[.06]">
              Read the full story
            </Link>
          </div>
          <div className="relative">
            <img src={wixImage("03c59c_b9eee690def24a779f4c4e8d782635a0~mv2.jpeg", 900, 1125)} alt="Shake & Bake founders at the Johnson County Card Show" loading="lazy" className="w-full aspect-[4/5] object-cover border border-white/[.12]" />
            <div className="absolute -left-px -bottom-px bg-ink border border-white/[.14] py-4 px-5 max-w-[82%]">
              <div className="font-cond text-[11px] tracking-[.26em] uppercase text-ember">Founders</div>
              <div className="font-display text-[clamp(17px,1.8vw,22px)] mt-2 uppercase">
                Vernon Alexander Jr.
                <br />Frank Azarelo III
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* THE SHOW media */}
      <Reveal as="section" aria-labelledby="media" className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)]">
          <div className="flex items-baseline justify-between gap-[18px] flex-wrap mb-[26px]">
            <h2 id="media" className="m-0 font-display text-[clamp(34px,5.4vw,84px)] leading-[.96] uppercase">The Show</h2>
            <div className="flex gap-[18px]">
              <Link to="/gallery" className="font-cond text-sm font-semibold tracking-[.22em] uppercase text-muted border-b border-white/25 hover:text-white hover:border-ember transition-colors">
                Gallery
              </Link>
              <Link to="/videos" className="font-cond text-sm font-semibold tracking-[.22em] uppercase text-muted border-b border-white/25 hover:text-white hover:border-ember transition-colors">
                Videos
              </Link>
            </div>
          </div>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
            {galleryPreview.map(([id]) => (
              <GalleryPreviewTile key={id} id={id} index={galleryIds.findIndex(([gid]) => gid === id)} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* VENUE */}
      <Reveal as="section" aria-labelledby="venueband" className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,120px)] grid gap-[clamp(24px,4vw,64px)] items-center" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          <div>
            <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">The Venue</span>
            <h2 id="venueband" className="mt-3.5 font-display text-[clamp(34px,5.4vw,84px)] leading-[.98] uppercase">
              Homefield
              <br />Olathe
            </h2>
            <p className="mt-5 max-w-[520px] text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-body">
              With 270,000 square feet of "play space", Homefield Olathe isn't just a venue — it's the heartbeat of
              competition, community, and now, the ultimate card and memorabilia show experience.
            </p>
            <p className="mt-[18px] font-cond text-[17px] tracking-[.08em] leading-[1.6] uppercase">
              Homefield Olathe Training Center
              <br />2115 E. Kansas City Rd.
              <br />Olathe, KS 66061
            </p>
            <Link to="/venue" className="inline-block mt-[26px] h-[52px] leading-[52px] px-[30px] bg-transparent text-white border border-white/30 font-cond text-[15px] font-bold tracking-[.2em] uppercase hover:border-white hover:bg-white/[.06]">
              Venue &amp; directions
            </Link>
          </div>
          <img src={wixImage("f26660_cb06ad68bb964353a0425108c18c74a1~mv2.jpg", 1400, 1050)} alt="Show floor inside Homefield Olathe Training Center" loading="lazy" className="w-full aspect-[4/3] object-cover border border-white/[.12]" />
        </div>
      </Reveal>

      {/* SOCIAL */}
      <Reveal as="section" aria-labelledby="social" className="border-t border-white/10 bg-[#0C0C0E]">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,110px)]">
          <div className="grid gap-[clamp(24px,4vw,54px)] items-end mb-7" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            <div>
              <h2 id="social" className="m-0 font-display text-[clamp(34px,5.4vw,84px)] leading-[.96] uppercase">Follow the show</h2>
              <p className="mt-4 max-w-[520px] text-base leading-[1.7] text-body">
                Stay connected with Shake &amp; Bake Sports Cards &amp; Collectibles. Get show updates, rare finds,
                vendor highlights, giveaways, and behind-the-scenes moments from our events. Join the community. Share
                the passion. Never miss the next big pull.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialDefs.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-11 px-4 border border-white/20 text-white font-cond text-sm font-semibold tracking-[.16em] uppercase hover:bg-ember hover:border-ember transition-colors">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))" }}>
            {socialFeed.map(([id]) => (
              <SocialTile key={id} id={id} index={galleryIds.findIndex(([gid]) => gid === id)} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function GalleryPreviewTile({ id, index }: { id: string; index: number }) {
  const { openLightbox } = useUI();
  return (
    <button
      type="button"
      onClick={() => openLightbox("image", index)}
      aria-label={`Johnson County Card Show photo ${index + 1}`}
      className="group relative p-0 border border-white/[.12] bg-panel2 cursor-pointer aspect-square overflow-hidden hover:border-ember transition-colors"
    >
      <img src={wixImage(id, 900, 675)} alt={`Johnson County Card Show photo ${index + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.08]" />
    </button>
  );
}

function SocialTile({ id, index }: { id: string; index: number }) {
  const { openLightbox } = useUI();
  return (
    <button
      type="button"
      onClick={() => openLightbox("image", index)}
      aria-label={`Johnson County Card Show photo ${index + 1}`}
      className="group relative p-0 border-0 bg-panel2 cursor-pointer aspect-square overflow-hidden"
    >
      <img src={wixImage(id, 900, 675)} alt={`Johnson County Card Show photo ${index + 1}`} loading="lazy" className="w-full h-full object-cover opacity-[.82] transition-[opacity,transform] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:opacity-100 group-hover:scale-[1.07]" />
    </button>
  );
}
