import { PlainIntro } from "../components/heroes";
import { Reveal } from "../components/Reveal";
import { collaboratorDefs } from "../data/collaborators";
import { MEDIA_BASE } from "../data/media";

export function CollaboratorsPage() {
  return (
    <div>
      <PlainIntro
        kicker="Collaborators"
        title="Our Show Collaborators"
        description="The Johnson County Card Show is built on a foundation of community and local partnership. These collaborators are the businesses and creators involved in making our events an exceptional experience for every collector who walks through the doors."
        maxWidth={1440}
      />
      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pb-[clamp(50px,7vw,110px)] flex flex-col gap-px bg-white/[.12] border border-white/[.12]">
        {collaboratorDefs.map((c) => (
          <Reveal
            key={c.name}
            as="article"
            className="grid gap-[clamp(18px,3vw,44px)] items-center bg-panel p-[clamp(22px,3vw,44px)]"
            style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}
          >
            <div className="flex items-center justify-center aspect-[4/3] bg-white border border-white/[.12] p-5">
              <img src={`${MEDIA_BASE}${c.logoId}`} alt={c.name} loading="lazy" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="[grid-column:span_2] min-w-0">
              <h2 className="m-0 font-display text-[clamp(22px,2.6vw,38px)] leading-none uppercase">{c.name.toUpperCase()}</h2>
              <p className="mt-3.5 text-[15px] leading-[1.8] text-body">{c.body}</p>
              <div className="flex flex-wrap gap-2.5 mt-5">
                {c.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-[46px] px-[22px] border border-white/[.26] text-white font-cond text-sm font-bold tracking-[.08em] uppercase transition-colors hover:bg-ember hover:border-ember"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
