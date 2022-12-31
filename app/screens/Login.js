// import React, {useState} from 'react';
// import styled from 'styled-components/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Alert, SafeAreaView, StyleSheet, Button, Platform} from 'react-native';
// import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

// const storeData = async value => {
//   try {
//     await AsyncStorage.setItem('@storage_Key', value);
//   } catch (e) {
//     // saving error
//   }
// };

// storeData('바보');

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@storage_Key');
//     console.log(value);
//     if (value !== null) {
//       // value previously stored
//     }
//   } catch (e) {
//     // error reading value
//   }
// };

// getData();

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Button, View, Text, ScrollView} from 'react-native';
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from '@react-native-seoul/naver-login';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [getProfileRes, setGetProfileRes] = useState();

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
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfile = async () => {
    try {
      const profileResult = await NaverLogin.getProfile(
        'AAAAOD9PW46lMIltnGD+pxOah+uaf0VC1OySEfRyG3evp4b1pkANxjBcXEENikA4wnGa3UCx7ZCFAwBpH3wuCo5BCIc=',
      );
      setGetProfileRes(profileResult);
    } catch (e) {
      setGetProfileRes(undefined);
    }
  };

  const deleteToken = async () => {
    try {
      await NaverLogin.deleteToken();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, padding: 24}}>
        <Button title={'Login'} onPress={login} />
        <Gap />
        <Button title={'Logout'} onPress={logout} />
        <Gap />
        {success ? (
          <>
            <Button title="Get Profile" onPress={getProfile} />
            <Gap />
          </>
        ) : null}
        {success ? (
          <View>
            <Button title="Delete Token" onPress={deleteToken} />
            <Gap />
            <ResponseJsonText name={'Success'} json={success} />
          </View>
        ) : null}
        <Gap />
        {failure ? <ResponseJsonText name={'Failure'} json={failure} /> : null}
        <Gap />
        {getProfileRes ? (
          <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
        ) : null}
        <Button title={'storage'} onPress={getData} />
      </ScrollView>
    </SafeAreaView>
  );
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

export default Login;
