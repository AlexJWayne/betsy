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
          "bg-gradient-to-b transition-colors duration-500",
          "from-zinc-50 via-zinc-300 to-zinc-300 text-zinc-800",
          "via-30% dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-800 dark:text-zinc-300",
        )}
      >
        {children}
      </div>
    </div>
  );
}
