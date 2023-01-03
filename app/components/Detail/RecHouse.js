import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet, View} from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AirbnbRating} from "react-native-ratings";
import {StyledContainer, SectionTitle} from "../../screens/Detail";
import {mainColor, bgColor} from "../../theme/theme";
import {imgArr} from "../../mockData/basicImg";
import RecHouseData from "../../mockData/recHouseData";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import {HeartIcon} from "../../screens/Detail";

const RecHouse = () => {
  const [starRate, setStarRate] = useState(null);
  const ratingCompleted = rate => {
    storeStarRate(rate);
  };

  useEffect(() => {
    getStarRate();
  }, []);

  const storeStarRate = async rate => {
    try {
      await AsyncStorage.setItem("starRate", `${rate}`);
    } catch (e) {
      console.log("별점 저장 에러", e);
    }
  };

  const getStarRate = async () => {
    try {
      const value = await AsyncStorage.getItem("starRate");
      setStarRate(value);
      if (value == null) {
        starRate(null);
      }
    } catch (e) {
      console.log("별점 가져오기 에러", e);
    }
  };

  const removeStarDate = async () => {
    try {
      await AsyncStorage.removeItem("starRate");
    } catch (e) {
      console.log("별점 저장 날리기 에러", e);
    }
  };

  // removeStarDate(); // 별점 매기기전 테스트용

  return (
    <>
      <StyledContainer>
        <SectionTitle>부동부동 추천 집</SectionTitle>
      </StyledContainer>
      <CardList
        data={RecHouseData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RecHouseCard data={item} />}
        bouces={false}></CardList>
      <RecRating>
        <BoldText>
          {starRate === null
            ? `추천 집의 만족도는 어떠셨나요?`
            : `만족도를 입력해 주셔서 감사합니다`}
        </BoldText>
        <AirbnbRating
          count={5}
          defaultRating={Number(starRate)}
          size={32}
          style={{paddingRight: 10}}
          reviews={[]}
          onFinishRating={ratingCompleted}
          ratingContainerStyle={{
            height: 35,
            marginBottom: 20,
            alignItems: "center",
          }}
        />
        <View style={{marginTop: 15}}>
          {starRate === null ? (
            <>
              <LightText>추천 만족도 별점을 남겨 주시면</LightText>
              <LightText>나와 맞는 집을 추천 받을 확률이 높아져요</LightText>
            </>
          ) : (
            <>
              <LightText>계속 발전하는 추천 아파트 알고리즘에</LightText>
              <LightText>만족도가 바뀌셨다면 수정해주세요</LightText>
            </>
          )}
        </View>
      </RecRating>
    </>
  );
};

const RecHouseCard = ({data}) => {
  const navigation = useNavigation();
  const {id, name, info} = data;
  const [pick, setPick] = useState(false);
  const colorChange = () => {
    setPick(pick => !pick);
  };
  return (
    <Card
      onPress={() => navigation.push("Stack", {screen: "상세정보"})}
      style={styles.shadow}>
      <ImgBox>
        {info.realImg !== "" ? (
          <RealImg source={{uri: info.realImg}} />
        ) : (
          <BasicImg source={imgArr[(id * imgArr.length) % 10]} />
        )}
      </ImgBox>
      <TextBox>
        <View>
          <SmallText>
            <Name>{name}</Name> 매매 {info.sellingPrice}억원 전세
            {info.jeonsePrice}억원
          </SmallText>
          <SmallText>
            {info.adress} | {info.pyeong}평
          </SmallText>
        </View>
        <HeartIcon onPress={colorChange} style={{width: 40, height: 40}}>
          <Ionicons
            name='heart-sharp'
            color={pick ? mainColor : "rgba(0,0,0,0.2)"}
            size={24}
          />
        </HeartIcon>
      </TextBox>
    </Card>
  );
};

const CardList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  bounces: false,
  alwaysBounceHorizontal: false,
})`
  margin-right: 10px;
`;

const RecRating = styled.View`
  width: 90%;
  margin: 30px auto;
`;

const BoldText = styled.Text`
  text-align: center;
  font-size: 19px;
  font-weight: 600;
`;

const LightText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
`;

const Card = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  margin: 0 15px 5px 20px;
  height: 240px;
  width: 310px;
  background-color: ${bgColor};
  border-radius: 10px;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
});

const ImgBox = styled.View`
  background-color: ${bgColor};
  height: 175px;
  justify-content: center;
  margin: auto;
`;

const BasicImg = styled.Image`
  width: 100px;
  height: 100px;
`;

const RealImg = styled.Image.attrs({
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
})`
  width: 310px;
  height: 175px;
`;

const TextBox = styled.View.attrs({
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
})`
  flex-direction: row;
  justify-content: space-between;
  padding: 14px;
  height: 65px;
  background-color: white;
`;

const Name = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: black;
`;

const SmallText = styled.Text`
  margin-bottom: 2px;
  font-size: 13px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
`;

export default RecHouse;
