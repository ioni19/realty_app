import React from "react";
import styled from "styled-components/native";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import {mainColor} from "../theme/theme";
import {imgArr} from "../mockData/basicImg";

const Card = ({data}) => {
  const {id, name, info} = data;
  const {space, prediction, sellingPrice, jeonsePrice, realImg} = info;

  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stack", {screen: "상세정보", params: {id}});
  };
  return (
    <CardContainer activeOpacity={1} onPress={goToDetail}>
      <TextArea>
        <Title>
          <Name>{name.length > 10 ? name.slice(0, 9) + `...` : name}</Name>
          <SmallText margin={name.length > 10} color={"rgba(0, 0, 0, 0.7)"}>
            {space}
          </SmallText>
        </Title>
        <Content>
          <TextContent>
            <TextBox>
              <SmallText name>예측</SmallText>
              <VerticalLine />
              {prediction < 0 ? (
                <>
                  <Ionicons color={mainColor} name='caret-down-outline' />
                  <SmallText color={mainColor}>{prediction} %</SmallText>
                </>
              ) : (
                <>
                  <Ionicons color='#fa5e68' name='caret-up-outline' />
                  <SmallText color='#fa5e68'>{prediction} %</SmallText>
                </>
              )}
            </TextBox>
            <TextBox>
              <SmallText name>매매가</SmallText>
              <VerticalLine />
              <SmallText>{sellingPrice}억</SmallText>
            </TextBox>
            <TextBox>
              <SmallText name>전세가</SmallText>
              <VerticalLine />
              <SmallText>{jeonsePrice}억</SmallText>
            </TextBox>
          </TextContent>
          <GraphContent></GraphContent>
        </Content>
      </TextArea>
      <ImgArea>
        {realImg === "" ? (
          <DefaultImg source={imgArr[id % 9]} />
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
  align-items: center;
`;

const Name = styled.Text.attrs({ellipsizeMode: "tail", numberOfLines: 1})`
  font-weight: 500;
  font-size: 16px;
`;

const SmallText = styled.Text`
  margin: ${props => (props.margin ? 0 : "0 4px")};
  font-size: 13px;
  font-weight: 300;
  color: ${props => (props.name ? "rgba(0,0,0,0.6)" : props.color)};
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

const VerticalLine = styled(SmallText)`
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
