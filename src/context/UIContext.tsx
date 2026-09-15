import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { featuredShowId } from "../data/shows";

export type LightboxKind = "image" | "video";

interface LightboxState {
  kind: LightboxKind;
  index: number;
}

interface UIContextValue {
  modal: "tickets" | "vendor" | null;
  ticketShowId: string;
  vendorShowId: string;
  menuOpen: boolean;
  lightbox: LightboxState | null;
  openTickets: (showId?: string) => void;
  openVendor: (showId?: string) => void;
  closeModal: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  openLightbox: (kind: LightboxKind, index: number) => void;
  closeLightbox: () => void;
  stepLightbox: (delta: number, length: number) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<"tickets" | "vendor" | null>(null);
  const [ticketShowId, setTicketShowId] = useState(featuredShowId);
  const [vendorShowId, setVendorShowId] = useState(featuredShowId);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openTickets = useCallback((showId?: string) => {
    setTicketShowId(showId ?? featuredShowId);
    setModal("tickets");
    setMenuOpen(false);
  }, []);
  const openVendor = useCallback((showId?: string) => {
    setVendorShowId(showId ?? featuredShowId);
    setModal("vendor");
    setMenuOpen(false);
  }, []);
  const closeModal = useCallback(() => setModal(null), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openLightbox = useCallback((kind: LightboxKind, index: number) => setLightbox({ kind, index }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const stepLightbox = useCallback((delta: number, length: number) => {
    setLightbox((cur) => (cur ? { ...cur, index: (cur.index + delta + length) % length } : cur));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setModal(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollLocked = Boolean(modal) || menuOpen || Boolean(lightbox);
  useEffect(() => {
    if (!scrollLocked) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [scrollLocked]);

  const value = useMemo<UIContextValue>(
    () => ({
      modal,
      ticketShowId,
      vendorShowId,
      menuOpen,
      lightbox,
      openTickets,
      openVendor,
      closeModal,
      toggleMenu,
      closeMenu,
      openLightbox,
      closeLightbox,
      stepLightbox,
    }),
    [modal, ticketShowId, vendorShowId, menuOpen, lightbox, openTickets, openVendor, closeModal, toggleMenu, closeMenu, openLightbox, closeLightbox, stepLightbox]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
