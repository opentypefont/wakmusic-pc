import styled from "styled-components/macro";

import { ReactComponent as PlaySVG } from "@assets/icons/ic_30_play_point.svg";

import { T5Medium, T6Medium } from "@components/Typography";

import colors from "@constants/colors";

import { usePlaySong } from "@hooks/player";

import { Song } from "@templates/song";

import { getYoutubeThumbnail } from "@utils/staticUtill";

import Marquee from "./Marquee";
import Skeleton from "./Skeleton";

interface TrackProps {
  item?: Song;

  maxWidth?: number;
  isLoading?: boolean;
}

const Track = ({ item, maxWidth, isLoading }: TrackProps) => {
  const playSong = usePlaySong();

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    item && playSong(item);
  };

  if (isLoading || !item) {
    return (
      <Container>
        <Skeleton width={78} height={46} borderRadius={4} />
        <TrackInfo $maxWidth={maxWidth}>
          <Skeleton
            width={(maxWidth || 356) / 1.2}
            height={22}
            marginLeft={8}
          />
          <Skeleton
            width={(maxWidth || 356) / 2}
            height={20}
            marginLeft={8}
            marginTop={4}
          />
        </TrackInfo>
      </Container>
    );
  }

  return (
    <Container onClick={onClickHandler}>
      <PlayIcon />

      <Thumbnail src={getYoutubeThumbnail(item.songId)} />

      <TrackInfo $maxWidth={maxWidth}>
        <Marquee width={maxWidth || 356} hoverOnPlay>
          <T5Medium title={item.title} color={colors.gray700}>
            {item.title}
          </T5Medium>
        </Marquee>

        <Marquee width={maxWidth || 356} hoverOnPlay>
          <T6Medium title={item.artist} color={colors.blueGray500}>
            {item.artist}
          </T6Medium>
        </Marquee>
      </TrackInfo>
    </Container>
  );
};

const PlayIcon = styled(PlaySVG)`
  display: none;

  z-index: 1;
`;

const Thumbnail = styled.img`
  margin-right: 8px;

  width: 78px;
  height: 44px;

  object-fit: cover;
  border-radius: 4px;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover ${Thumbnail} {
    filter: brightness(0.4);
  }

  &:hover ${PlayIcon} {
    display: block;

    position: absolute;
    left: 18px;
    top: 7px;
  }
`;

const TrackInfo = styled.div<{ $maxWidth?: number }>`
  max-width: ${({ $maxWidth }) => $maxWidth ?? 356}px;
`;

export default Track;
