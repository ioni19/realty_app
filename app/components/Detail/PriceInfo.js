import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import TextToggle from './TextToggle';
import {bgColor, mainColor} from '../../theme/theme';

const kind = {text: ['매매', '전/월세'], fontSize: 17, height: 40};
const period = {
  text: ['최근 3년', '최근 5년', '전체'],
  fontSize: 12,
  height: 30,
};

const PriceInfo = () => {
  const [pickKind, setPickKind] = useState('');
  const [pickPeriod, setpickPeriod] = useState('');

  return (
    <>
      <TextToggle data={kind} setPick={setPickKind} />
      <TextContainer>
        <Wrapper>
          <SmallText>최근 실거래가 평균</SmallText>
          <SmallText>(3건 평균)</SmallText>
        </Wrapper>
        <Wrapper>
          <PriceText>3.7억원</PriceText>
        </Wrapper>
      </TextContainer>
      <HLine />
      <TextToggle period data={period} setPick={setpickPeriod} />
    </>
  );
};

const TextContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 35px;
`;

const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

const SmallText = styled.Text`
  text-align: center;
  font-size: 13px;
`;

const PriceText = styled.Text`
  text-align: center;
  color: ${mainColor};
  font-size: 30px;
  font-weight: 700;
`;

const HLine = styled.View`
  position: static;
  left: -30px;
  width: 120%;
  background-color: ${bgColor};
  height: 3px;
`;

export default PriceInfo;
