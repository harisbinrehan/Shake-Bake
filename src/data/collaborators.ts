export interface CollaboratorLink {
  label: string;
  url: string;
}

export interface CollaboratorDef {
  name: string;
  logoId: string;
  body: string;
  links: CollaboratorLink[];
}

export const collaboratorDefs: CollaboratorDef[] = [
  {
    name: "Homefield Olathe",
    logoId: "03c59c_b53e3bb27c0a4966978facbebacf830d~mv2.png",
    body: 'Homefield Olathe is a premier 270,000-square-foot sports and training facility located in the heart of Johnson County. Designed as a high-performance "play space," the venue hosts elite athletic competitions, community events, and large-scale showcases under one roof. As the proud home of the Johnson County Card Show, Homefield transforms into a dynamic marketplace where collectors, vendors, athletes, and fans come together in an electrifying atmosphere.',
    links: [{ label: "Visit Site", url: "https://homefieldkc.com/olathe-training-center/" }],
  },
  {
    name: "Bakes by Dawn",
    logoId: "03c59c_0c445f45152645e9a8d24773c2fc81f6~mv2.png",
    body: "Bakes by Dawn is a cottage food–certified baking brand specializing in gluten-free and vegan treats crafted without compromise. Founded by Dawn Alexander, the brand focuses on thoughtfully developed recipes that go far beyond simple ingredient substitutions. Through careful technique and quality ingredients, Bakes by Dawn delivers baked goods that match the taste and texture of traditional favorites.",
    links: [{ label: "Visit Site", url: "https://www.youtube.com/@bakesbydawn" }],
  },
  {
    name: "Westhaven Agency",
    logoId: "03c59c_36d2c270ae3742369ce2d6b29fce0698~mv2.png",
    body: "Based in Los Angeles, Westhaven Agency is a full-service content and media production company led by Chip Johnson and Dawn Alexander. With over 23 years of combined experience, the agency provides copywriting, social media management, content creation, podcast production, video production, and post-production services.",
    links: [{ label: "Visit Site", url: "https://www.chipjohnsonfilm.com/westhaven" }],
  },
  {
    name: "Brendan O'Callaghan of BOCards",
    logoId: "03c59c_63c1729f00fa41729f50f9824339d5f7~mv2.jpg",
    body: "Brendan O'Callaghan is an aspiring play-by-play sports broadcaster and the creator behind BOCards. With a lifelong dream of becoming the voice of the New York Yankees, Brendan has been building his career in sports media through podcasting, video production, and sports commentary focused on baseball cards and the hobby community. Currently a freshman at Bergen Community College, he has been accepted into a competitive internship at Iona University.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/bocardss" },
      { label: "Podcast", url: "https://youtube.com/@hudsonriverrumble?si=xxIp9u8bzE3U4UjI" },
    ],
  },
];
