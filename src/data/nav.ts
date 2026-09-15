export interface NavItem {
  label: string;
  path: string;
}

/** Primary desktop nav + full-screen mobile menu order. */
export const primaryNav: NavItem[] = [
  { label: "Shows", path: "/shows" },
  { label: "Vendors", path: "/vendors" },
  { label: "Experience", path: "/experience" },
  { label: "Venue", path: "/venue" },
  { label: "About", path: "/about" },
];

/** Full-screen mobile menu + footer nav include the secondary pages too. */
export const allNav: NavItem[] = [
  { label: "Home", path: "/" },
  ...primaryNav,
  { label: "Gallery", path: "/gallery" },
  { label: "Videos", path: "/videos" },
  { label: "Collaborators", path: "/collaborators" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const footerNav: NavItem[] = allNav.slice(1);
