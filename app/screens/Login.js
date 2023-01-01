import React, {useEffect, useState} from 'react';
import {Button, View, Text, ScrollView, StyleSheet} from 'react-native';
import NaverLogin, {NaverLoginResponse} from '@react-native-seoul/naver-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import AutoSwiper from '../components/Swiper';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <AutoSwiper />
        <SocialLogin />
      </ScrollView>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export default Login;
