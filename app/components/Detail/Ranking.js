import React from "react";
import styled from "styled-components/native";
import {Text, TouchableOpacity, View, Image} from "react-native";
import {mainColor} from "../../theme/theme";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {HeartIcon} from "../../screens/Detail";

const Ranking = ({data, isLike, colorChange}) => {
  const {myName, myRank, prevName, nextName} = data;
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.push("Stack", {screen: "상세정보"});
  };
  return (
    <View style={{height: 110, backgroundColor: "white"}}>
      <Container>
        <RankContainer>
          <SmallText>{myRank - 1}위</SmallText>
          <View>
            <MyRank>
              <Ionicons name='stats-chart' color='white' size={28} />
              <View>
                <SmallText myRank>순위</SmallText>
                <SmallText myRank strong>
                  {myRank}위
                </SmallText>
              </View>
            </MyRank>
          </View>
          <SmallText>{myRank + 1}위</SmallText>
        </RankContainer>
        <NameContainer>
          <NameWrapper onPress={goToDetail}>
            <NameText>{prevName}</NameText>
          </NameWrapper>
          <NameWrapper>
            <NameText myRank>{myName}</NameText>
          </NameWrapper>
          <NameWrapper>
            <NameText>{nextName}</NameText>
          </NameWrapper>
        </NameContainer>
        <HeartIcon onPress={colorChange}>
          <Ionicons
            name='heart-sharp'
            color={isLike ? mainColor : "rgba(0,0,0,0.2)"}
            size={24}
          />
        </HeartIcon>
      </Container>
    </View>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const RankContainer = styled.View`
  justify-content: center;
  margin-right: 10px;
  width: 22%;
`;

const SmallText = styled.Text`
  text-align: center;
  color: ${props => (props.myRank ? "white" : "rgba(0,0,0,0.3)")};
  font-weight: ${props => (props.strong ? "700" : "400")};
  font-size: ${props => (props.strong ? "15px" : "13px")};
`;

const MyRank = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 100%;
  padding: 0 8px;
  margin: 3px 0;
  border-radius: 4px;
  background-color: ${mainColor};
`;

const NameContainer = styled.View`
  justify-content: center;
  width: 58%;
`;

const NameWrapper = styled.TouchableOpacity.attrs({activeOpacity: 1})``;

const NameText = styled.Text`
  margin: 2px 0;
  color: ${props => (props.myRank ? "black" : "rgba(0,0,0,0.3)")};
  font-size: ${props => (props.myRank ? "26px" : "19px")};
  font-weight: ${props => (props.myRank ? "700" : "400")};
`;

export default Ranking;
