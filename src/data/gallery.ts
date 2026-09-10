export type Orientation = "p" | "l"; // portrait | landscape

export interface GalleryPhoto {
  id: string;
  orientation: Orientation;
}

// [wix media id, orientation] — same set and order as the source site's gallery.
export const galleryIds: [string, Orientation][] = [
  ["f26660_d82353e3f1344bcbbbf33cbe4f794176~mv2.jpg", "p"],
  ["f26660_563725db299446c0865443dc6f320d2d~mv2.jpg", "l"],
  ["f26660_a367c57960a041e3832dc7ed57e13b77~mv2.jpg", "l"],
  ["f26660_c6b33c8e8d894b6e923aed4703e4e66f~mv2.jpg", "p"],
  ["f26660_e54cdc80eb604064ba9b6fc42a3a7db5~mv2.jpg", "p"],
  ["f26660_3f95046d63014efc8ebf092059fd0bd6~mv2.jpg", "p"],
  ["f26660_71f41ba129f145199ea15e980a28e895~mv2.jpg", "l"],
  ["f26660_d2918073731c48538c7d18d3b4606554~mv2.jpg", "l"],
  ["f26660_2b001973f1524c4eb006c31e9228334a~mv2.jpg", "p"],
  ["f26660_519f08d49df54f08bb92b9f388c02e43~mv2.jpg", "p"],
  ["f26660_c58af02306f3421aabe450ab62c40fde~mv2.jpg", "l"],
  ["f26660_85e3950c41be495fa53e02fb2594ed51~mv2.jpg", "p"],
  ["f26660_0e21358cc6464517b8ae996d41db948d~mv2.jpg", "l"],
  ["f26660_b0a6b1e16abd4ed0808ae4e8ab26eb72~mv2.jpg", "l"],
  ["f26660_2d0b92553d6647c299c3cfee08a1835f~mv2.jpg", "p"],
  ["f26660_098fa1a2d20f4c00a48d500233e9cce1~mv2.jpg", "p"],
  ["f26660_4344752dbdc5410d89bb7783de9a9f05~mv2.jpg", "l"],
  ["f26660_342f4965de794b979cb6168b02a586e1~mv2.jpg", "l"],
  ["f26660_cb06ad68bb964353a0425108c18c74a1~mv2.jpg", "l"],
  ["f26660_e7728ec2b1d748cdb7f484a01e9f9140~mv2.jpg", "l"],
  ["f26660_3a0a0bcc8df043c9862a88df45a7b2c8~mv2.jpg", "p"],
  ["f26660_0a012fa8797847b0af931573e2770910~mv2.jpg", "l"],
  ["03c59c_889666f438884eb0945263512b2cc014~mv2.jpg", "l"],
  ["03c59c_2a92cba23e59468e894bfc7cb18d71be~mv2.jpg", "p"],
  ["03c59c_20267045a4e94fa889aa72833df56618~mv2.jpg", "l"],
  ["03c59c_16e2dd0e4dc347848a64da6b5cf8c61f~mv2.jpg", "l"],
  ["03c59c_b9eee690def24a779f4c4e8d782635a0~mv2.jpeg", "p"],
];
