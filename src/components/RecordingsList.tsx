import { recordings } from "../data/recordings";
import { Betsy } from "./Betsy";
import { RecordingListItem } from "./RecordingListItem";

export function RecordingsList() {
  return (
    <>
      <Betsy />
      <div className="m-20 -mt-40 flex flex-wrap justify-center pb-40 max-md:mx-4">
        {recordings.map((recording) => (
          <RecordingListItem key={recording.id} recording={recording} />
        ))}
      </div>
    </>
  );
}
