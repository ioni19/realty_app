import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
  }
};

storeData('바보');

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    console.log(value);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

getData();

const Login = () => {
  return (
    <Container>
      <StyledText>바보</StyledText>
    </Container>
  );
};

const Container = styled.View`
  background-color: red;
  flex: 1;
`;

const StyledText = styled.Text``;

export default Login;
