import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon-32.png", "favicon-64.png", "apple-touch-icon.png"],
      manifest: {
        name: "Johnson County Card Show",
        short_name: "JCCS",
        description: "Johnson County Card Show — hosted by Shake & Bake at Homefield Olathe. Shows, vendor tables, and everything collectors need.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#0A0A0B",
        theme_color: "#0A0A0B",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,woff2,png,jpg,jpeg,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname === "static.wixstatic.com",
            handler: "CacheFirst",
            options: {
              cacheName: "wix-media",
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});
