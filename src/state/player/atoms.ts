import { atom } from "recoil";

import {
  ChangeProgressStateType,
  ControlStateType,
  LyricType,
  PlayingInfoStateType,
  RepeatType,
} from "@templates/player";

export const visualModeState = atom<boolean>({
  key: "visualMode",
  default: false,
});

export const controlState = atom<ControlStateType>({
  key: "control",
  default: {
    volume: Number(localStorage.getItem("volume")) || 50,
    isMute: localStorage.getItem("isMute") === "true" || false,
    repeatType: RepeatType.Off,
    isPlaying: false,
    isRandom: false,
    isLyricsOn: false,
  },
  effects: [
    ({ onSet }) => {
      onSet((newValue, oldValue) => {
        if (newValue.isPlaying !== (oldValue as ControlStateType).isPlaying) {
          window.ipcRenderer?.send("rpc:playing", newValue.isPlaying);
        }

        if (newValue.volume !== (oldValue as ControlStateType).volume) {
          localStorage.setItem("volume", newValue.volume.toString());
        }

        if (newValue.isMute !== (oldValue as ControlStateType).isMute) {
          localStorage.setItem("isMute", newValue.isMute.toString());
        }
      });
    },
  ],
});

export const isControlling = atom<boolean>({
  key: "isControlling",
  default: false,
});

export const playingLength = atom<number>({
  key: "playingLength",
  default: 1,
});

export const playingProgress = atom<number>({
  key: "currentPlaying",
  default: 0,
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        window.ipcRenderer?.send("rpc:progress", value);
      });
    },
  ],
});

export const playingChangeProgress = atom<ChangeProgressStateType>({
  key: "currentPlayingChange",
  default: {
    force: false,
    progress: 0,
  },
});

export const playingInfoState = atom<PlayingInfoStateType>({
  key: "playingInfo",
  default: {
    playlist: localStorage.getItem("playlist")
      ? JSON.parse(localStorage.getItem("playlist") as string)
      : [],
    history: [],
    current: 0,
  },
  effects: [
    ({ onSet }) => {
      onSet((value, oldValue) => {
        const current = value.playlist[value.current];
        window.ipcRenderer?.send("rpc:track", current);

        if (value.playlist !== (oldValue as PlayingInfoStateType).playlist) {
          localStorage.setItem("playlist", JSON.stringify(value.playlist));
        }
      });
    },
  ],
});

export const lyricsState = atom<LyricType[] | null>({
  key: "lyrics",
  default: null,
});

export const isSpaceDisabled = atom({
  key: "isSpaceDisabled",
  default: false,
});
