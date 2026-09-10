import { useState } from "react";
import { ModalShell } from "./ModalShell";
import { useUI } from "../context/UIContext";
import { shows, getShowById } from "../data/shows";
import { contacts } from "../data/venue";

const primaryBtn =
  "h-[54px] px-[26px] bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase";
const ghostBtn =
  "h-[54px] px-[26px] bg-transparent text-white border border-white/[.26] cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase";
const labelCls = "block mb-2 font-cond text-[11px] tracking-[.26em] uppercase text-muted";
const inputCls = "w-full h-[50px] px-3.5 bg-[#1A1A1D] border border-white/[.16] text-white text-[15px] outline-none";

function StepBar({ step }: { step: number }) {
  return (
    <div className="flex gap-1.5 mb-5">
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex-1 h-[3px]" style={{ background: step >= n ? "#FF3D14" : "rgba(255,255,255,.14)" }} />
      ))}
    </div>
  );
}

export function TicketModal() {
  const { ticketShowId, closeModal } = useUI();
  const [step, setStep] = useState(1);
  const [showId, setShowId] = useState(ticketShowId);
  const [qty, setQty] = useState(2);
  const [sent, setSent] = useState(false);
  const show = getShowById(showId);

  return (
    <ModalShell kicker="Ticketing" title="Get Tickets" onClose={closeModal}>
      <StepBar step={step} />

      {step === 1 && (
        <div>
          <span className={labelCls}>Step 1 — Select a show</span>
          <div className="flex flex-col gap-2">
            {shows.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setShowId(s.id)}
                className="flex items-center justify-between gap-3.5 py-3.5 px-4 text-white cursor-pointer text-left"
                style={{
                  background: showId === s.id ? "rgba(255,61,20,.12)" : "#17171A",
                  border: `1px solid ${showId === s.id ? "#FF3D14" : "rgba(255,255,255,.12)"}`,
                }}
              >
                <span className="font-cond text-[17px] font-bold tracking-[.06em] uppercase">{s.title}</span>
                <span className="font-display text-base whitespace-nowrap">
                  {s.mon} {s.day}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-2.5 mt-5">
            <button type="button" className={primaryBtn} onClick={() => setStep(2)}>
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <span className={labelCls}>Step 2 — Choose your experience</span>
          <div className="border border-white/[.12] bg-[#17171A] p-[18px] mb-2.5">
            <div className="flex justify-between gap-3 items-start">
              <div>
                <div className="font-display text-[22px] uppercase">General Admission</div>
                <p className="mt-2 text-sm leading-[1.6] text-[#A1A1A6] max-w-[340px]">
                  Full access to the show floor at {show.title} — every vendor table, all collectible categories, all show
                  hours.
                </p>
              </div>
              <span className="flex-none py-1.5 px-2.5 border font-cond text-[11px] tracking-[.2em] uppercase" style={{ borderColor: "rgba(242,193,78,.5)", color: "#F2C14E" }}>
                Price TBA
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="font-cond text-[13px] tracking-[.2em] uppercase text-muted">Quantity</span>
              <div className="flex items-center border border-white/[.16]">
                <button
                  type="button"
                  aria-label="Decrease"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 bg-transparent border-0 text-white text-lg cursor-pointer"
                >
                  −
                </button>
                <span className="w-11 text-center font-display text-lg">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-10 h-10 bg-transparent border-0 text-white text-lg cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="border border-dashed border-white/[.18] p-[18px] text-muted text-sm leading-[1.6]">
            <strong className="block text-white font-cond text-base tracking-[.1em] uppercase mb-1.5">
              Ticket information coming soon
            </strong>
            Pricing and additional ticket types have not been announced. Add your email on the next step and we'll notify
            you the moment tickets go live.
          </div>
          <div className="flex gap-2.5 mt-5 flex-wrap">
            <button type="button" className={ghostBtn} onClick={() => setStep(1)}>
              Back
            </button>
            <button type="button" className={primaryBtn} onClick={() => setStep(3)}>
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <span className={labelCls}>Step 3 — Notify me when tickets go live</span>
          <div className="bg-[#17171A] border border-white/[.12] p-4 mb-4 font-cond text-[15px] tracking-[.08em] uppercase">
            <div className="flex justify-between gap-2.5">
              <span className="text-muted">Show</span>
              <span>{show.title}</span>
            </div>
            <div className="flex justify-between gap-2.5 mt-2">
              <span className="text-muted">Date</span>
              <span>{show.dateLong}</span>
            </div>
            <div className="flex justify-between gap-2.5 mt-2">
              <span className="text-muted">Admissions</span>
              <span>{qty} × General</span>
            </div>
            <div className="flex justify-between gap-2.5 mt-2">
              <span className="text-muted">Total</span>
              <span style={{ color: "#F2C14E" }}>Price TBA</span>
            </div>
          </div>

          {!sent ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label htmlFor="tk-email" className={labelCls}>
                Email address
              </label>
              <input id="tk-email" type="email" required placeholder="you@example.com" className={inputCls} />
              <div className="flex gap-2.5 mt-[18px] flex-wrap">
                <button type="button" className={ghostBtn} onClick={() => setStep(2)}>
                  Back
                </button>
                <button type="submit" className={primaryBtn}>
                  Notify me
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="text-white text-[15px]">You're on the list.</p>
              <div className="mt-3.5 p-4 border" style={{ borderColor: "rgba(255,61,20,.5)", background: "rgba(255,61,20,.1)" }}>
                <div className="font-display text-xl uppercase">Request received</div>
                <p className="mt-2 text-sm text-offwhite leading-[1.6]">
                  This is a prototype — no payment was taken. Live ticketing will be handled here once pricing is
                  announced. Questions: {contacts.email}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </ModalShell>
  );
}
