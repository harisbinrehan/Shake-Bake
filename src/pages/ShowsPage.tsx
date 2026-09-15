import { FadedHero } from "../components/heroes";
import { ShowCard } from "../components/ShowCard";
import { shows } from "../data/shows";
import { wixImage } from "../data/media";

export function ShowsPage() {
  return (
    <div>
      <FadedHero
        kicker="Homefield Olathe · Olathe, KS"
        title="2026 Tour Dates"
        description="Every date on the Johnson County Card Show calendar. Walk in during show hours, or reserve a table and set up on the floor."
        image={wixImage("f26660_0e21358cc6464517b8ae996d41db948d~mv2.jpg", 1600, 900)}
        opacity={0.35}
        grayscale={0.7}
        gradient="linear-gradient(180deg,rgba(10,10,11,.9),rgba(10,10,11,.98))"
      />
      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(40px,6vw,90px)] grid gap-[clamp(14px,2vw,24px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
        {shows.map((s) => (
          <ShowCard key={s.id} show={s} />
        ))}
      </section>
    </div>
  );
}
