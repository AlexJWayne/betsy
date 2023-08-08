import { useUiModeContext } from "./assets/use-ui-mode";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useEffect, useState } from "react";

export type UiMode = "dark" | "light";

export function UiModeButton() {
  const { uiMode, setUiMode } = useUiModeContext();
  const [degrees, setDegrees] = useState(uiMode === "dark" ? 180 : 0);

  useEffect(() => {
    setDegrees((degrees) => degrees + 180);
  }, [uiMode]);

  return (
    <button
      className={clsx(
        "absolute top-2 right-2 w-10 h-10 rounded-md overflow-hidden capitalize text-red-500 transition-all duration-1000",
        "bg-zinc-200 shadow-sm",
        "dark:bg-zinc-900 dark:shadow-md",
        "hover:shadow-lg",
      )}
      aria-label="Toggle dark mode"
      onClick={() => setUiMode(uiMode === "light" ? "dark" : "light")}
    >
      <div
        className="w-10 transition-transform duration-1000"
        style={{ transform: `rotate(${degrees}deg)` }}
      >
        <SwitchFace uiMode="light" />
        <SwitchFace uiMode="dark" />
      </div>
    </button>
  );
}

type SwitchFaceProps = { uiMode: UiMode };
function SwitchFace({ uiMode }: SwitchFaceProps) {
  const Icon = uiMode === "dark" ? MoonIcon : SunIcon;
  return <Icon className="h-6 w-6 m-2 rotate-180" />;
}
