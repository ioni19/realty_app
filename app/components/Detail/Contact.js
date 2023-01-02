import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {StyledContainer} from "../../screens/Detail";
import {mainColor} from "../../theme/theme";

const Contact = () => {
  const navigation = useNavigation();
  const goToContact = () => {
    navigation.navigate("contact");
  };

  return (
    <StyledContainer>
      <LightText>혹시 아파트 정보가 수정이 필요하다면</LightText>
      <LightText>수정해주세요. 부동부동 서비스를</LightText>
      <LightText>함께 만들어가요!</LightText>
      <TouchableOpacity onPress={goToContact} activeOpacity={1}>
        <BoldText>정정 및 요청 문의하기 &gt;</BoldText>
      </TouchableOpacity>
    </StyledContainer>
  );
};

const LightText = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
`;

const BoldText = styled.Text`
  margin-top: 20px;
  font-size: 17px;
  color: ${mainColor};
  font-weight: 600;
`;

export default Contact;
