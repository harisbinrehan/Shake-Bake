import { TallHero } from "../components/heroes";
import { galleryIds } from "../data/gallery";
import { venue } from "../data/venue";
import { wixImage } from "../data/media";
import { useUI } from "../context/UIContext";

const socialFeed = galleryIds.slice(0, 8);

export function VenuePage() {
  const { openLightbox } = useUI();

  return (
    <div>
      <TallHero
        kicker="The Venue"
        title={
          <>
            Homefield
            <br />Olathe
          </>
        }
        image={wixImage("f26660_cb06ad68bb964353a0425108c18c74a1~mv2.jpg", 1400, 1050)}
        minHeight="min(76vh,720px)"
      />

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(40px,6vw,90px)] grid gap-[clamp(24px,4vw,64px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
        <div>
          <p className="m-0 font-cond text-[clamp(19px,2.2vw,28px)] leading-[1.35] tracking-[.02em] uppercase text-white">
            Get ready, Johnson County — where sports passion meets collector culture in one electrifying destination.
            With 270,000 square feet of "play space", Homefield Olathe isn't just a venue — it's the heartbeat of
            competition, community, and now, the ultimate card and memorabilia show experience.
          </p>
          <p className="mt-[22px] text-base leading-[1.75] text-body">
            As the proud home of the Johnson County Card Show, Homefield Olathe transforms into a high-energy
            marketplace where fans, collectors, vendors, and athletes collide under one roof. From the roar of the
            game to the thrill of finding that next grail collectible, every visit delivers nonstop excitement,
            unforgettable connections, and a true hobby-first atmosphere.
          </p>
          <p className="mt-[22px] font-display text-[clamp(20px,2.4vw,32px)] leading-[1.15] uppercase text-ember">
            This is where Johnson County comes to play, collect, trade and win!
          </p>
        </div>
        <div>
          <div className="grid gap-px bg-white/[.12] border border-white/[.12]">
            <div className="bg-panel p-5">
              <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Address</div>
              <div className="font-cond text-lg font-semibold tracking-[.06em] uppercase mt-2.5 leading-[1.5]">
                {venue.name}
                <br />
                {venue.addressLine1}
                <br />
                {venue.addressLine2}
              </div>
            </div>
            <div className="bg-panel p-5">
              <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Phone</div>
              <a href={venue.phoneHref} className="inline-block font-display text-[22px] mt-2.5 text-white">
                {venue.phone}
              </a>
            </div>
            <div className="bg-panel p-5">
              <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Website</div>
              <a href={venue.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2.5 font-cond text-[17px] tracking-[.1em] uppercase">
                {venue.websiteLabel} →
              </a>
            </div>
          </div>
          <div
            className="mt-3.5 relative aspect-[16/10] border border-white/[.12] flex items-center justify-center text-center p-5"
            style={{ background: "repeating-linear-gradient(45deg,#111113,#111113 12px,#141417 12px,#141417 24px)" }}
          >
            <div>
              <div className="font-cond text-xs tracking-[.28em] uppercase text-muted">Map</div>
              <div className="font-display text-[clamp(18px,2vw,26px)] mt-2.5 uppercase">{venue.addressLine1}</div>
              <a href={venue.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3.5 font-cond text-sm tracking-[.18em] uppercase">
                Open directions →
              </a>
            </div>
          </div>
          <p className="mt-3.5 text-sm leading-[1.7] text-muted">
            Parking and accessibility details for event days are coming soon. For venue-specific questions, contact
            Homefield Olathe directly.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(30px,4vw,60px)] grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))" }}>
          {socialFeed.map(([id]) => {
            const index = galleryIds.findIndex(([gid]) => gid === id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => openLightbox("image", index)}
                aria-label={`Johnson County Card Show photo ${index + 1}`}
                className="group p-0 border border-white/[.12] bg-panel2 cursor-pointer aspect-[4/3] overflow-hidden hover:border-ember transition-colors"
              >
                <img src={wixImage(id, 900, 675)} alt={`Johnson County Card Show photo ${index + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.07]" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
