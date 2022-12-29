import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {View, Text, StyleSheet, Image} from 'react-native';
import {mainColor, SCREEN_HEIGHT} from '../theme/theme';

const Card = () => {
  return (
    <CardContainer>
      <TextArea>
        <Title>
          <Name>{`오산원동힐스테이트테스트중`.slice(0, 9)}</Name>
          <SmallText color={'rgba(0, 0, 0, 0.7)'}>118m²(36평)</SmallText>
        </Title>
        <Content>
          <TextContent>
            <TextBox>
              <SmallText name>예측</SmallText>
              <VeticalLine />
              <Ionicons color={mainColor} name="caret-down-outline"></Ionicons>
              <SmallText color={mainColor}>-10 %</SmallText>
            </TextBox>
            <TextBox>
              <SmallText name>매매가</SmallText>
              <VeticalLine />
              <SmallText>4.0억</SmallText>
            </TextBox>
            <TextBox>
              <SmallText name>전세가</SmallText>
              <VeticalLine />
              <SmallText>2.8억</SmallText>
            </TextBox>
          </TextContent>
          <GraphContent></GraphContent>
        </Content>
      </TextArea>
      <ImgArea></ImgArea>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto;
  padding: 20px 25px;
  background-color: white;
  border-radius: 4px;
  height: 130px;
`;

const TextArea = styled.View``;

const Title = styled.View`
  flex-direction: row;
`;

const Name = styled.Text`
  margin-right: 4px;
  font-weight: 500;
  font-size: 16px;
`;

const SmallText = styled.Text`
  margin: 0 4px;
  font-size: 13px;
  font-weight: 300;
  color: ${props => (props.name ? 'rgba(0,0,0,0.6)' : props.color)};
`;

const Content = styled.View`
  flex-direction: row;
`;

const TextContent = styled.View`
  margin-top: 6px;
`;

const TextBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

const VeticalLine = styled(SmallText)`
  width: 1px;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const GraphContent = styled.View``;

const ImgArea = styled.Image`
  border: 0.5px solid lightgray;
  border-radius: 12px;
  height: 85px;
  width: 85px;
`;

export default Card;
