import { recordings } from "../data/recordings";
import { Betsy } from "./Betsy";
import { RecordingListItem } from "./RecordingListItem";

export function RecordingsList() {
  return (
    <>
      <Betsy />

      <div className="m-auto -mt-52 w-[800px] pb-40">
        {recordings.map((recording) => (
          <RecordingListItem recording={recording} />
        ))}
      </div>
    </>
  );
}
