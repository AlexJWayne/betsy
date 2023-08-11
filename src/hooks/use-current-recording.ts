import { Recording } from "../data/recordings.interface";
import { currentRecordingAtom } from "../state/current-recording";
import { useAtom } from "jotai";
import { useCallback } from "react";
import React from "react";

export function useCurrentRecording() {
  const [currentRecording, setCurrentRecording] = useAtom(currentRecordingAtom);

  const onClickRecording = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      recording: Recording,
    ) => {
      event.preventDefault();
      window.history.pushState({}, "", `?${recording.id}`);
      setCurrentRecording(recording);
    },
    [setCurrentRecording],
  );

  return { currentRecording, onClickRecording };
}
