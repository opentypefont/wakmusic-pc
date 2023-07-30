import { playlistState } from "@state/playlist/atoms";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";

import { ReactComponent as EditTitle } from "@assets/icons/ic_24_edit_filled.svg";
import { ReactComponent as Share } from "@assets/icons/ic_24_export.svg";
import { ReactComponent as PlayAll } from "@assets/icons/ic_24_play_all.svg";
import { ReactComponent as RandomPlay } from "@assets/icons/ic_24_random_900.svg";

import { T3Medium, T6Light } from "@components/Typography";
import IconButton from "@components/globals/IconButton";
import TextButton from "@components/globals/TextButton";

import colors from "@constants/colors";

import { PlaylistType } from "@templates/playlist";

import { isNull } from "@utils/isTypes";

interface PlaylistProps {}

const Playlist = ({}: PlaylistProps) => {
  const isEditmode = useRecoilValue(playlistState);
  const { state } = useLocation();
  const playlist = useMemo<PlaylistType>(() => {
    if (isNull(state)) return; // param 기반으로 플레이리스트 정보 불러오기

    return state;
  }, [state]);

  return (
    <Container>
      <Header>
        <Info>
          <Icon
            src={`https://static.wakmusic.xyz/static/playlist/${playlist.image.version}.png`}
          />
          <Details>
            <Title>
              <T3Medium color={colors.gray700}>{playlist.title}</T3Medium>
              {isEditmode && <EditTitle />}
            </Title>
            <T6Light color={colors.blueGray500}>
              {playlist.songs.length}곡
            </T6Light>
            <Functions>
              <IconButton icon={PlayAll}>전체 재생</IconButton>
              <IconButton icon={RandomPlay}>랜덤 재생</IconButton>
              <Share style={{ marginLeft: "8px" }} />
            </Functions>
          </Details>
        </Info>
        <TextButton
          text={{ default: "편집", activated: "완료" }}
          activated={isEditmode}
        />
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 754px;
  height: calc(100vh - 78px);

  margin: auto;
  margin-top: 20px;

  padding-top: 20px;

  border: 1px solid ${colors.blueGray25};
  border-radius: 16px;

  background-color: ${colors.white}66;
  backdrop-filter: blur(62.5px);

  overflow-y: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 28px;

  width: 100%;
`;

const Info = styled.div`
  display: flex;
`;

const Details = styled.div`
  margin-top: 12px;
  margin-left: 23px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 4px;
`;

const Functions = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-top: 20px;
`;

const Icon = styled.img`
  width: 140px;
  height: 140px;

  border-radius: 12px;
`;

export default Playlist;
