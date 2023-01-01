import React from 'react';
import Swiper from 'react-native-swiper';
import {mainColor} from '../theme/theme';
import styled from 'styled-components/native';

const AutoSwiper = () => {
  return (
    <Swiper
      style={{
        height: 580,
        justifyContent: 'center',
      }}
      paginationStyle={{
        alignItems: 'flex-start',
        top: 20,
      }}
      activeDotStyle={{
        backgroundColor: mainColor,
        width: 30,
        height: 8,
        borderRadius: 4,
      }}
      loop={true}
      autoplay={true}>
      <Slide>
        <RowText>내 상황에 맞는</RowText>
        <RowText>
          아파트 거래
          <Highlight> 시뮬레이션</Highlight>
        </RowText>
      </Slide>
      <Slide>
        <RowText>
          내 <Highlight>선호도</Highlight>에 따른
        </RowText>
        <RowText>
          전국 아파트
          <Highlight> 매물 추천</Highlight>
        </RowText>
      </Slide>
      <Slide>
        <RowText>전국 어디든</RowText>
        <RowText>
          <Highlight>딱</Highlight> 맞는 아파트<Highlight> 분석</Highlight>
        </RowText>
      </Slide>
      <Slide>
        <RowText>거래시기별</RowText>
        <RowText>
          <Highlight>세금</Highlight> 비교 및 <Highlight>타이밍</Highlight>
          까지
        </RowText>
      </Slide>
      <Slide>
        <RowText>빅데이터 기반</RowText>
        <RowText>
          부동산
          <Highlight> 시황분석 레포트</Highlight>
        </RowText>
      </Slide>
    </Swiper>
  );
};

const Slide = styled.View`
  margin: 80px 20px;
  background-color: white;
  height: 100px;
`;

const RowText = styled.Text`
  text-align: center;
  flex-direction: row;
  font-size: 28px;
  font-weight: 300;
`;

const Highlight = styled.Text`
  color: ${mainColor};
  font-weight: 700;
`;

export default AutoSwiper;
