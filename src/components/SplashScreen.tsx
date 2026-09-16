import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/logo.png";

const subscribeNoop = () => () => {};

// Only show once per session so repeat visits/navigations aren't interrupted.
// Read synchronously via useSyncExternalStore (server snapshot: true) so nothing
// flashes before the check runs.
function getHasSeenSplash() {
  try {
    return sessionStorage.getItem("hasSeenSplash") === "true";
  } catch {
    return false;
  }
}

export function SplashScreen() {
  const hasSeenSplash = useSyncExternalStore(subscribeNoop, getHasSeenSplash, () => true);
  const [dismissed, setDismissed] = useState(false);
  const show = !hasSeenSplash && !dismissed;

  useEffect(() => {
    if (hasSeenSplash) return;
    const timer = window.setTimeout(() => {
      setDismissed(true);
      try {
        sessionStorage.setItem("hasSeenSplash", "true");
      } catch {
        // Storage unavailable (private browsing) — splash just replays next load.
      }
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [hasSeenSplash]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-6%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[400] flex flex-col items-center justify-center bg-ink"
        >
          <motion.img
            src={LOGO}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 object-contain"
          />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 font-display text-2xl tracking-[.04em] text-white uppercase"
          >
            Shake &amp; Bake
          </motion.div>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ delay: 0.45, duration: 1, ease: "easeInOut" }}
            className="bg-ember mt-6 h-[2px] rounded-full"
            style={{ boxShadow: "0 0 10px rgba(255,61,20,.6)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
