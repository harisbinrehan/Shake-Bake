import { useNavigate } from "react-router-dom";
import { allNav } from "../data/nav";
import { useUI } from "../context/UIContext";
import { venue } from "../data/venue";

export function MobileMenu() {
  const { menuOpen, closeMenu, openVendor } = useUI();
  const navigate = useNavigate();

  if (!menuOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[200] bg-ink flex flex-col animate-rise">
      <div className="flex items-center justify-between px-[18px] h-[86px] border-b border-white/10 flex-none">
        <span className="font-display text-[19px] tracking-[.04em] uppercase">Shake &amp; Bake</span>
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className="w-[46px] h-[46px] bg-white/[.06] border border-white/[.16] text-white text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>
      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-[18px] pt-[22px] pb-[30px] flex flex-col">
        {allNav.map((n, i) => (
          <button
            key={n.path}
            type="button"
            onClick={() => {
              navigate(n.path);
              closeMenu();
            }}
            className="flex items-baseline gap-3.5 bg-transparent border-0 border-b border-white/[.08] py-4 px-0.5 cursor-pointer text-left"
          >
            <span className="font-cond text-xs tracking-[.2em] text-ember min-w-[26px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-[32px] tracking-[.01em] text-white">{n.label.toUpperCase()}</span>
          </button>
        ))}
        <div className="flex flex-col gap-2.5 mt-[26px]">
          <button
            type="button"
            onClick={() => openVendor()}
            className="h-14 bg-ember text-white border-0 cursor-pointer font-cond text-[17px] font-bold tracking-[.18em] uppercase"
          >
            Become a Vendor
          </button>
        </div>
        <p className="mt-[26px] text-[13px] leading-[1.7] text-muted">
          {venue.name}
          <br />
          {venue.addressLine1}, {venue.addressLine2}
        </p>
      </nav>
    </div>
  );
}
