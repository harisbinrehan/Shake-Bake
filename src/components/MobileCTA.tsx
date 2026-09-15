import { Link } from "react-router-dom";
import { useIsMobile } from "../hooks/useViewport";
import { useUI } from "../context/UIContext";

export function MobileCTA() {
  const isMobile = useIsMobile();
  const { openVendor } = useUI();

  if (!isMobile) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[110] flex items-center justify-between gap-2 px-3.5 py-2.5 bg-ink/[.93] backdrop-blur-md border-t border-white/[.14]">
      <div className="leading-[1.15] min-w-0">
        <div className="font-cond text-[10px] tracking-[.26em] uppercase text-ember">Next Show</div>
        <div className="font-display text-[17px] uppercase whitespace-nowrap">Sept 26–27</div>
      </div>
      <div className="flex-none flex items-center gap-2">
        <button
          type="button"
          onClick={() => openVendor()}
          className="h-[50px] px-4 bg-transparent text-white border border-white/30 cursor-pointer font-cond text-sm font-bold tracking-[.14em] uppercase whitespace-nowrap"
        >
          Vendor
        </button>
        <Link
          to="/shows"
          className="h-[50px] px-5 flex items-center bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.16em] uppercase whitespace-nowrap"
        >
          View Shows
        </Link>
      </div>
    </div>
  );
}
