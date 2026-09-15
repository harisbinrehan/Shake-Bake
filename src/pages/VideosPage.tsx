import { videos } from "../data/videos";
import { wixImage } from "../data/media";
import { useUI } from "../context/UIContext";

export function VideosPage() {
  const { openLightbox } = useUI();
  const [featured, ...rest] = videos;
  const featuredIndex = 0;

  return (
    <div>
      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(120px,15vw,200px)] pb-[clamp(24px,3vw,40px)]">
        <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">Video</span>
        <h1 className="mt-3.5 font-display text-[clamp(40px,8.4vw,140px)] leading-[.92] tracking-[-.02em] uppercase">
          JCCS Video Gallery
        </h1>
      </section>

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pb-[clamp(30px,4vw,50px)]">
        <button
          type="button"
          onClick={() => openLightbox("video", featuredIndex)}
          className="group block w-full p-0 border border-white/[.12] bg-panel cursor-pointer text-left hover:border-ember transition-colors"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={wixImage(featured.posterId, 1600, 900)}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]"
            />
            <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.2),rgba(10,10,11,.82))" }} />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{ background: "rgba(10,10,11,.35)" }}
            >
              <span className="text-2xl text-white ml-1.5">▶</span>
            </div>
            <div className="absolute left-0 bottom-0 p-[clamp(16px,3vw,34px)]">
              <div className="font-cond text-xs tracking-[.28em] uppercase text-ember">Featured</div>
              <h2 className="mt-2.5 font-display text-[clamp(20px,3vw,44px)] leading-none uppercase">{featured.title}</h2>
              <p className="mt-2 max-w-[540px] text-[15px] leading-[1.6] text-offwhite">{featured.desc}</p>
            </div>
          </div>
        </button>
      </section>

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pb-[clamp(50px,7vw,110px)]">
        <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          {rest.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => openLightbox("video", i + 1)}
              className="group flex flex-col p-0 border border-white/[.12] bg-panel cursor-pointer text-left transition-[border-color,transform] duration-300 hover:border-ember hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden w-full">
                <img
                  src={wixImage(v.posterId, 800, 450)}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.07]"
                />
                <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.1),rgba(10,10,11,.7))" }} />
                <div
                  aria-hidden="true"
                  className="absolute left-3.5 bottom-3.5 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ border: "1.5px solid rgba(255,255,255,.8)", background: "rgba(10,10,11,.4)" }}
                >
                  <span className="text-sm text-white ml-1">▶</span>
                </div>
                <span className="absolute right-3 top-3 font-display text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                  {String(i + 2).padStart(2, "0")}
                </span>
              </div>
              <div className="p-[18px]">
                <h3 className="m-0 font-cond text-lg font-bold tracking-[.04em] uppercase text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-muted">{v.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
