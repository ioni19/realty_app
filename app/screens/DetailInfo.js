import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Container from '../components/DetailInfo/Container';
import Ranking from '../components/DetailInfo/Ranking';
import ConstantData from '../constantData/detailConstantData';

const DetailInfo = () => {
  return (
    // <View style={{backgroundColor: '#f6f7fb', flex: 1}}>
    //   {/*나중에 지워야함*/}
    <>
      <Ranking />
      <Container constantData={ConstantData.ItemScore} />
      <Container constantData={ConstantData.PriceInfo} />
      <Container constantData={ConstantData.SlaeInfo} />
      <Container constantData={ConstantData.Forecast} />
      <Container constantData={ConstantData.InfoByField} />
      <Container constantData={ConstantData.Report} />
      <Container constantData={ConstantData.BasicInfo} />
      <Container constantData={ConstantData.RecHouse} />
    </>
    // </View>
  );
};

export default DetailInfo;
