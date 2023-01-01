import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import InfoByField from '../components/Detail/infoByField/InfoByField';
import ItemScore from '../components/Detail/ItemScore';
import PriceInfo from '../components/Detail/PriceInfo';
import Ranking from '../components/Detail/Ranking';
import Report from '../components/Detail/Report';

import {bgColor} from '../theme/theme';

const Detail = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        {/* <Ranking />
        <Gap />
        <ItemScore />
        <Gap />
        <PriceInfo />
        <Gap />
        <InfoByField />
        <Gap /> */}
        <Report />
        <Gap />
      </ScrollView>
    </View>
  );
};

export const StyledContainer = styled.View`
  width: 90%;
  margin: 35px auto; ;
`;

export const SectionTitle = styled.Text`
  font-size: 21px;
  font-weight: 600;
`;

export const HLine = styled.View`
  position: static;
  left: -30px;
  width: 120%;
  background-color: ${bgColor};
  height: 3px;
`;

const Gap = styled.View`
  width: 100%;
  height: 15px;
  background-color: ${bgColor};
`;

export default Detail;
