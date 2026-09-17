import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getShowById, shows, showImage } from "../data/shows";
import { categoryDefs } from "../data/categories";
import { galleryIds } from "../data/gallery";
import { wixImage } from "../data/media";
import { useUI } from "../context/UIContext";

export function ShowDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openVendor, openLightbox } = useUI();
  const show = getShowById(id);
  const related = shows.filter((s) => s.id !== show.id).slice(0, 3);
  const galleryPreview = galleryIds.slice(6, 12);

  useEffect(() => {
    if (!shows.some((s) => s.id === id)) {
      navigate("/shows", { replace: true });
    }
  }, [id, navigate]);

  return (
    <div>
      <section className="relative flex items-end overflow-hidden border-b border-white/10" style={{ minHeight: "min(78vh,760px)" }}>
        <img src={showImage(show, 1800, 1000)} alt={show.title} className="absolute inset-0 w-full h-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.82) 0%,rgba(10,10,11,.5) 40%,rgba(10,10,11,.95) 100%)" }} />
        <div className="relative w-full max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(120px,14vw,180px)] pb-[clamp(30px,4vw,60px)]">
          <Link to="/shows" className="inline-block mb-[18px] font-cond text-[13px] font-medium tracking-[.08em] uppercase text-muted hover:text-white">
            ← All shows
          </Link>
          <h1 className="m-0 font-display text-[clamp(38px,7vw,110px)] leading-[.93] tracking-[-.015em] uppercase">
            Johnson County Card Show
          </h1>
          <p className="mt-3.5 font-cond text-[clamp(20px,3vw,40px)] font-semibold tracking-[.06em] uppercase text-ember">
            {show.title} · {show.dateLong}
          </p>
          <p className="mt-2 font-cond text-[clamp(15px,1.6vw,20px)] tracking-[.16em] uppercase text-offwhite">
            Homefield Olathe Training Center
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(34px,5vw,70px)]">
        <div className="grid gap-px bg-white/[.12] border border-white/[.12]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          <div className="bg-panel p-[22px]">
            <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Date</div>
            <div className="font-display text-[clamp(20px,2vw,26px)] mt-2.5 uppercase">{show.dateLong}</div>
          </div>
          <div className="bg-panel p-[22px]">
            <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Time</div>
            {show.days.map((d) => (
              <div key={d.day} className="font-cond text-lg font-semibold tracking-[.06em] uppercase mt-2.5">
                {d.day} {d.hours}
              </div>
            ))}
          </div>
          <div className="bg-panel p-[22px]">
            <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Location</div>
            <div className="font-cond text-lg font-semibold tracking-[.06em] uppercase mt-2.5 leading-[1.5]">
              Homefield Olathe
              <br />2115 E. Kansas City Rd.
              <br />Olathe, KS 66061
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5">
          <button type="button" onClick={() => openVendor(show.id)} className="flex-1 basis-[220px] h-[58px] bg-ember text-white border-0 cursor-pointer font-cond text-[17px] font-bold tracking-[.08em] uppercase hover:bg-[#FF5A33]">
            Become a Vendor
          </button>
          <a
            href={show.tables}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 basis-[220px] h-[58px] flex items-center justify-center bg-transparent text-white border border-white/30 cursor-pointer font-cond text-[17px] font-bold tracking-[.08em] uppercase hover:border-white hover:bg-white/[.06]"
          >
            Official Table Form
          </a>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pb-[clamp(40px,6vw,90px)] grid gap-[clamp(24px,4vw,60px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
        <div>
          <h2 className="m-0 font-display text-[clamp(26px,3vw,44px)] uppercase">About the show</h2>
          <p className="mt-4 text-base leading-[1.75] text-body">{show.blurb}</p>
          <p className="mt-3.5 text-base leading-[1.75] text-body">
            Hosted by Shake &amp; Bake, this show brings together passionate collectors, trusted vendors, and rare
            finds all under one roof. From high-grade cards to unique memorabilia, you'll discover incredible items,
            meet fellow hobbyists, and experience the excitement of the trading card community.
          </p>
          <h3 className="mt-[30px] font-cond text-[13px] tracking-[.28em] uppercase text-muted">What to expect</h3>
          <div className="flex flex-wrap gap-2 mt-3.5">
            {categoryDefs.map((c) => (
              <span key={c.name} className="py-[9px] px-3.5 border border-white/[.16] font-cond text-[13px] font-medium tracking-[.07em] uppercase text-offwhite">
                {c.name.toUpperCase()}
              </span>
            ))}
          </div>
          <h3 className="mt-[30px] font-cond text-[13px] tracking-[.28em] uppercase text-muted">Vendors</h3>
          <p className="mt-3 text-base leading-[1.75] text-body">
            Tables for this show are confirmed through the official table form.{" "}
            <a href={show.tables} target="_blank" rel="noopener noreferrer">
              Open the table form →
            </a>
          </p>
          <h3 className="mt-[30px] font-cond text-[13px] tracking-[.28em] uppercase text-muted">Parking &amp; directions</h3>
          <p className="mt-3 text-base leading-[1.75] text-body">
            Homefield Olathe Training Center, 2115 E. Kansas City Rd., Olathe, KS 66061. Detailed parking and
            accessibility information is coming soon — see the{" "}
            <a href="https://homefieldkc.com/olathe-training-center/" target="_blank" rel="noopener noreferrer">
              Homefield Olathe website
            </a>{" "}
            or contact us.
          </p>
          <h3 className="mt-[30px] font-cond text-[13px] tracking-[.28em] uppercase text-muted">Admission</h3>
          <p className="mt-3 text-base leading-[1.75] text-body">
            No advance ticket required — just walk in during show hours listed above.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            {galleryPreview.map(([id]) => {
              const index = galleryIds.findIndex(([gid]) => gid === id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => openLightbox("image", index)}
                  aria-label={`Johnson County Card Show photo ${index + 1}`}
                  className="p-0 border border-white/[.12] bg-panel2 cursor-pointer aspect-square overflow-hidden hover:border-ember transition-colors"
                >
                  <img src={wixImage(id, 900, 900)} alt={`Johnson County Card Show photo ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
          <h3 className="mt-[34px] mb-3.5 font-cond text-[13px] tracking-[.28em] uppercase text-muted">Related shows</h3>
          <div className="flex flex-col">
            {related.map((s) => (
              <Link
                key={s.id}
                to={`/shows/${s.id}`}
                className="flex items-center justify-between gap-3.5 py-4 px-1 border-t border-white/[.12] hover:bg-white/[.04] transition-colors"
              >
                <span className="font-cond text-[17px] font-bold tracking-[.06em] uppercase text-white">{s.title}</span>
                <span className="font-display text-[17px] text-ember whitespace-nowrap">
                  {s.mon} {s.day}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
