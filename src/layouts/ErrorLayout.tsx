import styled from "styled-components/macro";

import { ReactComponent as ErrorIcon } from "@assets/icons/ic_56_contents_info.svg";
import sadWakdu from "@assets/imgs/sad.png";

import { T5Medium, T6Medium } from "@components/Typography";

import colors from "@constants/colors";

interface ErrorLayoutProps {}

const ErrorLayout = ({}: ErrorLayoutProps) => {
  return (
    <Container>
      <ErrorIcon />

      <T5Medium>알 수 없는 문제가 발생하였습니다.</T5Medium>

      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        <T6Medium>새로고침</T6Medium>
      </Button>

      <SadWakdu src={sadWakdu} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${colors.blueGray100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  margin-top: 20px;

  padding: 10px 20px;
  height: 40px;

  border-radius: 10px;
  border: 1px solid ${colors.blueGray300};
  background-color: ${colors.blueGray100};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.blueGray600};

  cursor: pointer;
`;

const SadWakdu = styled.img`
  width: 300px;
  opacity: 0.5;
  transform: rotate(-20deg);

  position: fixed;
  right: -50px;
  bottom: -50px;

  pointer-events: none;
`;

export default ErrorLayout;
