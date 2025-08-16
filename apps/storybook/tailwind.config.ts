import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  presets: [sharedConfig],
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    // include UI package so Tailwind picks up its class names
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ]
};

export default config; 