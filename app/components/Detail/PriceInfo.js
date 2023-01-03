import React, {useState} from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import {View, Text, StyleSheet} from "react-native";
import TextToggle from "./TextToggle";
import {bgColor, mainColor, SCREEN_WIDTH} from "../../theme/theme";
import {StyledContainer, SectionTitle, HLine} from "../../screens/Detail";
import Ranking from "./Ranking";
import SpaceSelectModal from "./SpaceSelectModal";
import {widthDataType} from "../../mockData/widthTypeData";

const kind = {text: ["매매", "전/월세"], fontSize: 17, height: 40};
const period = {
  text: ["최근 3년", "최근 5년", "전체"],
  fontSize: 12,
  height: 30,
};

const PriceInfo = ({ref}) => {
  const [pickKind, setPickKind] = useState("");
  const [pickPeriod, setpickPeriod] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [select, SetSelect] = useState(widthDataType[0].type);
  console.log(select);

  return (
    <>
      <Modal
        style={{width: SCREEN_WIDTH, margin: "auto"}}
        animationInTiming={500}
        isVisible={isOpen}
        swipeDirection={"down"}
        swipeThreshold={300}
        onSwipeComplete={() => setIsOpen(false)}>
        <SpaceSelectModal
          data={widthDataType}
          setIsOpen={setIsOpen}
          setSelect={SetSelect}
          select={select}
        />
      </Modal>
      <StyledContainer>
        <FlexRow>
          <SectionTitle>실거래가 정보</SectionTitle>
          <SpaceSelectBtn onPress={() => setIsOpen(true)} style={styles.shadow}>
            <SpaceKind>{select}평형 ∨</SpaceKind>
          </SpaceSelectBtn>
        </FlexRow>
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
    </>
  );
};

const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SpaceSelectBtn = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  justify-content: center;
  height: 25px;
  width: 80px;
  /* border: 1px solid black; */
  border-radius: 10px;
`;

const SpaceKind = styled.Text`
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
`;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

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
