import aceOfSpadesImg from "../assets/aceofspades.jpg";
import angelsInsectsImg from "../assets/angelsinsects.jpg";
import astralMeanderImg from "../assets/astralmeander.jpg";
import bringMeToLifeImg from "../assets/bringme.jpg";
import decodeImg from "../assets/decode.jpg";
import diaryOfJaneImg from "../assets/diaryofjane.jpg";
import holyDiverImg from "../assets/holydiver.jpg";
import hysteriaImg from "../assets/hysteria.webp";
import icarusImg from "../assets/icarus.jpg";
import machineHeadImg from "../assets/machinehead.jpg";
import sadButTrueImg from "../assets/sadbuttrue.jpg";
import schismImg from "../assets/schism.webp";
import seekAndDestroyImg from "../assets/seekanddestroy.jpg";
import tourniquetImg from "../assets/tourniquet.jpg";
import { Recording } from "./recordings.interface";

export const recordings: Recording[] = [
  {
    id: "astral-meander",
    artist: "Alex Wayne",
    song: "Astral Meander",
    recordedAt: "2024-08-25",
    image: astralMeanderImg,
    relativeSpeed: 1.0,
    youtubeId: "u-BpmX0fnJQ",
    hasVideo: false,
  },
  {
    id: "schism",
    artist: "Tool",
    song: "Schism",
    recordedAt: "2023-08-29",
    image: schismImg,
    relativeSpeed: 1.0,
    youtubeId: "2Urn877fmnU",
    hasVideo: true,
  },
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
  {
    id: "holydiver",
    artist: "Dio",
    song: "Holy Diver",
    recordedAt: "2022-06-05",
    image: holyDiverImg,
    relativeSpeed: 1.0,
    youtubeId: "Ejq_DfFZRDs",
    hasVideo: true,
  },
  {
    id: "hysteria",
    artist: "Muse",
    song: "Hysteria",
    recordedAt: "2022-06-05",
    image: hysteriaImg,
    relativeSpeed: 1.0,
    youtubeId: "iuUbBDAsy4c",
    hasVideo: true,
  },
  {
    id: "sadbuttrue",
    artist: "Metallica",
    song: "Sad But True",
    recordedAt: "2021-12-26",
    image: sadButTrueImg,
    relativeSpeed: 1.0,
    youtubeId: "dKK2caWKm2Y",
  },
  {
    id: "aceofspades",
    artist: "Motorhead",
    song: "Ace of Spades",
    recordedAt: "2021-12-11",
    image: aceOfSpadesImg,
    relativeSpeed: 0.9,
    youtubeId: "4pjQYVMLM0o",
    hasVideo: true,
  },
  {
    id: "bringmetolife",
    artist: "Evanescence",
    song: "Bring Me To Life",
    recordedAt: "2021-12-04",
    image: bringMeToLifeImg,
    relativeSpeed: 1.0,
    youtubeId: "EB1OgDuzNuo",
    hasVideo: true,
  },
  {
    id: "machinehead",
    artist: "Bush",
    song: "Machinehead",
    recordedAt: "2021-09-19",
    image: machineHeadImg,
    relativeSpeed: 1.0,
    youtubeId: "q_rFJITL2KY",
    hasVideo: true,
  },
  {
    id: "seekanddestroy",
    artist: "Metallica",
    song: "Seek & Destroy",
    recordedAt: "2020-05-23",
    image: seekAndDestroyImg,
    youtubeId: "I-Eyszhrli8",
    relativeSpeed: 0.7,
    hasVideo: true,
  },
  {
    id: "angelsinsects",
    artist: "Papa Roach",
    song: "Between Angels And Insects",
    recordedAt: "2020-04-28",
    image: angelsInsectsImg,
    relativeSpeed: 0.83,
    youtubeId: "oklf3rnt2BI",
    hasVideo: true,
  },
  {
    id: "tourniquet",
    artist: "Evanescence",
    song: "Tourniquet",
    recordedAt: "2020-02-26",
    image: tourniquetImg,
    relativeSpeed: 0.85,
    youtubeId: "9BaMP5GpV30",
    hasVideo: true,
  },
];
