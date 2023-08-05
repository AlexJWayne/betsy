import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

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
          "w-10 h-10 rounded-md overflow-hidden relative capitalize text-red-500 transition-colors duration-300",
          "bg-zinc-200 shadow-sm",
          "dark:bg-zinc-900 dark:shadow-md",
        )}
        aria-label="Toggle dark mode"
        onClick={() => setUiMode(uiMode === "light" ? "dark" : "light")}
      >
        <div
          className={clsx(
            "w-20 flex flex-row transition-transform duration-300",
            {
              "-translate-x-10": uiMode === "dark",
            },
          )}
        >
          <SwitchFace uiMode="light" />
          <SwitchFace uiMode="dark" />
        </div>
      </button>
    </nav>
  );
}

type SwitchFaceProps = { uiMode: UiMode };
function SwitchFace({ uiMode }: SwitchFaceProps) {
  const Icon = uiMode === "dark" ? SunIcon : MoonIcon;
  return <Icon className="h-6 w-6 m-2" />;
}
