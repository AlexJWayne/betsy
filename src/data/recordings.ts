import decodeImg from "../assets/decode.jpg";
import diaryOfJaneImg from "../assets/diaryofjane.jpg";
import icarusImg from "../assets/icarus.jpg";
import { Recording } from "./recordings.interface";

export const recordings: Recording[] = [
  {
    id: "decode",
    artist: "Paramore",
    song: "Decode",
    recordedAt: "2023-07-23",
    image: decodeImg,
    relativeSpeed: 1.0,
    youtubeId: "w5MtFAtqeew",
    hasVideo: true,
  },
  {
    id: "diaryofjane",
    artist: "Breaking Benjamin",
    song: "The Diary of Jane",
    recordedAt: "2023-06-04",
    image: diaryOfJaneImg,
    relativeSpeed: 1.0,
    youtubeId: "pccCIio6NIc",
    hasVideo: false,
  },
  {
    id: "icarus",
    artist: "Monkey 3",
    song: "Icarus",
    recordedAt: "2023-05-03",
    image: icarusImg,
    relativeSpeed: 0.85,
    youtubeId: "wwiKvjTc9do",
    hasVideo: true,
  },
];
