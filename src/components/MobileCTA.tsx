import { useIsMobile } from "../hooks/useViewport";
import { useUI } from "../context/UIContext";

export function MobileCTA() {
  const isMobile = useIsMobile();
  const { openTickets } = useUI();

  if (!isMobile) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[110] flex items-center justify-between gap-3 px-3.5 py-2.5 bg-ink/[.93] backdrop-blur-md border-t border-white/[.14]">
      <div className="leading-[1.15]">
        <div className="font-cond text-[10px] tracking-[.26em] uppercase text-ember">Next Show</div>
        <div className="font-display text-[17px] uppercase">Sept 26–27</div>
      </div>
      <button
        type="button"
        onClick={() => openTickets()}
        className="flex-none h-[50px] px-6 bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.16em] uppercase"
      >
        Get Tickets
      </button>
    </div>
  );
}
