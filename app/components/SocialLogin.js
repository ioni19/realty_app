import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import NaverLogin, {NaverLoginResponse} from "@react-native-seoul/naver-login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import naverIcon from "../../assets/icons/naver.png";
import kakaoIcon from "../../assets/icons/kakao.png";
import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native";

const consumerKey = "dSRuls9mwd8mLC5grvGa";
const consumerSecret = "nluxPu14So";
const appName = "부둥부둥";
const serviceUrlScheme = "naverLogin";

const SocialLogin = () => {
  const [success, setSuccessResponse] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    if (success) storeData(success);
  }, [success]);

  const login = async () => {
    const {successResponse} = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    setSuccessResponse(successResponse);
  };

  // const logout = async () => {
  //   try {
  //     await NaverLogin.logout();
  //     setSuccessResponse(undefined);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // logout(); //옵션

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem("accessToken", jsonValue).then(() =>
        navigation.replace("Tabs"),
      );
    } catch (e) {
      console.log(e);
    }
  };

  // const deleteToken = async () => {
  //   try {
  //     await NaverLogin.deleteToken();
  //     console.log('네이버 토큰 리셋');
  //     setSuccessResponse(undefined);
  //     setFailureResponse(undefined);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <Container>
      <Btn onPress={login} color={"#03c75a"}>
        <Logo source={naverIcon}></Logo>
        <MdText>네이버 로그인</MdText>
      </Btn>
      <Btn color={"#fee500"}>
        <Logo kakao source={kakaoIcon}></Logo>
        <MdText kakao> 카카오톡 로그인</MdText>
      </Btn>
      <Btn color={"black"}>
        <MdText> Apple로 로그인</MdText>
      </Btn>
    </Container>
  );
};

const Container = styled.View`
  padding: 15px 15px 0;
  flex: 1;
  width: 100%;
`;

const Btn = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 auto 10px;
  width: 95%;
  height: 52px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;

const Logo = styled.Image`
  height: ${props => (props.kakao ? "23px" : "45px")};
  width: ${props => (props.kakao ? "23px" : "45px")};
`;

const MdText = styled.Text`
  text-align: center;
  color: ${props => (props.kakao ? "black" : "white")};
  font-size: 22px;
  font-weight: ${props => (props.kakao ? "400" : "500")};
`;

export default SocialLogin;
