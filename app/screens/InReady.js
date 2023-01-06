import React from "react";
import styled from "styled-components/native";
import {useNavigation} from "@react-navigation/native";
import ready from "../../assets/images/001.png";
import {mainColor} from "../theme/theme";
import {WhiteBtn} from "../components/Detail/BottomBtn";

const InReady = () => {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Notice>
        <Image source={ready} />
        <Text>페이지 준비 안내</Text>
        <SmallText>어플 이용에 불편을 드려 죄송합니다</SmallText>
        <SmallText>현재 페이지는 준비중에 있습니다</SmallText>
        <SmallText>나중에 다시 이용해주시길 바랍니다</SmallText>
      </Notice>
      <BackBtn onPress={goToBack}>
        <BtnText>이전으로 돌아가기</BtnText>
      </BackBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Notice = styled.View`
  margin-bottom: 70px;
`;

const Image = styled.Image`
  width: 250px;
  height: 250px;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  /* color: ${mainColor}; */
  margin-bottom: 10px;
`;

const SmallText = styled.Text`
  text-align: center;
  font-size: 16px;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 21px;
  font-weight: 700;
`;

const BackBtn = styled(WhiteBtn)`
  position: absolute;
  bottom: 55px;
  background-color: ${mainColor};
  width: 90%;
`;
export default InReady;
