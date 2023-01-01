import React from 'react';
import styled from 'styled-components/native';
import naverIcon from '../../assets/icons/naver.png';
import kakaoIcon from '../../assets/icons/kakao.png';
const SocialLogin = () => {
  return (
    <Container>
      <Btn color={'#03c75a'}>
        <Logo source={naverIcon}></Logo>
        <MdText>네이버 로그인</MdText>
      </Btn>
      <Btn color={'#fee500'}>
        <Logo kakao source={kakaoIcon}></Logo>
        <MdText kakao> 카카오톡 로그인</MdText>
      </Btn>
      <Btn color={'black'}>
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

const Btn = styled.View`
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
  height: ${props => (props.kakao ? '23px' : '45px')};
  width: ${props => (props.kakao ? '23px' : '45px')};
`;

const MdText = styled.Text`
  text-align: center;
  color: ${props => (props.kakao ? 'black' : 'white')};
  font-size: 22px;
  font-weight: ${props => (props.kakao ? '400' : '500')};
`;

export default SocialLogin;
