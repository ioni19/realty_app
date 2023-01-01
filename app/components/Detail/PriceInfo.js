import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import TextToggle from './TextToggle';
import {bgColor, mainColor} from '../../theme/theme';
import {StyledContainer, SectionTitle, HLine} from '../../screens/Detail';

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
    <StyledContainer>
      <SectionTitle>실거래가 정보</SectionTitle>
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
    </StyledContainer>
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

export default PriceInfo;
