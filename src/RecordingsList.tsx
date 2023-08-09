import { recordings } from "./data/recordings";

export function RecordingsList() {
  return (
    <ul>
      {recordings.map((recording) => (
        <li>
          {recording.song} <a href={recording.youtubeUrl}>Youtube</a>
        </li>
      ))}
    </ul>
  );
}
