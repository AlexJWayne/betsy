/** YYYY-MM-DD */
type IsoDate = `${number}-${number}-${number}`;

export type Recording = {
  artist: string;
  song: string;
  recordedAt: IsoDate;
  image: string;

  relativeSpeed: number;

  youtubeUrl?: string;

  hasVideo?: boolean;
};
