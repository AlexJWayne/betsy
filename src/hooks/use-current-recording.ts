import { Recording } from "../data/recordings.interface";
import { currentRecordingAtom } from "../state/current-recording";
import { useAtom } from "jotai";
import { useCallback } from "react";
import React from "react";

type MouseAnchorClickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

export function useCurrentRecording() {
  const [currentRecording, setCurrentRecording] = useAtom(currentRecordingAtom);

  const navigate = useCallback((event: MouseAnchorClickEvent, url: string) => {
    event.preventDefault();
    window.history.pushState({}, "", url);
  }, []);

  const onClickRecording = useCallback(
    (event: MouseAnchorClickEvent, recording: Recording) => {
      navigate(event, `/?${recording.id}`);
      setCurrentRecording(recording);
    },
    [navigate, setCurrentRecording],
  );

  const onClickHome = useCallback(
    (event: MouseAnchorClickEvent) => {
      navigate(event, "/");
      setCurrentRecording(null);
    },
    [navigate, setCurrentRecording],
  );

  return { currentRecording, onClickRecording, onClickHome };
}
