import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { primaryNav } from "../data/nav";
import { useUI } from "../context/UIContext";
import LOGO from "../assets/logo.png";

export function Header() {
  const [compact, setCompact] = useState(false);
  const { toggleMenu } = useUI();
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      data-jccs-nav=""
      className="fixed inset-x-0 top-0 z-[130] flex items-center justify-between gap-5 px-[clamp(14px,3vw,44px)] transition-[height,background-color,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
      style={{
        height: compact ? 66 : 86,
        background: compact ? "rgba(10,10,11,.88)" : "linear-gradient(180deg,rgba(10,10,11,.9) 0%,rgba(10,10,11,0) 100%)",
        backdropFilter: compact ? "blur(16px)" : "blur(0px)",
        borderBottom: `1px solid ${compact ? "rgba(255,255,255,.12)" : "rgba(255,255,255,0)"}`,
      }}
    >
      <button
        type="button"
        onClick={() => navigate("/")}
        aria-label="Johnson County Card Show — home"
        className="flex items-center gap-3 bg-transparent border-0 p-0 cursor-pointer"
      >
        <img src={LOGO} alt="Shake & Bake logo" className="w-11 h-11 object-contain" />
        <span className="font-display text-[19px] tracking-[.04em] text-white uppercase">Shake &amp; Bake</span>
      </button>

      <nav aria-label="Primary" className="hidden md:flex items-center gap-[clamp(14px,2vw,30px)]">
        {primaryNav.map((n) => {
          const active = location.pathname === n.path;
          return (
            <Link
              key={n.path}
              to={n.path}
              className="group py-1.5 font-cond text-[15px] font-medium tracking-[.07em] uppercase transition-colors border-b-2"
              style={{
                color: active ? "#FFFFFF" : "#A1A1A6",
                borderColor: active ? "#FF3D14" : "rgba(255,255,255,0)",
              }}
            >
              <span className="group-hover:text-white transition-colors">{n.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Open menu"
          className="md:hidden w-[46px] h-[46px] flex flex-col items-center justify-center gap-[5px] bg-white/[.06] border border-white/[.16] cursor-pointer"
        >
          <span className="block w-[18px] h-[2px] bg-white" />
          <span className="block w-[18px] h-[2px] bg-white" />
        </button>
      </div>
    </header>
  );
}
