import { useState } from "react";

type Status = "idle" | "loading" | "done" | "error";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 900);
  };

  const message =
    status === "loading"
      ? "Signing you up…"
      : status === "done"
        ? "You're on the list — see you at the show."
        : status === "error"
          ? "Enter a valid email address."
          : "";

  return (
    <section aria-labelledby="news" className="relative border-t border-white/10 bg-[#0C0C0E] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(55% 130% at 12% 50%,rgba(255,61,20,.2) 0%,rgba(255,61,20,0) 60%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[.5]"
        style={{ backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,.025) 0px,rgba(255,255,255,.025) 1px,transparent 1px,transparent 26px)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,110px)] grid gap-[clamp(30px,4vw,70px)] items-center [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
        <div>
          <div className="inline-flex items-center gap-2.5 mb-[18px] py-[7px] px-3.5 border border-ember/40" style={{ background: "rgba(255,61,20,.1)" }}>
            <span className="w-[7px] h-[7px] bg-ember rounded-full animate-pulse2" />
            <span className="font-cond text-xs tracking-[.28em] uppercase text-ember">Stay in the loop</span>
          </div>
          <h2 id="news" className="m-0 font-display text-[clamp(32px,5vw,76px)] leading-[.96] tracking-[-.01em] uppercase text-white">
            Never miss
            <br />
            the next <span className="text-ember">show.</span>
          </h2>
          <p className="mt-4 max-w-[440px] text-base leading-[1.65] text-body">
            Get show updates, vendor announcements, and exclusive news — straight to your inbox.
          </p>
        </div>

        <form onSubmit={onSubmit} className="relative bg-panel border border-white/[.14] p-[clamp(22px,3vw,34px)]">
          <span aria-hidden="true" className="absolute left-0 top-0 w-6 h-6 border-t-2 border-l-2 border-ember" />
          <span aria-hidden="true" className="absolute right-0 bottom-0 w-6 h-6 border-b-2 border-r-2 border-ember" />

          <label htmlFor="news-email" className="block font-cond text-[11px] tracking-[.28em] uppercase text-muted mb-2.5">
            Email address
          </label>
          <div className="flex flex-wrap gap-2.5">
            <input
              id="news-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 min-w-[220px] h-[56px] px-[18px] bg-[#1A1A1D] text-white text-base outline-none border border-white/[.16] transition-colors focus:border-ember"
            />
            <button
              type="submit"
              className="h-[56px] px-[28px] bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.08em] uppercase transition-[background,transform] hover:bg-[#FF5A33] hover:-translate-y-px"
              style={{ clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)" }}
            >
              Join the community
            </button>
          </div>
          <p
            className="m-0 mt-3 min-h-[20px] flex items-center gap-2 font-cond text-[13px] tracking-[.1em] uppercase"
            style={{ color: status === "error" ? "#FF6A45" : "#8A8A90" }}
          >
            {message && <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: status === "error" ? "#FF6A45" : "#F2C14E" }} />}
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
