import { createStrictContext } from "../lib/strict-context";
import { useEffect, useState } from "react";

export type UiMode = "dark" | "light";

type UiModeContext = {
  uiMode: UiMode;
  setUiMode: (uiMode: UiMode) => void;
};
export const [UiModeContextProvider, useUiModeContext] =
  createStrictContext<UiModeContext>();

export function useUiMode() {
  const [uiMode, setUiMode] = useState<"dark" | "light">(() => {
    return getLocalStorage() ?? getSystemUiMode();
  });

  useEffect(() => setLocalStorage(uiMode), [uiMode]);

  return { uiMode, setUiMode };
}

function getSystemUiMode(): UiMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setLocalStorage(uiMode: UiMode) {
  localStorage.setItem("ui-mode", uiMode);
}

function getLocalStorage(): UiMode | null {
  const uiMode = localStorage.getItem("ui-mode");
  if (uiMode === "dark" || uiMode === "light") {
    return uiMode;
  }
  return null;
}
