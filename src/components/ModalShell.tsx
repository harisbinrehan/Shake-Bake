import type { ReactNode } from "react";

export function ModalShell({
  kicker,
  title,
  onClose,
  children,
}: {
  kicker: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[280] flex items-start justify-center overflow-y-auto px-3.5 py-[clamp(12px,4vh,60px)]"
      style={{ background: "rgba(6,6,7,.86)", backdropFilter: "blur(6px)" }}
    >
      <div className="w-full max-w-[620px] bg-[#111113] border border-white/[.14] animate-rise">
        <div className="flex items-center justify-between gap-3.5 px-5 py-[18px] border-b border-white/10">
          <div>
            <div className="font-cond text-[11px] tracking-[.28em] uppercase text-ember">{kicker}</div>
            <h2 className="mt-[7px] font-display text-2xl uppercase">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex-none w-[42px] h-[42px] bg-white/[.06] border border-white/[.18] text-white text-lg cursor-pointer hover:bg-ember hover:border-ember"
          >
            ✕
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
