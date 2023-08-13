import { recordings } from "../data/recordings";
import { RecordingListItem } from "./RecordingListItem";
import clsx from "clsx";

export function RecordingsList() {
  return (
    <div
      className={clsx(
        "m-4 flex flex-wrap justify-center pb-40 md:mx-20",
        "-mt-10 sm:-mt-16 md:-mt-24",
      )}
    >
      {recordings.map((recording) => (
        <RecordingListItem key={recording.id} recording={recording} />
      ))}
    </div>
  );
}
