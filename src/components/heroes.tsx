import type { ReactNode } from "react";

/** Faded background-image hero used by interior list pages (Shows, Tickets, Experience). */
export function FadedHero({
  kicker,
  title,
  description,
  image,
  opacity = 0.32,
  grayscale = 0.6,
  gradient = "linear-gradient(180deg,rgba(10,10,11,.88),rgba(10,10,11,.98))",
}: {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  opacity?: number;
  grayscale?: number;
  gradient?: string;
}) {
  return (
    <section className="relative py-[clamp(120px,16vw,220px)] px-[clamp(18px,4vw,56px)] pb-[clamp(40px,6vw,80px)] border-b border-white/10 overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity, filter: `grayscale(${grayscale})` }}
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: gradient }} />
      <div className="relative max-w-[1440px] mx-auto">
        <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">{kicker}</span>
        <h1 className="mt-3.5 font-display text-[clamp(44px,9vw,150px)] leading-[.84] tracking-[-.02em] uppercase">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-[560px] text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-body">{description}</p>}
      </div>
    </section>
  );
}

/** Full-bleed image hero with bottom-aligned content, used by ShowDetail, Vendors, Venue, About. */
export function TallHero({
  kicker,
  kickerColor = "#FF3D14",
  title,
  description,
  image,
  video,
  minHeight = "min(76vh,720px)",
  children,
}: {
  kicker?: string;
  kickerColor?: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  video?: string;
  minHeight?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative flex items-end overflow-hidden border-b border-white/10"
      style={{ minHeight }}
    >
      {video ? (
        <video autoPlay muted loop playsInline preload="metadata" poster={image} aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg,rgba(10,10,11,.82) 0%,rgba(10,10,11,.5) 45%,rgba(10,10,11,.96) 100%)" }}
      />
      <div className="relative w-full max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(120px,14vw,180px)] pb-[clamp(34px,4vw,60px)]">
        {kicker && (
          <span className="font-cond text-xs tracking-[.3em] uppercase" style={{ color: kickerColor }}>
            {kicker}
          </span>
        )}
        <h1 className="mt-3.5 font-display text-[clamp(46px,10vw,168px)] leading-[.84] tracking-[-.02em] uppercase">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-[560px] text-[clamp(15px,1.5vw,19px)] leading-[1.7] text-offwhite">{description}</p>}
        {children}
      </div>
    </section>
  );
}

/** Plain top-of-page intro used by pages with no hero photography (Gallery, Videos, Collaborators, FAQ, Contact). */
export function PlainIntro({
  kicker,
  title,
  description,
  maxWidth = 1440,
}: {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  maxWidth?: number;
}) {
  return (
    <section className="mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(120px,15vw,200px)] pb-[clamp(24px,3vw,44px)]" style={{ maxWidth }}>
      <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">{kicker}</span>
      <h1 className="mt-3.5 font-display text-[clamp(44px,9vw,150px)] leading-[.84] tracking-[-.02em] uppercase">
        {title}
      </h1>
      {description && <p className="mt-[18px] max-w-[560px] text-base leading-[1.7] text-body">{description}</p>}
    </section>
  );
}
