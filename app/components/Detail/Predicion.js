import React, {useState} from "react";

import styled from "styled-components/native";
import {StyledContainer, SectionTitle} from "../../screens/Detail";
import noGraph from "../../../assets/images/nnoGraph.png";

const Prediction = () => {
  return (
    <>
      <StyledContainer>
        <SectionTitle style={{marginBottom: 30}}>
          부동부동 시세 예측
        </SectionTitle>
        <ImageBox>
          <Image source={noGraph} />
          <TextBox>
            <Notice>시세 데이터를 준비중이에요</Notice>
            <SmallText>(추후 업데이트 예정)</SmallText>
          </TextBox>
        </ImageBox>
      </StyledContainer>
    </>
  );
};

const ImageBox = styled.View`
  width: 100%;
  height: 220px;
`;

const Image = styled.Image`
  position: relative;
  margin: auto;
  width: 90%;
  height: 200px;
`;

const TextBox = styled.View`
  position: absolute;
  top: 50%;
  left: 25%;
`;

const Notice = styled.Text`
  text-align: center;
  font-size: 17px;

`;

const SmallText = styled(Notice)`
  font-size: 12px;
`;

export default Prediction;
