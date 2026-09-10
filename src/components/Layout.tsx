import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { MobileCTA } from "./MobileCTA";
import { Newsletter } from "./Newsletter";
import { Lightbox } from "./Lightbox";
import { TicketModal } from "./TicketModal";
import { VendorModal } from "./VendorModal";
import { useUI } from "../context/UIContext";

export function Layout() {
  const { modal } = useUI();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="bg-ink min-h-screen relative">
      <Header />
      <MobileMenu />
      <main id="top" className="relative">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <MobileCTA />
      <Lightbox />
      {modal === "tickets" && <TicketModal />}
      {modal === "vendor" && <VendorModal />}
    </div>
  );
}
