import React from 'react';
import styled from 'styled-components/native';
import ScoreText from './ScoreText';

const ItemScore = () => {
  return (
    <Container>
      <ScoreText name="전세가율" unit="%" />
      <ScoreText name="갭가격" unit="원" />
      <ScoreText name="시가총액" unit="원" />
      <ScoreText name="평당매매가" unit="원" />
    </Container>
  );
};

const Container = styled.View`
  padding: 0 15px;
`;
export default ItemScore;
