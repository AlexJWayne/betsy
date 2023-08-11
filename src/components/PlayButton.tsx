import { PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export function PlayButton({ youtubeUrl }: { youtubeUrl: string }) {
  return (
    <a
      href={youtubeUrl}
      className="group flex h-full w-full items-center justify-center"
    >
      <div
        className={clsx(
          "relative flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800/75 transition-all",
          "group-hover:scale-110 group-hover:bg-zinc-800/95",
        )}
      >
        <PlayIcon
          className={clsx(
            "relative left-0 w-16 text-red-600 transition-all",
            "group-hover:left-1",
          )}
        />
      </div>
    </a>
  );
}
