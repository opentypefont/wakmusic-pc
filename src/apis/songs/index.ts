import instance from "@apis/axios";

import { SearchAllResponse, SearchTabType } from "@templates/search";
import { RawSong, Song, SongSortType } from "@templates/song";

import processSong from "@utils/processSong";

export type NewSongsType =
  | "all"
  | "woowakgood"
  | "isedol"
  | "gomem"
  | "academy";

interface FetchSearchTabParams {
  sort?: SongSortType;

  start?: number;
  limit?: number;
}

export const fetchSong = async (id: string): Promise<Song> => {
  const { data } = await instance.get(`/v2/songs/${id}`);

  return processSong("total", data);
};

export const fetchSearchAll = async (
  keyword: string,
  sort: SongSortType = "popular"
): Promise<SearchAllResponse> => {
  const { data } = await instance.get(`/v2/songs/search/all`, {
    params: { sort, keyword },
  });
  return data;
};

export const fetchSearchTab = async (
  keyword: string,
  type: SearchTabType,
  { sort = "popular", start = 0, limit = 30 }: FetchSearchTabParams
): Promise<Song[]> => {
  const { data } = await instance.get(`/v2/songs/search/${type}`, {
    params: { sort, keyword, start, limit },
  });

  return data.map((item: RawSong) => processSong("total", item));
};

export const fetchNewSongs = async (
  group: NewSongsType,
  start = 0,
  limit = 30
): Promise<Song[]> => {
  const { data } = await instance.get(`/v2/songs/new/${group}`, {
    params: { start, limit },
  });

  return data.map((item: RawSong) => processSong("total", item));
};
