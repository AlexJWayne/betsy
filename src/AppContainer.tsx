import { uiModeAtom } from "./state/ui-mode";
import clsx from "clsx";
import { useAtom } from "jotai";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export function AppContainer({ children }: Props) {
  const [uiMode] = useAtom(uiModeAtom);

  return (
    <div className={uiMode === "dark" ? "dark" : undefined}>
      <div
        className={clsx(
          { dark: uiMode === "dark" },
          "h-screen w-full transition-colors duration-1000",
          "bg-zinc-300 text-zinc-800",
          "dark:bg-zinc-800 dark:text-zinc-300",
        )}
      >
        {children}
      </div>
    </div>
  );
}
