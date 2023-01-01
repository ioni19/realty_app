import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

const My = () => {
  const logout = async () => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <SafeView>
      <View>
        <Text></Text>
      </View>
      <Button onPress={logout}>로그아웃</Button>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  background-color: white;
  height: 10px;
`;

export default My;
