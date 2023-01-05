import React, {useState} from "react";
import {Text, View} from "react-native";
import styled from "styled-components/native";
import {
  StyledContainer,
  SectionTitle,
  HLine,
  MoreBtn,
  MoreText,
} from "../../screens/Detail";
import {useNavigation} from "@react-navigation/native";
import {mainColor} from "../../theme/theme";
import Icon from "react-native-vector-icons/dist/AntDesign";
import noSale from "../../../assets/images/noSale.png";

const SaleInfo = ({data, setSaleInfoY}) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [resArr, setRestArr] = useState(data !== null && data.slice(0, 2));

  const handleClick = () => {
    setIsVisible(true);
    if (isVisible) {
      navigation.navigate("InReady");
    } else {
      setRestArr(() => [...data]);
    }
  };

  return (
    <>
      <StyledContainer
        onLayout={e => {
          const layout = e.nativeEvent.layout;
          setSaleInfoY(layout.y);
        }}>
        <SectionTitle style={{marginBottom: 10}}>매물 정보</SectionTitle>
        {data === null ? (
          <ImageBox>
            <Image source={noSale} />
            <Notice>아직 거래 나온 매물이 없네요</Notice>
          </ImageBox>
        ) : (
          resArr.map(item => <Card key={item.id} data={item} />)
        )}
      </StyledContainer>
      <HLine />
      {(data !== null && data.length > 2) && (
        <MoreBtn onPress={handleClick}>
          <MoreText>매물 더보기+</MoreText>
        </MoreBtn>
      )}
    </>
  );
};

const Card = ({data}) => {
  const {floor, space, date, kind, price} = data;
  return (
    <Container>
      <LeftBox>
        <MediumText>{floor}</MediumText>
        <LightText>{space}</LightText>
        <LightText>남향 | 타입</LightText>
      </LeftBox>
      <CenterBox>
        <Highlight>
          <ThinText>{date} 확인매물</ThinText>
        </Highlight>
        <View>
          <View style={{position: "absolute", right: 0}}>
            <SmallText>{kind}</SmallText>
            <BoldText>{price}억원</BoldText>
          </View>
        </View>
      </CenterBox>
      <RightBox icon>
        <Icon name='contacts' size={30} color={mainColor}></Icon>
      </RightBox>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin: 30px 15px 0;
`;

const ImageBox = styled.View`
  width: 100%;
  height: 220px;
`;

const Image = styled.Image`
  position: relative;
  margin: auto;
  width: 75%;
  height: 200px;
`;

const Notice = styled.Text`
  position: absolute;
  font-size: 17px;
  top: 60%;
  left: 23%;
`;

const LeftBox = styled.View`
  width: 40%;
`;

const MediumText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const LightText = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
`;

const CenterBox = styled.View`
  width: 30%;
`;

const Highlight = styled.View`
  justify-content: center;
  height: 20px;
  background-color: #f2f6fc;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ThinText = styled.Text`
  text-align: center;
  font-size: 11px;
  font-weight: 300;
  color: ${mainColor};
`;

const SmallText = styled.Text`
  color: ${mainColor};
  font-weight: 500;
  font-size: 11px;
`;

const BoldText = styled.Text`
  color: ${mainColor};
  font-weight: 700;
  font-size: 19px;
`;

const RightBox = styled.Text`
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  margin: auto;
`;
export default SaleInfo;
