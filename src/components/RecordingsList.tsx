import { recordings } from "../data/recordings";
import { RecordingListItem } from "./RecordingListItem";

export function RecordingsList() {
  return (
    <div className="m-auto w-[800px] py-32">
      {recordings.map((recording) => (
        <RecordingListItem recording={recording} />
      ))}
    </div>
  );
}
