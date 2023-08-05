import "./App.css";

import { useState } from "react";

import { clsx } from "clsx";

import { WindowHeader } from "./WindowHeader";

function App() {
  const [uiMode, setUiMode] = useState<"dark" | "light">(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  return (
    <div className={uiMode === "dark" ? "dark" : undefined}>
      <div
        className={clsx(
          "h-screen w-full transition-colors",
          "bg-zinc-300 text-zinc-800",
          "dark:bg-zinc-800 dark:text-zinc-300",
        )}
      >
        <WindowHeader uiMode={uiMode} setUiMode={setUiMode} />
      </div>
    </div>
  );
}

export default App;
