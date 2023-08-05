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
          "rounded-md p-2 capitalize",
          "bg-zinc-200 text-red-500 text-opacity-80 shadow-sm",
          "dark:bg-zinc-900 dark:text-red-500 dark:text-opacity-80 dark:shadow-md",
        )}
        onClick={() => setUiMode(uiMode === "light" ? "dark" : "light")}
      >
        {uiMode === "light" ? (
          <MoonIcon className="h-6 w-6" />
        ) : (
          <SunIcon className="h-6 w-6" />
        )}
      </button>
    </nav>
  );
}
