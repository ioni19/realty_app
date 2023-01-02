import React, {useState} from "react";
import {View} from "react-native";
import styled from "styled-components/native";
import {StyledContainer} from "../../screens/Detail";
import {mainColor} from "../../theme/theme";

const BottomBtn = ({pick, setPick}) => {
  return (
    <StyledContainer style={{paddingBottom: 20}}>
      <FlexRow>
        <WhiteBtn onPress={() => setPick(pick => !pick)}>
          <BoldText pick={pick}>찜하기</BoldText>
        </WhiteBtn>
        <WhiteBtn>
          <BoldText pick>매물더보기+</BoldText>
        </WhiteBtn>
      </FlexRow>
      <BlueBtn>
        <BoldText style={{color: "white"}}>이 단지로 처방 받기</BoldText>
      </BlueBtn>
    </StyledContainer>
  );
};

const BoldText = styled.Text`
  font-size: 21px;
  font-weight: 700;
  color: ${props => (props.pick ? mainColor : "rgba(0,0,0,0.4)")};
  /* color: white; */
`;

const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WhiteBtn = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  width: 49%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: 1.2px solid ${mainColor};
  border-radius: 10px;
`;

const BlueBtn = styled(WhiteBtn).attrs({activeOpacity: 1})`
  width: 100%;
  background-color: ${mainColor};
  margin-top: 10px;
`;

export default BottomBtn;
