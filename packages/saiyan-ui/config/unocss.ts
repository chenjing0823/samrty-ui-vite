import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const widths = ["auto", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
const safelist = [
  ...widths.map((v) => `w-${v}`),
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 0.5}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 0.5}`),
  ...Array.from({ length: 8 }, (_, i) => `h-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `w-${i + 1}`),
  "border-none",
  "border-1",
  "focus-border-blue",
  "focus-outline-unset",
  "focus-outline-lightblue",

  ...colors.map((v) => `${v}-50`),
  ...colors.map((v) => `${v}-100`),
  ...colors.map((v) => `${v}-200`),
  ...colors.map((v) => `${v}-400`),
  ...colors.map((v) => `${v}-500`),
  ...colors.map((v) => `bg-${v}-50`),
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-200`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-50`),
  ...colors.map((v) => `border-${v}-100`),
  ...colors.map((v) => `border-${v}-200`),
  ...colors.map((v) => `border-${v}-300`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-300`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),
  "text-white",
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
    "clear",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
