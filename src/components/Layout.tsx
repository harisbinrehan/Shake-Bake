import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { MobileCTA } from "./MobileCTA";
import { Newsletter } from "./Newsletter";
import { Lightbox } from "./Lightbox";
import { VendorModal } from "./VendorModal";
import { SplashScreen } from "./SplashScreen";
import { useUI } from "../context/UIContext";

export function Layout() {
  const { modal } = useUI();
  const location = useLocation();

  return (
    <div className="bg-ink min-h-screen relative">
      <SplashScreen />
      <Header />
      <MobileMenu />
      <main id="top" className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Newsletter />
      <Footer />
      <MobileCTA />
      <Lightbox />
      {modal === "vendor" && <VendorModal />}
    </div>
  );
}
