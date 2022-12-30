import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import Card from '../Card';
import Ranking from './Ranking';
import ItemScore from './ItemScore';
import PriceInfo from './PriceInfo';

const Container = ({constantData}) => {
  return (
    <View style={{backgroundColor: 'white', marginBottom: 15}}>
      <StyledContainer>
        <Title>{constantData.category}</Title>
        {constantData.category === '투자 항목 점수' && <ItemScore />}
        {constantData.category === '실거래가 정보' && <PriceInfo />}
      </StyledContainer>
    </View>
  );
};

const StyledContainer = styled.View`
  width: 90%;
  margin: 35px auto;
`;

const Title = styled.Text`
  font-size: 21px;
  font-weight: 600;
`;

export default Container;
