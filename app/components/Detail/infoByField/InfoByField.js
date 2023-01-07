import React, {useState} from "react";
import {View, Text, Image} from "react-native";
import styled from "styled-components/native";
import TextToggle from "../TextToggle";
import {StyledContainer, SectionTitle, HLine} from "../../../screens/Detail";
import {mainColor} from "../../../theme/theme";
import medal from "../../../../assets/images/medal.png";
import RadarChart from "./RadarChart";

const InfoByField = () => {
  const field = {
    text: ["교통", "교육", "주거환경", "편의시설"],
    fontSize: 15,
    height: 30,
  };
  const [pickKind, setPick] = useState("");
  return (
    <StyledContainer>
      <SectionTitle>분야별 정보</SectionTitle>
      <MarinBox>
        <Description>
          주변 부동산 대비 <Highlight>주거환경, 수익률</Highlight>이 우수합니다.
        </Description>
      </MarinBox>
      <RadarChart />
      <HouseName>
        <Circle color={mainColor} />
        <MdText>우리집</MdText>
        <Circle color={"aqua"} />
        <MdText>청담아이파크</MdText>
      </HouseName>
      <TextToggle data={field} pickKind={pickKind} setPick={setPick} />
      <View ContentContainer>
        <View Article>
          <MainContent>
            <MedalImg source={medal} />
            <Textbox>
              <MdText style={{marginBottom: 20}}>
                교통점수가 지역내 상위 59%입니다.
              </MdText>
              <Description>
                코엑스 11분, 잠실 26분, 강남역 26분으로 대중교통을 통한 도심지
                이동이 편리하며, 경부선을 통한 고속도로 접근성이 우수합니다.
                또한 자차로 KTX 서울역 18분, SRT 수서역 12분으로 고속철도 이동이
                용이합니다.
              </Description>
            </Textbox>
          </MainContent>
          <HLine />
        </View>
      </View>
    </StyledContainer>
  );
};

const MarinBox = styled.View`
  margin: 20px 0;
`;

const Description = styled.Text`
  font-size: 13px;
  font-weight: 300;
`;

const Highlight = styled(Description)`
  color: ${mainColor};
`;

const HouseName = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px; ;
`;

const Circle = styled.View`
  margin-right: 10px;
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 50px; ;
`;

const MdText = styled.Text`
  margin-right: 10px;
  font-size: 15px;
`;

const ContentContainer = styled.View``;

const MainContent = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
`;

const MedalImg = styled.Image`
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  width: 50px;
  height: 50px;
`;

const Textbox = styled.View`
  width: 65%;
`;

export default InfoByField;
