import React from 'react';
import styled from 'styled-components/native';
import RadarChart from './RadarChart';
import {StyledContainer, SectionTitle} from '../../../screens/Detail';

const InfoByField = () => {
  return (
    <StyledContainer>
      <SectionTitle>분야별 정보</SectionTitle>
      <RadarChart />
    </StyledContainer>
  );
};

export default InfoByField;
