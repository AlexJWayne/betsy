import { useCurrentRecording } from "../hooks/use-current-recording";
import { YoutubeEmbed } from "./Youtube";

export function RecordingPage() {
  const { currentRecording } = useCurrentRecording();
  if (!currentRecording) return null;

  return (
    <div className="flex h-full flex-col">
      {currentRecording.youtubeUrl && (
        <YoutubeEmbed embedId={currentRecording.youtubeUrl} />
      )}
      <p>{currentRecording.song}</p>
    </div>
  );
}
