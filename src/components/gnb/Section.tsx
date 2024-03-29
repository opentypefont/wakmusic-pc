import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components/macro";

import { Pretendard } from "@components/Typography";
import Lottie from "@components/globals/Lottie";

import colors from "@constants/colors";
import { SectionData } from "@constants/gnb";

import { useLoginModalOpener } from "@hooks/loginModal";
import { useUserState } from "@hooks/user";

import { isNull } from "@utils/isTypes";

interface Section {
  path: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  lottie: object;
  children: string;
}

const Section = ({ path, icon: Icon, lottie, children }: Section) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user] = useUserState();
  const loginModalOpener = useLoginModalOpener();

  const [isCurrent, setIsCurrent] = useState(false);

  const comparePath = useCallback(
    (pathname: string) => {
      return pathname.split("/")[1] === location.pathname.split("/")[1];
    },
    [location.pathname]
  );

  useEffect(() => {
    const _isCurrent = comparePath(path);
    if (_isCurrent === isCurrent) return; // 필요없는 연산 방지

    let isExternalPage = true;

    for (const sectionData of SectionData) {
      if (comparePath(sectionData.path)) isExternalPage = false;
    }

    if (isExternalPage && isCurrent) return;
    else if (_isCurrent !== isCurrent) setIsCurrent(_isCurrent);
  }, [path, isCurrent, comparePath]);

  return (
    <Container
      onClick={() => {
        if (path.startsWith("/user")) {
          if (isNull(user)) {
            loginModalOpener();
            return;
          }
        }

        navigate(path);
      }}
    >
      <IconContainer>
        {isCurrent ? (
          <Lottie animationData={lottie} renderer="svg" loop={false} />
        ) : (
          <Icon />
        )}
      </IconContainer>

      <Text $activated={isCurrent}>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 40px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Text = styled(Pretendard)<{ $activated: boolean }>`
  margin-left: 6px;

  /* T5 */
  font-size: 16px;
  line-height: 22px;

  ${({ $activated }) =>
    $activated
      ? css`
          /* T5Bold */
          font-weight: 600;
          color: ${colors.blueGray600};
        `
      : css`
          /* T5Medium */
          font-weight: 400;
          color: ${colors.blueGray400};
        `}
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
`;

export default Section;
