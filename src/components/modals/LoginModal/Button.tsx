import { ReactNode } from "react";
import styled from "styled-components/macro";

import { T6Medium } from "@components/Typography";

import colors from "@constants/colors";
import platforms from "@constants/platforms";

import { LoginPlatform } from "@templates/user";

interface ButtonProps {
  platform: LoginPlatform;
  children: ReactNode;
  onClick: (platform: LoginPlatform) => void;
}

const Button = ({ platform, children, onClick }: ButtonProps) => {
  return (
    <Container
      onClick={() => {
        onClick(platform);
      }}
    >
      <IconContainer>{children}</IconContainer>
      <T6Medium color={colors.gray900}>
        {platforms[platform]}로 로그인하기
      </T6Medium>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 340px;
  height: 60px;

  border-radius: 12px;
  border: 1px solid ${colors.blueGray200};
  opacity: 0.8;
  background: ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const IconContainer = styled.div`
  position: absolute;

  left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
