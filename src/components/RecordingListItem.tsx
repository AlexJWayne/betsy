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
        "m-2 inline-block w-[500px] cursor-pointer overflow-hidden rounded-lg bg-zinc-200 transition-all hover:scale-105",
        "xl:w-[600px]",
      )}
      href={`?${recording.id}`}
      onClick={(event) => onClickRecording(event, recording)}
    >
      <div
        className="flex h-[320px] items-end bg-cover bg-center xl:h-[380px]"
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
