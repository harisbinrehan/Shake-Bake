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
    <section aria-labelledby="news" className="border-t border-white/10 bg-ember text-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(48px,7vw,100px)] grid gap-[clamp(22px,4vw,60px)] items-center [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        <div>
          <h2 id="news" className="m-0 font-display text-[clamp(32px,5vw,76px)] leading-[.98] uppercase text-ink">
            Never miss the next show.
          </h2>
          <p className="mt-4 max-w-[460px] text-base leading-[1.6]" style={{ color: "rgba(10,10,11,.78)" }}>
            Get show updates, vendor announcements, and exclusive news.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label htmlFor="news-email" className="font-cond text-xs tracking-[.28em] uppercase" style={{ color: "rgba(10,10,11,.72)" }}>
            Email address
          </label>
          <div className="flex flex-wrap gap-2.5">
            <input
              id="news-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 min-w-[240px] h-[58px] px-[18px] text-ink text-base outline-none transition-[border-color,background] focus:border-ink focus:bg-ink/[.14]"
              style={{ background: "rgba(10,10,11,.08)", border: "1px solid rgba(10,10,11,.35)" }}
            />
            <button
              type="submit"
              className="h-[58px] px-[30px] bg-ink text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:bg-[#242428] transition-colors"
            >
              Join the community
            </button>
          </div>
          <p
            className="m-0 min-h-[20px] font-cond text-[15px] tracking-[.08em] uppercase"
            style={{ color: status === "error" ? "#6B1300" : "rgba(10,10,11,.75)" }}
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
