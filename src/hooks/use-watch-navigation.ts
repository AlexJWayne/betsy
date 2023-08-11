import {
  currentRecordingAtom,
  getCurrentRecording,
} from "../state/current-recording";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function useWatchNavigation() {
  const [, setCurrentRecording] = useAtom(currentRecordingAtom);

  useEffect(() => {
    const set = () => setCurrentRecording(getCurrentRecording());
    window.addEventListener("popstate", set);
    return () => window.removeEventListener("popstate", set);
  }, [setCurrentRecording]);
}
