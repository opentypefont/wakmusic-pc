export enum RepeatType {
  Off,
  All,
  One,
}

export type SongInfo = {
  songId: string;
  title: string;
  artist: string;
  views: number;
};

export type Lyrics = {
  identifier: string;
  start: number;
  end: number;
  text: string;
  style: string;
}[];

export type ControlStateType = {
  volume: number;
  repeatType: RepeatType;
  isPlaying: boolean;
  isRandom: boolean;
  isLyricsOn: boolean;
};

export type PlayingInfoStateType = {
  playlist: SongInfo[];
  current: number;
};