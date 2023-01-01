import React, {useEffect, useState} from 'react';
import {Button, View, Text, ScrollView, StyleSheet} from 'react-native';
import NaverLogin, {NaverLoginResponse} from '@react-native-seoul/naver-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import Swiper from '../components/Swiper';
import AutoSwiper from '../components/Swiper';
import SocialLogin from '../components/SocialLogin';

const consumerKey = 'dSRuls9mwd8mLC5grvGa';
const consumerSecret = 'nluxPu14So';
const appName = '부둥부둥';
const serviceUrlScheme = 'naverLogin';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('accessToken', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('accessToken');
    console.log(JSON.parse(jsonValue).accessToken);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const Login = () => {
  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();

  useEffect(() => {
    storeData(success);
  }, [success]);

  const login = async () => {
    const {failureResponse, successResponse} = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);
  };

  const logout = async () => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteToken = async () => {
    try {
      await NaverLogin.deleteToken();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <AutoSwiper />
        <SocialLogin />
      </ScrollView>
    </SafeView>
  );

  // <SafeAreaView
  //   style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
  //   <ScrollView
  //     style={{flex: 1}}
  //     contentContainerStyle={{flexGrow: 1, padding: 24}}>
  //     <Button title={'Login'} onPress={login} />
  //     <Gap />
  //     <Button title={'Logout'} onPress={logout} />
  //     <Gap />
  //     {success ? (
  //       <View>
  //         <Button title="Delete Token" onPress={deleteToken} />
  //         <Gap />
  //         <ResponseJsonText name={'Success'} json={success} />
  //       </View>
  //     ) : null}
  //     <Gap />
  //     {failure ? <ResponseJsonText name={'Failure'} json={failure} /> : null}
  //     <Gap />
  //     <Button title={'storage'} onPress={getData} />
  //   </ScrollView>
  // </SafeAreaView>
};

const Gap = () => <View style={{marginTop: 24}} />;
const ResponseJsonText = ({json = {}, name}) => (
  <View
    style={{
      padding: 12,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: '#242c3d',
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
      {name}
    </Text>
    <Text style={{color: 'white', fontSize: 13, lineHeight: 20}}>
      {JSON.stringify(json, null, 4)}
    </Text>
  </View>
);

const SafeView = styled.SafeAreaView`
  flex: 1;
`;

export default Login;
