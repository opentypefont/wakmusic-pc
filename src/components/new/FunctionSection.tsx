import iconButtonType from "@templates/iconButtonType";
import tabType from "@templates/tabType";
import styled from "styled-components";

import IconButton from "@components/globals/IconButton";
import Tab from "@components/globals/Tab";
import TabBar from "@components/globals/TabBar";

import { playButtonData } from "@constants/IconButton";
import { newTabs } from "@constants/tabs";

interface FunctionSectionProps {}

const FunctionSection = ({}: FunctionSectionProps) => {
  return (
    <Wrapper>
      <TimeLineLayout>
        <TabBar>
          {newTabs.map((item: tabType, index: number) => {
            return (
              <Tab key={index} to={item.to}>
                {item.text}
              </Tab>
            );
          })}
        </TabBar>
      </TimeLineLayout>
      <ButtonLayout>
        {playButtonData.map((item: iconButtonType, index: number) => {
          return (
            <IconButton key={index} icon={item.icon}>
              {item.text}
            </IconButton>
          );
        })}
      </ButtonLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0px 20px;
  margin-top: 16px;
`;

const TimeLineLayout = styled.div`
  display: flex;
  gap: 4px;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default FunctionSection;
