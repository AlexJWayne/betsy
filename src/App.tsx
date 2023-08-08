import "./App.css";
import { UiModeButton } from "./UiModeButton";
import { UiModeContextProvider, useUiMode } from "./assets/use-ui-mode";
import { clsx } from "clsx";

function App() {
  const { uiMode, setUiMode } = useUiMode();

  return (
    <UiModeContextProvider value={{ uiMode, setUiMode }}>
      <div className={uiMode === "dark" ? "dark" : undefined}>
        <div
          className={clsx(
            "h-screen w-full transition-colors duration-1000",
            "bg-zinc-300 text-zinc-800",
            "dark:bg-zinc-800 dark:text-zinc-300",
          )}
        >
          <UiModeButton />
        </div>
      </div>
    </UiModeContextProvider>
  );
}

export default App;
