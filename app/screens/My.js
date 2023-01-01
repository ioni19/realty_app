import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const My = () => {
  const navigation = useNavigation();

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
    } catch (e) {
      console.log(e);
      // error reading value
    }
    navigation.replace('로그인');
  };

  return (
    <SafeView>
      <View>
        <Text></Text>
      </View>
      <Button onPress={removeData} title={'로그아웃'} />
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

export default My;
