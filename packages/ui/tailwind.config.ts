import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

// Resolve paths so they're correct no matter where Tailwind runs from
import path from "path";
const resolvePath = (...segments: string[]) => path.resolve(__dirname, ...segments);

const config: Config = {
  // prefix: "ui-",
  presets: [sharedConfig],

  content: [
    // UI package components
    resolvePath("./src/**/*.{ts,tsx}"),

    // If UI needs to see consuming app for prebuilding CSS (optional)
    resolvePath("../../apps/**/*.{ts,tsx,js,jsx,html}"),
  ],
};

export default config;
