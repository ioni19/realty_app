import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {mainColor} from '../theme/theme';
import {imgArr} from '../mockData/defaultImg';

const Card = props => {
  const {id, name, info} = props.data;
  const {space, prediction, sellingPrice, jeonsePrice, realImg} = info;

  const goToDetail = props.function;
  return (
    <CardContainer activeOpacity={1} onPress={goToDetail}>
      <TextArea>
        <Title>
          <Name>{name.length > 10 ? name.slice(0, 9) + `...` : name}</Name>
          <SmallText color={'rgba(0, 0, 0, 0.7)'}>{space}</SmallText>
        </Title>
        <Content>
          <TextContent>
            <TextBox>
              <SmallText name>예측</SmallText>
              <VeticalLine />
              {prediction < 0 ? (
                <>
                  <Ionicons color={mainColor} name="caret-down-outline" />
                  <SmallText color={mainColor}>{prediction} %</SmallText>
                </>
              ) : (
                <>
                  <Ionicons color="#fa5e68" name="caret-up-outline" />
                  <SmallText color="#fa5e68">{prediction} %</SmallText>
                </>
              )}
            </TextBox>
            <TextBox>
              <SmallText name>매매가</SmallText>
              <VeticalLine />
              <SmallText>{sellingPrice}억</SmallText>
            </TextBox>
            <TextBox>
              <SmallText name>전세가</SmallText>
              <VeticalLine />
              <SmallText>{jeonsePrice}억</SmallText>
            </TextBox>
          </TextContent>
          <GraphContent></GraphContent>
        </Content>
      </TextArea>
      <ImgArea>
        {realImg === '' ? (
          <DefaultImg
            source={imgArr[Math.floor(Math.random() * imgArr.length)]}
          />
        ) : (
          <RealImg source={{uri: realImg}} />
        )}
      </ImgArea>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
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

const ImgArea = styled.View`
  border: 0.5px solid lightgray;
  border-radius: 12px;
  height: 85px;
  width: 85px;
`;

const RealImg = styled.Image`
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

const DefaultImg = styled(RealImg)`
  border-radius: 0;
  width: 50%;
  height: 50%;
  margin: auto;
`;

export default Card;
