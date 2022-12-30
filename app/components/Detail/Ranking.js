import React from 'react';
import styled from 'styled-components/native';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import emptyLove from '../../../assets/images/graylove.png';
import fullLove from '../../../assets/images/bluelove.png';
import {mainColor} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Ranking = ({name}) => {
  return (
    <View style={{height: 110, backgroundColor: 'white', marginBottom: 15}}>
      <Container>
        <RankContainer>
          <SmallText>37위</SmallText>
          <View>
            <MyRank>
              <Ionicons name="stats-chart" color="white" size={28}></Ionicons>
              <View>
                <SmallText myRank>순위</SmallText>
                <SmallText myRank strong>
                  38위
                </SmallText>
              </View>
            </MyRank>
          </View>
          <SmallText>39위</SmallText>
        </RankContainer>
        <NameContainer>
          <NameWrapper>
            <NameText>오산롯데캐슬스카이파크</NameText>
          </NameWrapper>
          <NameWrapper>
            <NameText myRank>{name}</NameText>
          </NameWrapper>
          <NameWrapper>
            <NameText>이림</NameText>
          </NameWrapper>
        </NameContainer>
        <HeartIcon>
          <Icon source={emptyLove}></Icon>
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
  color: ${props => (props.myRank ? 'white' : 'rgba(0,0,0,0.3)')};
  font-weight: ${props => (props.strong ? '700' : '400')};
  font-size: ${props => (props.strong ? '15px' : '13px')};
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
  color: ${props => (props.myRank ? 'black' : 'rgba(0,0,0,0.3)')};
  font-size: ${props => (props.myRank ? '26px' : '19px')};
  font-weight: ${props => (props.myRank ? '700' : '400')};
`;

const HeartIcon = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  justify-content: center;
  width: 10%;
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;
export default Ranking;
