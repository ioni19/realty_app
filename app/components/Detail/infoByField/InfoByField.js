import React from "react";
import styled from "styled-components/native";
import RadarChart from "./RadarChart";
import {StyledContainer, SectionTitle} from "../../../screens/Detail";
import {Description, Highlight} from "../Report";
const InfoByField = () => {
  return (
    <StyledContainer>
      <SectionTitle>분야별 정보</SectionTitle>
      <View>
        <Description>
          주변 부동산 대비 <Highlight>주거환경, 수익률</Highlight>이 우수합니다.
        </Description>
      </View>
      <RadarChart />
    </StyledContainer>
  );
};

const View = styled.View`
  margin: 20px 0;
`;

export default InfoByField;
