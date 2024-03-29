import styled from "styled-components/macro";

import { ReactComponent as ReduceSVG } from "@assets/icons/ic_20_reduce.svg";

import ControlBar from "@components/globals/ControlBar";
import SimpleIconButton from "@components/globals/SimpleIconButton";

import { useToggleVisualModeState } from "@hooks/player";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const toggleVisualModeState = useToggleVisualModeState();

  return (
    <Container>
      <ReduceContainer>
        <SimpleIconButton icon={ReduceSVG} onClick={toggleVisualModeState} />
      </ReduceContainer>

      <ControlBar isVisualMode />
    </Container>
  );
};

const Container = styled.div`
  height: 38px;

  position: relative;
  z-index: 1001;

  display: flex;
  align-items: center;

  -webkit-app-region: drag;

  & > * {
    -webkit-app-region: no-drag;
  }
`;

const ReduceContainer = styled.div`
  margin-left: 10px;

  display: flex;
  align-items: center;
`;

export default Header;
