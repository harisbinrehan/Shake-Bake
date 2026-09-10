export interface CategoryDef {
  name: string;
  imageId: string;
}

// Collectible categories highlighted across the source site (hero marquee, "One show. Every kind of collector.", etc).
export const categoryDefs: CategoryDef[] = [
  { name: "Sports Cards", imageId: "f26660_c6b33c8e8d894b6e923aed4703e4e66f~mv2.jpg" },
  { name: "TCG", imageId: "f26660_e54cdc80eb604064ba9b6fc42a3a7db5~mv2.jpg" },
  { name: "One Piece", imageId: "f26660_3f95046d63014efc8ebf092059fd0bd6~mv2.jpg" },
  { name: "Comics", imageId: "f26660_519f08d49df54f08bb92b9f388c02e43~mv2.jpg" },
  { name: "Art", imageId: "f26660_85e3950c41be495fa53e02fb2594ed51~mv2.jpg" },
  { name: "Memorabilia", imageId: "f26660_098fa1a2d20f4c00a48d500233e9cce1~mv2.jpg" },
  { name: "Collectibles", imageId: "f26660_2d0b92553d6647c299c3cfee08a1835f~mv2.jpg" },
];
