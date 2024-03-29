import { useState } from "react";
import styled from "styled-components/macro";

import { ReactComponent as RatioSVG } from "@assets/icons/ic_24_RadioButton.svg";

import { T1Bold, T6Medium } from "@components/Typography";

import colors from "@constants/colors";

import { useExitModalState } from "@hooks/exitModal";

import HelpText from "./globals/HelpText";
import TwoButton from "./globals/TwoButton";
import { ModalContainer, ModalOverlay } from "./globals/modalStyle";

interface ExitModalProps {}

const ExitModal = ({}: ExitModalProps) => {
  const [modalState, setModalState] = useExitModalState();
  const [mode, setMode] = useState<"close" | "background">(
    localStorage.getItem("exitMode") === "background" ? "background" : "close"
  );

  const resolve = (result: boolean) => () => {
    if (modalState.resolve) {
      modalState.resolve(result ? mode : null);
    }

    return setModalState({ isOpen: false });
  };

  if (!modalState.isOpen) return null;

  return (
    <ModalOverlay>
      <Container>
        <Title>앞으로 어떻게 종료할까요?</Title>

        <Select $selected={mode === "close"} onClick={() => setMode("close")}>
          <T6Medium color={colors.gray900}>앱 완전 종료하기</T6Medium>
          <RatioSVG />
        </Select>

        <Select
          $selected={mode === "background"}
          onClick={() => setMode("background")}
        >
          <T6Medium color={colors.gray900}>백그라운드로 최소화 하기</T6Medium>
          <RatioSVG />
        </Select>

        <HelpTextContainer>
          <HelpText>
            {modalState.isFirst
              ? "최초 1회만 뜨는 내용으로 추후 설정에서 변경 가능합니다."
              : "설정에서 계속 변경 가능합니다."}
          </HelpText>
        </HelpTextContainer>

        <ButtonsWrapper>
          <TwoButton ok={resolve(true)} cancel={resolve(false)} />
        </ButtonsWrapper>
      </Container>
    </ModalOverlay>
  );
};

const Container = styled(ModalContainer)`
  background: ${colors.blueGray25};
`;

const Title = styled(T1Bold)`
  color: ${colors.primary900};

  margin-top: 52px;
  margin-bottom: 24px;
`;

const Select = styled.div<{ $selected: boolean }>`
  width: 380px;
  height: 60px;

  padding: 0 24px;
  margin-bottom: 8px;

  --color: ${({ $selected }) => ($selected ? colors.point : colors.gray400)};

  border-radius: 12px;
  border: 2px solid var(--color);
  background: ${colors.whiteAlpha40};
  backdrop-filter: blur(62.5px);
  color: var(--color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

const HelpTextContainer = styled.div`
  margin-top: -12px;
  padding: 0 24px;

  width: 100%;

  display: flex;
  justify-content: flex-start;
`;

const ButtonsWrapper = styled.div`
  margin-top: 52px;
`;

export default ExitModal;
