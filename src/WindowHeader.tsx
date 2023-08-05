import { clsx } from "clsx";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export type UiMode = "dark" | "light";

type Props = {
  uiMode: UiMode;
  setUiMode: (uiMode: UiMode) => void;
};

export function WindowHeader({ uiMode, setUiMode }: Props) {
  return (
    <nav className="flex justify-end p-2">
      <button
        className={clsx(
          "p-2 rounded-md capitalize opacity-50",
          "bg-zinc-200 text-red-500 shadow-md",
          "dark:bg-zinc-900 dark:text-red-500 dark:shadow-md",
        )}
        onClick={() => setUiMode(uiMode === "light" ? "dark" : "light")}
      >
        {uiMode === "light" ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </button>
    </nav>
  );
}
