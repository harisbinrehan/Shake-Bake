import { useEffect } from "react";
import { useUI } from "../context/UIContext";
import { galleryIds } from "../data/gallery";
import { videos } from "../data/videos";
import { venue } from "../data/venue";
import { wixImage, wixVideoMp4 } from "../data/media";

export function Lightbox() {
  const { lightbox, closeLightbox, stepLightbox } = useUI();
  const length = lightbox?.kind === "video" ? videos.length : galleryIds.length;

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") stepLightbox(1, length);
      if (e.key === "ArrowLeft") stepLightbox(-1, length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, length, stepLightbox]);

  if (!lightbox) return null;

  const { kind, index } = lightbox;
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(length).padStart(2, "0")}`;

  let src = "";
  let title = "Johnson County Card Show";
  let desc = `${venue.name.split(" Training")[0]} · Olathe, KS`;

  if (kind === "image") {
    const [id, orientation] = galleryIds[index];
    src = orientation === "p" ? wixImage(id, 1200, 1600) : wixImage(id, 1800, 1350);
  } else {
    const v = videos[index];
    title = v.title;
    desc = v.desc;
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[300] flex flex-col animate-rise" style={{ background: "rgba(6,6,7,.97)" }}>
      <div className="flex items-center justify-between px-[18px] py-3.5 flex-none">
        <span className="font-cond text-[13px] tracking-[.24em] uppercase text-muted">{counter}</span>
        <button
          type="button"
          onClick={closeLightbox}
          aria-label="Close viewer"
          className="w-11 h-11 bg-white/[.07] border border-white/[.18] text-white text-[19px] cursor-pointer hover:bg-ember hover:border-ember"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center gap-2.5 px-3 pb-3 min-h-0">
        <button
          type="button"
          onClick={() => stepLightbox(-1, length)}
          aria-label="Previous"
          className="flex-none w-[52px] h-[52px] bg-white/[.07] border border-white/[.18] text-white text-xl cursor-pointer hover:bg-ember hover:border-ember"
        >
          ‹
        </button>
        <div className="flex-1 h-full flex items-center justify-center min-w-0">
          {kind === "video" ? (
            <video
              key={videos[index].id}
              controls
              autoPlay
              playsInline
              src={wixVideoMp4(videos[index].id)}
              className="max-w-full max-h-full bg-black"
            />
          ) : (
            <img src={src} alt={title} className="max-w-full max-h-full object-contain" />
          )}
        </div>
        <button
          type="button"
          onClick={() => stepLightbox(1, length)}
          aria-label="Next"
          className="flex-none w-[52px] h-[52px] bg-white/[.07] border border-white/[.18] text-white text-xl cursor-pointer hover:bg-ember hover:border-ember"
        >
          ›
        </button>
      </div>
      <div className="flex-none px-[18px] pb-5 text-center">
        <p className="m-0 font-cond text-base tracking-[.08em] text-offwhite">{title}</p>
        <p className="mt-1.5 text-[13px] text-muted">{desc}</p>
      </div>
    </div>
  );
}
