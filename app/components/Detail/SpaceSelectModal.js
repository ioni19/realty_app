import React, {useEffect, useState} from "react";
import {Text, Touchable, TouchableOpacity, View} from "react-native";
import styled, {css} from "styled-components/native";
import {SectionTitle} from "../../screens/Detail";
import {mainColor} from "../../theme/theme";

const SpaceSelectModal = ({data, setIsOpen, setSelect, select}) => {
  return (
    <>
      <Container>
        <FlexRow>
          <SectionTitle onPress={() => alert("설마")}>
            아파트 평형 선택
          </SectionTitle>
          <CloseBtn>
            <CloseText onPress={() => setIsOpen(false)}>닫기</CloseText>
          </CloseBtn>
        </FlexRow>
        {data.map(item => (
          <WidthType
            key={item.id}
            data={item}
            setIsOpen={setIsOpen}
            setSelect={setSelect}
            select={select}
          />
        ))}
      </Container>
    </>
  );
};

const WidthType = ({data, setIsOpen, select, setSelect}) => {
  const {
    households,
    type,
    supplyArea,
    dedicatedArea,
    sellingPrice,
    jeonsePrice,
  } = data;

  const handleSelect = type => {
    setSelect(type);
    setIsOpen(false);
  };

  return (
    <TextBox onPress={() => handleSelect(type)}>
      <MarginText>
        <BoldText pick={select === type} width='25%'>
          {type} 평형
        </BoldText>
        <LightText pick={select === type} width='40%'>
          공급 {supplyArea}m²
        </LightText>
        <BoldText pick={select === type} width='10%'>
          매매
        </BoldText>
        <BoldText
          pick={select === type}
          width='25%'
          style={{textAlign: "right"}}>
          {sellingPrice}
        </BoldText>
      </MarginText>
      <MarginText>
        <LightText pick={select === type} width='25%'>
          {households}세대
        </LightText>
        <LightText pick={select === type} width='40%'>
          전용 {dedicatedArea}m²
        </LightText>
        <BoldText pick={select === type} width='10%'>
          전세
        </BoldText>
        <BoldText
          pick={select === type}
          width='25%'
          style={{textAlign: "right"}}>
          {jeonsePrice}
        </BoldText>
      </MarginText>
    </TextBox>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 170px;
  padding: 25px;
  background-color: white;
  border-radius: 15px;
`;

const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const MarginText = styled(FlexRow)`
  margin-bottom: 10px;
`;

const TextBox = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const CloseBtn = styled.TouchableOpacity.attrs({activeOpacity: 1})``;

const CloseText = styled.Text.attrs({activeOpacity: 1})`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const BoldText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${props => (props.pick ? mainColor : "rgba(0, 0, 0, 0.7)")};
  width: ${props => props.width};
`;

const LightText = styled(BoldText)`
  font-size: 14px;
  font-weight: 400;
`;

export default SpaceSelectModal;
