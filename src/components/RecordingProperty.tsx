import { Recording } from "../data/recordings.interface";
import {
  CalendarDaysIcon,
  ClockIcon,
  MusicalNoteIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  children: React.ReactNode;
};

export function RecordingProperty({ icon: Icon, children }: Props) {
  return (
    <div className="m-4 flex items-start justify-center">
      <Icon className="w-6 text-red-600" />
      <div className="mx-2 tracking-wide text-zinc-50/75">{children}</div>
    </div>
  );
}

export function RecordingPropertyArtist({
  recording,
}: {
  recording: Recording;
}) {
  return (
    <RecordingProperty icon={UserGroupIcon}>
      {recording.artist}
    </RecordingProperty>
  );
}

export function RecordingPropertySong({ recording }: { recording: Recording }) {
  return (
    <RecordingProperty icon={MusicalNoteIcon}>
      {recording.song}
    </RecordingProperty>
  );
}

export function RecordingPropertyRecordedAt({
  recording,
}: {
  recording: Recording;
}) {
  return (
    <RecordingProperty icon={CalendarDaysIcon}>
      {new Date(recording.recordedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </RecordingProperty>
  );
}

export function RecordingPropertyRelativeSpeed({
  recording,
}: {
  recording: Recording;
}) {
  return (
    <RecordingProperty icon={ClockIcon}>
      {Math.round(recording.relativeSpeed * 100)}% Speed
    </RecordingProperty>
  );
}
