import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import Container from '../components/Detail/Container';
import Ranking from '../components/Detail/Ranking';
import ConstantData from '../constantData/detailConstantData';

const Detail = ({
  route: {
    params: {name},
  },
}) => {
  return (
    // <View style={{backgroundColor: '#f6f7fb', flex: 1}}>
    //   {/*나중에 지워야함*/}
    <>
      <ScrollView>
        <Ranking name={name} />
        <Container constantData={ConstantData.ItemScore} />
        <Container constantData={ConstantData.PriceInfo} />
        <Container constantData={ConstantData.SlaeInfo} />
        <Container constantData={ConstantData.Forecast} />
        <Container constantData={ConstantData.InfoByField} />
        <Container constantData={ConstantData.Report} />
        <Container constantData={ConstantData.BasicInfo} />
        <Container constantData={ConstantData.RecHouse} />
      </ScrollView>
    </>
    // </View>
  );
};

export default Detail;
