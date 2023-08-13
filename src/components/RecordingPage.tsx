import { useCurrentRecording } from "../hooks/use-current-recording";
import {
  RecordingPropertyArtist,
  RecordingPropertyRecordedAt,
  RecordingPropertyRelativeSpeed,
  RecordingPropertySong,
} from "./RecordingProperty";
import { YoutubeEmbed } from "./Youtube";

export function RecordingPage() {
  const { currentRecording } = useCurrentRecording();
  if (!currentRecording) return null;

  return (
    <>
      <div className="grid w-full grid-cols-2 lg:grid-cols-4">
        <RecordingPropertyArtist recording={currentRecording} />
        <RecordingPropertySong recording={currentRecording} />
        <RecordingPropertyRecordedAt recording={currentRecording} />
        <RecordingPropertyRelativeSpeed recording={currentRecording} />
      </div>
      {currentRecording.youtubeId && (
        <YoutubeEmbed embedId={currentRecording.youtubeId} />
      )}
    </>
  );
}
