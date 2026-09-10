import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(140px,18vw,220px)] pb-[clamp(60px,8vw,120px)] text-center">
      <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">404</span>
      <h1 className="mt-3.5 font-display text-[clamp(40px,8vw,120px)] leading-[.86] uppercase">Page not found</h1>
      <p className="mt-5 text-base text-body">That page doesn't exist — head back to the homepage.</p>
      <Link
        to="/"
        className="inline-block mt-7 h-[54px] leading-[54px] px-8 bg-ember text-white font-cond text-base font-bold tracking-[.18em] uppercase"
      >
        Back to Home
      </Link>
    </section>
  );
}
