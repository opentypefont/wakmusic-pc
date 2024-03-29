import { useMemo } from "react";
import styled from "styled-components/macro";

import { ReactComponent as CloseIcon } from "@assets/icons/ic_30_close.svg";

import { T3Medium, T5Light } from "@components/Typography";
import DefaultScroll from "@components/globals/Scroll/DefaultScroll";

import colors from "@constants/colors";

import { useNoticeDetailModalState } from "@hooks/noticeDetailModal";

import { formatDateAndTime } from "@utils/formatting";
import { getNoticeImage } from "@utils/staticUtill";

import { ModalContainer, ModalOverlay } from "./globals/modalStyle";

interface NoticeDetailModalProps {}

const NoticeDetailModal = ({}: NoticeDetailModalProps) => {
  const [modalState, setModalState] = useNoticeDetailModalState();
  const notice = modalState.notice;

  const date = useMemo(
    () => (notice ? formatDateAndTime(notice.createdAt) : []),
    [notice]
  );

  const close = () => {
    setModalState({ isOpen: false });
  };

  if (!modalState.isOpen || !notice) return null;

  return (
    <ModalOverlay>
      <Container>
        <CloseButton onClick={close} />

        <Header>
          <Title>{notice.title}</Title>
          <DateContainer>
            <DateText>{date[0]}</DateText>
            <Separator />
            <DateText>{date[1]}</DateText>
          </DateContainer>

          <Line />
        </Header>

        <DefaultScroll>
          <ContentContainerWrapper>
            <ContentContainer>
              <TextContent>{notice.mainText}</TextContent>

              <ImageContainer>
                {notice.images.map((image, index) => (
                  <Image src={getNoticeImage(image)} key={index} />
                ))}
              </ImageContainer>
            </ContentContainer>
          </ContentContainerWrapper>
        </DefaultScroll>
      </Container>
    </ModalOverlay>
  );
};

const Container = styled(ModalContainer)`
  width: 540px;
  height: 610px;

  background: ${colors.blueGray25};

  justify-content: flex-start;
  align-items: flex-start;

  border-radius: 16px;
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;

  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Title = styled(T3Medium)`
  color: ${colors.gray900};
`;

const DateContainer = styled.div`
  margin-top: 4px;

  display: flex;
  align-items: center;
`;

const DateText = styled(T5Light)`
  color: ${colors.blueGray400};
`;

const Separator = styled.div`
  margin: 0 8px;

  width: 1px;
  height: 12px;

  background-color: ${colors.blueGray200};
`;

const Line = styled.div`
  margin-top: 20px;

  width: 100%;
  height: 1px;

  background-color: ${colors.blueGray200};
`;

const ContentContainerWrapper = styled.div`
  height: 491px;
`;

const ContentContainer = styled.div`
  width: 540px;

  padding-bottom: 20px;
`;

const TextContent = styled(T5Light)`
  margin-top: 20px;
  padding: 0 30px;

  color: ${colors.blueGray600};

  white-space: pre-wrap;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 375px;
`;

export default NoticeDetailModal;
