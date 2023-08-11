import { Recording } from "../data/recordings.interface";
import { useCurrentRecording } from "../hooks/use-current-recording";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { MusicalNoteIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  recording: Recording;
};

export function RecordingListItem({ recording }: Props) {
  const { onClickRecording } = useCurrentRecording();

  return (
    <a
      className={clsx(
        "my-8 block cursor-pointer overflow-hidden rounded-2xl bg-zinc-200 transition-all hover:scale-105",
      )}
      href={`?${recording.id}`}
      onClick={(event) => onClickRecording(event, recording)}
    >
      <div
        className="flex h-96 items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${recording.image})` }}
      >
        <div className="grid w-full grid-cols-3 bg-red-950/60 backdrop-blur-sm">
          <Property icon={UserGroupIcon}>{recording.artist}</Property>
          <Property icon={MusicalNoteIcon}>{recording.song}</Property>
          <Property icon={CalendarDaysIcon}>
            {new Date(recording.recordedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Property>
        </div>
      </div>
    </a>
  );
}

function Property({
  icon: Icon,
  children,
}: {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  children: ReactNode;
}) {
  return (
    <div className="m-4 flex justify-center">
      <Icon className="w-6 text-red-600" />
      <div className="mx-2 tracking-wide text-zinc-50/75">{children}</div>
    </div>
  );
}
