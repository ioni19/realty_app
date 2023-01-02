import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import {AirbnbRating} from 'react-native-ratings';
import {StyledContainer, SectionTitle} from '../../screens/Detail';
import {bgColor} from '../../theme/theme';
import {imgArr} from '../../mockData/basicImg';
import RecHouseData from '../../mockData/recHouseData';

const RecHouse = () => {
  const ratingCompleted = rate => {
    console.log('Rating is: ' + rate);
  };

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
        <BoldText>추천 집의 만족도는 어떠셨나요?</BoldText>
        <AirbnbRating
          count={5}
          defaultRating={0}
          size={32}
          style={{paddingRight: 10}}
          reviews={[]}
          onFinishRating={ratingCompleted}
          ratingContainerStyle={{
            height: 35,
            marginBottom: 20,
            alignItems: 'center',
          }}
        />
        <View style={{marginTop: 15}}>
          <LightText>추천 만족도 별점을 남겨 주시면</LightText>
          <LightText>나와 맞는 집을 추천 받을 확률이 높아져요</LightText>
        </View>
      </RecRating>
    </>
  );
};

const RecHouseCard = ({data}) => {
  const navigation = useNavigation();
  const {name, info} = data;
  return (
    <Card onPress={()=> navigation.push('Stack', {screen: '상세정보'})} style={styles.shadow}>
      <ImgBox>
        {info.realImg !== '' ? (
          <RealImg source={{uri: info.realImg}} />
        ) : (
          <BasicImg
            source={imgArr[Math.floor(Math.random() * imgArr.length)]}
          />
        )}
      </ImgBox>
      <TextBox>
        <SmallText>
          <Name>{name}</Name> 매매 {info.sellingPrice}억원 전세
          {info.jeonsePrice}억원
        </SmallText>
        <SmallText>
          {info.adress} | {info.pyeong}평
        </SmallText>
        <HeartIcon></HeartIcon>
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
    shadowColor: '#000',
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

const HeartIcon = styled.View``;

export default RecHouse;
