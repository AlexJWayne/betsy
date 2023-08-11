import { Recording } from "../data/recordings.interface";
import { useCurrentRecording } from "../hooks/use-current-recording";
import {
  RecordingPropertyArtist,
  RecordingPropertyRecordedAt,
  RecordingPropertySong,
} from "./RecordingProperty";
import clsx from "clsx";

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
          <RecordingPropertyArtist recording={recording} />
          <RecordingPropertySong recording={recording} />
          <RecordingPropertyRecordedAt recording={recording} />
        </div>
      </div>
    </a>
  );
}
