import { atomWithStorage } from "jotai/utils";

export type UiMode = "dark" | "light";

export const uiModeAtom = atomWithStorage<UiMode>("uiMode", getSystemUiMode());

function getSystemUiMode(): UiMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
