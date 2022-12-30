import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import Card from '../Card';
import Ranking from './Ranking';
import ItemScore from './ItemScore';
import PriceInfo from './PriceInfo';

const Container = ({constantData}) => {
  return (
    <View style={{height: 110, backgroundColor: 'white', marginBottom: 15}}>
      <StyledContainer>
        <Title>{constantData.title}</Title>
        {constantData.title === '투자항목점수' && <ItemScore />}
      </StyledContainer>
    </View>
  );
};

const StyledContainer = styled.View`
  width: 90%;
  margin: 30px auto;
`;

const Title = styled.Text`
  font-size: 21px;
  font-weight: 600;
`;

export default Container;
