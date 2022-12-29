import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailInfo from '../screens/DetailInfo';
import Search from '../screens/Search';
import Card from '../components/Card';

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: 'black',
      headerStyle: {height: 200},
    }}>
    <NativeStack.Screen
      name="카드리스트"
      component={Search}
      options={{headerShown: false}}
    />
    <NativeStack.Screen name="상세정보" component={DetailInfo} />
  </NativeStack.Navigator>
);

export default Stack;
