import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { useUI } from "../context/UIContext";
import { showImage, type Show } from "../data/shows";

export function ShowCard({ show }: { show: Show }) {
  const { openVendor } = useUI();

  return (
    <Reveal
      as="article"
      className="flex flex-col bg-panel border border-white/[.12] transition-[border-color,transform] duration-300 hover:border-ember/[.65] hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden group">
        <img
          src={showImage(show)}
          alt={show.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,10,11,.1),rgba(10,10,11,.7))" }} />
        <div className="absolute left-0 top-0 bg-ink border-r border-b border-white/[.14] px-4 py-3 text-center">
          <div className="font-cond text-xs font-bold tracking-[.24em] text-ember">{show.mon}</div>
          <div className="font-display text-[30px] leading-none mt-1">{show.day}</div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h2 className="m-0 font-display text-[clamp(20px,2vw,26px)] leading-[1.05] uppercase">{show.title}</h2>
        <p className="mt-2.5 font-cond text-[15px] tracking-[.1em] uppercase text-muted leading-[1.6]">
          {show.dayLabel} · {show.hours}
          <br />
          Homefield Olathe Training Center
        </p>
        <p className="mt-3 mb-5 text-sm leading-[1.65] text-body flex-1">{show.blurb}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => openVendor(show.id)}
            className="flex-1 basis-[130px] h-[46px] bg-ember text-white border-0 cursor-pointer font-cond text-sm font-bold tracking-[.08em] uppercase hover:bg-[#FF5A33]"
          >
            Reserve a Table
          </button>
          <Link
            to={`/shows/${show.id}`}
            className="basis-full h-[42px] flex items-center justify-center text-muted font-cond text-[13px] font-medium tracking-[.08em] uppercase hover:text-white"
          >
            View details →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
