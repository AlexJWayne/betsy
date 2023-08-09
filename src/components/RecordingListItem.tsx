import { Recording } from "../data/recordings.interface";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import {
  MusicalNoteIcon,
  PlayIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  recording: Recording;
};

export function RecordingListItem({ recording }: Props) {
  return (
    <div
      className={clsx(
        "my-8 overflow-hidden rounded-2xl shadow-sm transition-colors duration-1000",
        "bg-zinc-200",
        "dark:bg-zinc-900",
      )}
    >
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${recording.image})` }}
      >
        {recording.youtubeUrl && (
          <PlayButton youtubeUrl={recording.youtubeUrl} />
        )}
      </div>

      <div className="grid grid-cols-3">
        <Property icon={UserGroupIcon}>{recording.artist}</Property>
        <Property icon={MusicalNoteIcon}>{recording.song}</Property>
        <Property icon={CalendarDaysIcon}>
          {new Date(recording.recordedAt).toLocaleDateString()}
        </Property>
      </div>
    </div>
  );
}

function Property({
  icon: Icon,
  children,
}: {
  icon: (props: { className: string }) => ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="m-4 flex">
      <Icon className="w-6 text-red-600 transition-colors dark:text-red-500/80" />
      <div className="mx-2 tracking-wide">{children}</div>
    </div>
  );
}

function PlayButton({ youtubeUrl }: { youtubeUrl: string }) {
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
