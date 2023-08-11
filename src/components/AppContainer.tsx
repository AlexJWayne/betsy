import clsx from "clsx";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export function AppContainer({ children }: Props) {
  return (
    <div
      className={clsx(
        "h-full w-full bg-gradient-to-b transition-colors duration-500",
        "from-zinc-900 via-zinc-800 to-zinc-800 text-zinc-300",
      )}
    >
      {children}
    </div>
  );
}
