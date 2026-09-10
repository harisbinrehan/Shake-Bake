import { FadedHero } from "../components/heroes";
import { useUI } from "../context/UIContext";
import { shows } from "../data/shows";
import { wixImage } from "../data/media";

export function TicketsPage() {
  const { openTickets, openVendor } = useUI();

  return (
    <div>
      <FadedHero
        kicker="Tickets"
        title="Choose your experience"
        description="Admission to the Johnson County Card Show at Homefield Olathe. Pricing hasn't been announced yet — reserve your spot on the notify list and you'll be first through the door."
        image={wixImage("f26660_71f41ba129f145199ea15e980a28e895~mv2.jpg", 1000, 1250)}
        opacity={0.32}
        grayscale={0.6}
        gradient="linear-gradient(180deg,rgba(10,10,11,.88),rgba(10,10,11,.98))"
      />

      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(40px,6vw,90px)]">
        <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
          <article
            className="flex flex-col p-[clamp(22px,3vw,36px)] border border-ember/[.55]"
            style={{ background: "linear-gradient(180deg,rgba(255,61,20,.09),rgba(255,61,20,0) 60%),#101012" }}
          >
            <span className="font-cond text-[11px] tracking-[.28em] uppercase text-ember">Available at every show</span>
            <h2 className="mt-3.5 font-display text-[clamp(28px,3.4vw,46px)] leading-[.95] uppercase">General Admission</h2>
            <p className="mt-3.5 text-[15px] leading-[1.7] text-body">
              Full access to the show floor — every vendor table, all collectible categories, all show hours. Sports
              cards, TCG, One Piece, comics, art and memorabilia under one roof.
            </p>
            <div className="my-[22px] py-3.5 px-4 border border-dashed border-white/20 font-cond text-[15px] tracking-[.14em] uppercase" style={{ color: "#F2C14E" }}>
              Ticket information coming soon
            </div>
            <button type="button" onClick={() => openTickets()} className="mt-auto h-14 bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:bg-[#FF5A33]">
              Get Tickets
            </button>
          </article>
          <article className="flex flex-col p-[clamp(22px,3vw,36px)] border border-white/[.12] bg-panel">
            <span className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Vendors</span>
            <h2 className="mt-3.5 font-display text-[clamp(28px,3.4vw,46px)] leading-[.95] uppercase">Vendor Table</h2>
            <p className="mt-3.5 text-[15px] leading-[1.7] text-body">
              Setting up rather than shopping? Tables are reserved per show through the official table form. Curated
              placement on a high-traffic floor.
            </p>
            <div className="my-[22px] py-3.5 px-4 border border-dashed border-white/20 font-cond text-[15px] tracking-[.14em] uppercase text-muted">
              Table pricing confirmed per show
            </div>
            <button type="button" onClick={() => openVendor()} className="mt-auto h-14 bg-transparent text-white border border-white/30 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:border-white hover:bg-white/[.06]">
              Reserve a table
            </button>
          </article>
        </div>

        <div className="mt-[clamp(34px,5vw,64px)]">
          <h2 className="m-0 mb-5 font-display text-[clamp(26px,3vw,44px)] uppercase">Pick your date</h2>
          <div className="flex flex-col">
            {shows.map((s) => (
              <div key={s.id} className="grid gap-3.5 items-center py-[18px] px-1 border-t border-white/[.12]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
                <div className="flex items-baseline gap-2.5">
                  <span className="font-cond text-sm font-bold tracking-[.2em] text-ember">{s.mon}</span>
                  <span className="font-display text-[34px] leading-[.9]">{s.day}</span>
                </div>
                <span className="font-cond text-lg font-bold tracking-[.06em] uppercase">{s.title}</span>
                <span className="font-cond text-sm tracking-[.14em] uppercase text-muted">{s.hours}</span>
                <div className="flex justify-end">
                  <button type="button" onClick={() => openTickets(s.id)} className="h-[46px] px-[22px] bg-ember text-white border-0 cursor-pointer font-cond text-sm font-bold tracking-[.16em] uppercase hover:bg-[#FF5A33]">
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
