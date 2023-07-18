export type Song = {
  id: number;
  songId: string;
  title: string;
  artist: string;
  remix: string;
  reaction: string;
  date: number;
  start: number;
  end: number;
  total: {
    views: number | null;
    increase: number | null;
    last: number | null;
  };
  like: number;
};
