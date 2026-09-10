import { wixImage } from "./media";

export interface ShowDay {
  day: string;
  hours: string;
}

export interface Show {
  id: string;
  mon: string;
  day: string;
  title: string;
  dayLabel: string;
  hours: string;
  dateLong: string;
  iso: string;
  days: ShowDay[];
  tables: string;
  imageId: string;
  blurb: string;
}

export const shows: Show[] = [
  {
    id: "sep-12",
    mon: "SEP",
    day: "12",
    title: "September 1-Day Show",
    dayLabel: "Saturday",
    hours: "10AM – 4PM",
    dateLong: "September 12, 2026",
    iso: "2026-09-12",
    days: [{ day: "Saturday", hours: "10:00 AM – 4:00 PM" }],
    tables: "https://forms.gle/Q82GuFid1NAUsWWp6",
    imageId: "f26660_71f41ba129f145199ea15e980a28e895~mv2.jpg",
    blurb:
      "A one-day Saturday show at Homefield Olathe — sports cards, TCG, One Piece, comics, art and memorabilia across the floor.",
  },
  {
    id: "sep-26",
    mon: "SEP",
    day: "26–27",
    title: "September 2-Day Show",
    dayLabel: "Saturday & Sunday",
    hours: "SAT 10AM–5PM · SUN 10AM–4PM",
    dateLong: "September 26–27, 2026",
    iso: "2026-09-26",
    days: [
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
    ],
    tables: "https://forms.gle/zfdVzbNTmnKwzvMv8",
    imageId: "03c59c_2a92cba23e59468e894bfc7cb18d71be~mv2.jpg",
    blurb:
      "The flagship two-day weekend. Two full days of collecting, trading and rare finds at Homefield Olathe.",
  },
  {
    id: "oct-10",
    mon: "OCT",
    day: "10",
    title: "October 1-Day Show",
    dayLabel: "Saturday",
    hours: "10AM – 4PM",
    dateLong: "October 10, 2026",
    iso: "2026-10-10",
    days: [{ day: "Saturday", hours: "10:00 AM – 4:00 PM" }],
    tables: "https://forms.gle/FYqiCijqFZ9Zgsuq7",
    imageId: "f26660_cb06ad68bb964353a0425108c18c74a1~mv2.jpg",
    blurb: "A one-day October show at the Olathe Training Center.",
  },
  {
    id: "oct-31",
    mon: "OCT",
    day: "31",
    title: "Halloween Bash",
    dayLabel: "Saturday",
    hours: "Hours announced soon",
    dateLong: "October 31, 2026",
    iso: "2026-10-31",
    days: [{ day: "Saturday", hours: "Hours announced soon" }],
    tables: "https://forms.gle/gJnvvFZQWG6jTJ2r6",
    imageId: "f26660_2d0b92553d6647c299c3cfee08a1835f~mv2.jpg",
    blurb: "The Halloween Bash returns to the Olathe Training Center.",
  },
  {
    id: "nov-14",
    mon: "NOV",
    day: "14",
    title: "Veteran's Appreciation Show",
    dayLabel: "Saturday",
    hours: "Hours announced soon",
    dateLong: "November 14, 2026",
    iso: "2026-11-14",
    days: [{ day: "Saturday", hours: "Hours announced soon" }],
    tables: "https://forms.gle/zviL7evtngQEmNyy7",
    imageId: "f26660_b0a6b1e16abd4ed0808ae4e8ab26eb72~mv2.jpg",
    blurb:
      "A show dedicated to honoring veterans of the armed forces, at the Olathe Training Center.",
  },
  {
    id: "dec-19",
    mon: "DEC",
    day: "19–20",
    title: "Santa's 2-Day Shake & Bake Workshop",
    dayLabel: "Saturday & Sunday",
    hours: "Hours announced soon",
    dateLong: "December 19–20, 2026",
    iso: "2026-12-19",
    days: [
      { day: "Saturday", hours: "Hours announced soon" },
      { day: "Sunday", hours: "Hours announced soon" },
    ],
    tables: "https://forms.gle/bxpH9QUa9KFG59G79",
    imageId: "f26660_3a0a0bcc8df043c9862a88df45a7b2c8~mv2.jpg",
    blurb: "Two days of holiday collecting to close out the 2026 tour.",
  },
];

export function showImage(show: Show, w = 900, h = 563): string {
  return wixImage(show.imageId, w, h);
}

export function getShowById(id: string | undefined): Show {
  return shows.find((s) => s.id === id) ?? shows[1];
}

/** The flagship show featured on the homepage hero / "Up Next". */
export const featuredShowId = "sep-26";
