import { categoryDefs } from "../data/categories";

const text = categoryDefs.map((c) => c.name.toUpperCase()).join(" ✦ ") + " ✦ ";

export function CategoryMarquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-b border-white/10 bg-ember py-[11px]">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-cond text-[15px] font-bold tracking-[.3em] uppercase text-ink whitespace-nowrap pr-[26px]"
          >
            {text}
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
