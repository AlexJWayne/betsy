import { Recording } from "../data/recordings.interface";
import {
  MusicalNoteIcon,
  PlayCircleIcon,
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
      <img
        src={recording.image}
        alt={recording.song}
        className="h-80 w-full object-cover"
      />
      <Property icon={UserGroupIcon}>{recording.artist}</Property>
      <Property icon={MusicalNoteIcon}>{recording.song}</Property>
      {recording.youtubeUrl && (
        <Property icon={PlayCircleIcon}>
          <a href={recording.youtubeUrl} className="hover:underline">
            Play Video
          </a>
        </Property>
      )}
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
      <Icon className="w-6 text-red-500 opacity-80" />
      <div className="mx-2 tracking-wide">{children}</div>
    </div>
  );
}
