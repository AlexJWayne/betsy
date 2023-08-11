import { recordings } from "../data/recordings";
import { Recording } from "../data/recordings.interface";
import { atom } from "jotai";

export const currentRecordingAtom = atom<Recording | null>(
  getCurrentRecording(),
);

export function getCurrentRecording() {
  const songId = window.location.search.slice(1);
  return recordings.find((recording) => recording.id === songId) ?? null;
}
