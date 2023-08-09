import { uiModeAtom } from "../state/ui-mode";
import clsx from "clsx";
import { useAtom } from "jotai";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export function AppContainer({ children }: Props) {
  const [uiMode] = useAtom(uiModeAtom);

  return (
    <div className={clsx("h-screen w-full", { dark: uiMode === "dark" })}>
      <div
        className={clsx(
          "transition-colors duration-500",
          "bg-zinc-300 text-zinc-800",
          "dark:bg-zinc-800 dark:text-zinc-300",
        )}
      >
        {children}
      </div>
    </div>
  );
}
