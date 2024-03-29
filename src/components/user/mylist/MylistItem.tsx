import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

import { ReactComponent as DragPlaylist } from "@assets/icons/ic_24_move.svg";
import { ReactComponent as PlayAll } from "@assets/icons/ic_24_play_all.svg";

import { T6Medium, T7Light } from "@components/Typography";
import Skeleton from "@components/globals/Skeleton";

import colors from "@constants/colors";

import { useDragAndDropState, useMylistState } from "@hooks/mylist";
import { usePlaySongs } from "@hooks/player";

import { XY } from "@pages/user/Mylist";

import { myListItemType } from "@templates/playlist";

import { isNil } from "@utils/isTypes";
import { getPlaylistIcon } from "@utils/staticUtill";

interface MylistItemProps {
  item?: myListItemType;
  hide?: boolean;
  mouseDown?: boolean;
  onSelect?: (target: myListItemType, position: XY) => void;
  onMouseEnter?: () => void;
}

const MylistItem = ({
  item,
  hide = false,
  mouseDown = false,
  onSelect,
  onMouseEnter,
}: MylistItemProps) => {
  const navigate = useNavigate();
  const [isEditMode] = useMylistState();
  const [dragAndDropTarget] = useDragAndDropState();

  const playSongs = usePlaySongs();

  const marginLeft = useMemo(() => {
    if (!mouseDown) return 0;

    const dragIndex = dragAndDropTarget.drag.index;
    const dropIndex = dragAndDropTarget.drop;
    const dropTargetRow = dropIndex % 3;

    if (
      item?.index === dropIndex &&
      dropTargetRow === 0 &&
      dragIndex > dropIndex
    ) {
      // 드롭 위치가 행의 시작에 있고, 리스트를 뒤에서 앞으로 드래그하는 경우
      return 238;
    }

    if (dropIndex !== (item?.index ?? 0) - 1) return 0;
    // 드롭할 리스트가 현재 리스트의 바로 뒤에 있는 경우에만 아래 연산을 수행

    if (dragIndex > dropIndex) {
      // 리스트를 뒤에서 앞으로 드래그 하는 경우
      if (
        dropTargetRow === 0 &&
        dragIndex - dropIndex < 3 &&
        dragIndex % 3 !== 2
      )
        // 같은 행 안에서 드래그와 드롭이 일어났고, 드래그한 리스트가 마지막 열이 아니라면
        return 238;
      else return 0;
    } else if (dragIndex < dropIndex) {
      // 리스트를 앞에서 뒤로 드래그 하는 경우
      if (dropTargetRow === 2) return 0;
      else return 238;
    } else {
      if (dropTargetRow === 0) return 238;
      else return 0;
    }
  }, [
    mouseDown,
    dragAndDropTarget.drop,
    dragAndDropTarget.drag.index,
    item?.index,
  ]);

  const marginRight = useMemo(() => {
    if (!mouseDown) return 0;

    const dragIndex = dragAndDropTarget.drag.index;
    const dropIndex = dragAndDropTarget.drop;
    const dropTargetRow = dropIndex % 3;

    if (
      dropIndex === item?.index &&
      dragIndex < dropIndex &&
      dropTargetRow === 2
    ) {
      return 238; // 드롭 위치가 행의 끝에 있고, 리스트를 앞에서 뒤로 드래그하는 경우
    }

    if (dropIndex !== (item?.index ?? 0) + 1) return 0;
    // 드롭할 리스트가 리스트가 현재 리스트의 바로 앞에 있는 경우에만 아래 연산을 수행

    if (dragIndex >= dropIndex) {
      // 리스트를 앞에서 뒤로 드래그했거나 드래그를 시작한 위치와 드롭할 위치가 같은 경우
      if (dropTargetRow === 0) return 0;
      else return 238;
    } else if (dragIndex < dropIndex) {
      // 리스트를 앞에서 뒤로 드래그한 경우
      return 0;
    }
  }, [
    mouseDown,
    dragAndDropTarget.drop,
    dragAndDropTarget.drag.index,
    item?.index,
  ]);

  if (isNil(item)) {
    return (
      <Container>
        <ShiftContainer>
          <Skeleton width={74} height={74} borderRadius={9} />
          <InfoContainer>
            <Skeleton width={100} height={16} />
            <Skeleton width={100} height={16} />
            <Skeleton width={24} height={24} />
          </InfoContainer>
        </ShiftContainer>
      </Container>
    );
  }

  return (
    <Container
      style={{
        display: hide ? "none" : "flex",
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
      onMouseEnter={onMouseEnter}
      onClick={() => {
        navigate(`/playlist/${item.key}`);
      }}
    >
      <ShiftContainer>
        <Icon src={getPlaylistIcon(item.image)} />
        <InfoContainer>
          <Title>{item.title}</Title>
          <Volume>{item.songs.length}곡</Volume>
          {isEditMode ? (
            <DragPlaylist
              onMouseDown={(e) => {
                if (onSelect && isEditMode)
                  onSelect(item, { x: e.clientX, y: e.clientY });
              }}
            ></DragPlaylist>
          ) : (
            <PlayAll
              onClick={(e) => {
                e.stopPropagation();
                playSongs(item.songs);
              }}
            />
          )}
        </InfoContainer>
      </ShiftContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 222px;
  height: 74px;

  cursor: pointer;
`;

const ShiftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 74px;
  height: 74px;

  border-radius: 9px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 70px;

  margin-left: 8px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Title = styled(T6Medium)`
  color: ${colors.gray700};
`;

const Volume = styled(T7Light)`
  color: ${colors.blueGray500};
`;

export default MylistItem;
