import { PlainIntro } from "../components/heroes";
import { galleryIds } from "../data/gallery";
import { wixImage } from "../data/media";
import { useUI } from "../context/UIContext";

export function GalleryPage() {
  const { openLightbox } = useUI();

  return (
    <div>
      <PlainIntro
        kicker="Gallery"
        title="The Show"
        description="Moments from the floor at Homefield Olathe. Click any image for full screen — use ← → to move through the set."
      />
      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pb-[clamp(50px,7vw,110px)]">
        <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gridAutoRows: 130 }}>
          {galleryIds.map(([id, orientation], i) => (
            <button
              key={id}
              type="button"
              onClick={() => openLightbox("image", i)}
              aria-label={`Open Johnson County Card Show photo ${i + 1}`}
              className="group relative p-0 border border-white/[.12] bg-panel2 cursor-pointer overflow-hidden hover:border-ember transition-colors"
              style={{ gridRow: orientation === "p" ? "span 2" : "span 1" }}
            >
              <img
                src={wixImage(id, orientation === "p" ? 700 : 900, orientation === "p" ? 933 : 675)}
                alt={`Johnson County Card Show photo ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover opacity-90 transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06] group-hover:opacity-100"
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
