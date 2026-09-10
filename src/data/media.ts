export const MEDIA_BASE = "https://static.wixstatic.com/media/";
const VIDEO_BASE = "https://video.wixstatic.com/video/";

/** Wix image transform: fixed-fill crop at the given pixel size, matching the source site's own CDN usage. */
export function wixImage(id: string, w: number, h: number): string {
  return `${MEDIA_BASE}${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/file.jpg`;
}

export function wixVideoMp4(id: string): string {
  return `${VIDEO_BASE}f26660_${id}/1080p/mp4/file.mp4`;
}
