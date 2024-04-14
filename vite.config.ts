import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  workbox: {
    globPatterns: ["**/*"],
  },
  includeAssets: ["**/*"],
  manifest: {
    name: "React PWA in no time!",
    short_name: "React PWA",
    description:
      "React PWA in no time! React Vite PWA extensible seed project.",
    theme_color: "#322e4f",
    background_color: "#322e4f",
    display: "standalone",
    id: "/",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/assets/pwa/icons/manifest-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/pwa/icons/manifest-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/assets/pwa/splashscreens/apple-splash-1136-640.jpg",
        sizes: "1136x640",
        type: "image/jpg",
        form_factor: "wide",
        label: "Application",
      },
      {
        src: "/assets/pwa/splashscreens/apple-splash-1536-2048.jpg",
        sizes: "1536x2048",
        type: "image/jpg",
        form_factor: "narrow",
        label: "Application",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin as Partial<VitePWAOptions>)],
});
