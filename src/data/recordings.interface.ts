/** YYYY-MM-DD */
type IsoDate = `${number}-${number}-${number}`;

export type Recording = {
  id: string;
  artist: string;
  song: string;
  recordedAt: IsoDate;
  image: string;

  relativeSpeed: number;

  youtubeId?: string;

  hasVideo?: boolean;

  description?: string;
};
