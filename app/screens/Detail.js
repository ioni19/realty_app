import React, {useRef, useState} from "react";
import {TouchableOpacity, Text, View, ScrollView, Button} from "react-native";
import styled from "styled-components/native";
import BasicInfo from "../components/Detail/BasicInfo";
import BottomBtn from "../components/Detail/BottomBtn";
import Contact from "../components/Detail/Contact";
import InfoByField from "../components/Detail/infoByField/InfoByField";
import ItemScore from "../components/Detail/ItemScore";
import PriceInfo from "../components/Detail/PriceInfo";
import Ranking from "../components/Detail/Ranking";
import RecHouse from "../components/Detail/RecHouse";
import Report from "../components/Detail/Report";
import SaleInfo from "../components/Detail/SaleInfo";
import {bgColor} from "../theme/theme";

const Detail = () => {
  const [isLike, setIsLike] = useState(false);
  const [scrollToY, setScrollToY] = useState(0);
  const [scrollRef, setRef] = useState();
  // const scrollRef = useRef();
  // console.log("디테일ref", scrollRef);

  const colorChange = () => {
    setIsLike(isLike => !isLike);
  };

  // const handleScroll = event => {
  //   scrollRef.scrollTo({y: scrollToY + 35, animated: true});
  // };

  return (
    <View style={{backgroundColor: "white", flex: 1}}>
      <ScrollView ref={ref => setRef(ref)}>
        <Ranking isLike={isLike} colorChange={colorChange} />
        <Gap />
        <ItemScore />
        <Gap />
        <PriceInfo ref={scrollRef} />
        <Gap />
        <SaleInfo />
        <Gap />
        <InfoByField />
        <Gap />
        <Report />
        <Gap />
        <BasicInfo />
        <Gap />
        <RecHouse />
        <Gap />
        <Contact />
        <Gap />
        <BottomBtn isLike={isLike} colorChange={colorChange} />
      </ScrollView>
    </View>
  );
};

export const StyledContainer = styled.View`
  width: 90%;
  margin: 35px auto;
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

export const HeartIcon = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin: auto 0;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const MoreBtn = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
`;

export const MoreText = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

const Gap = styled.View`
  width: 100%;
  height: 15px;
  background-color: ${bgColor};
`;

export default Detail;
