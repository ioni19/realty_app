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
        {constantData.category === '투자항목점수' && <ItemScore />}
      </StyledContainer>
    </View>
  );
};

const StyledContainer = styled.View`
  width: 90%;
  margin: 35px auto;
`;

const Title = styled.Text`
  margin-bottom: 30px;
  font-size: 21px;
  font-weight: 600;
`;

export default Container;
