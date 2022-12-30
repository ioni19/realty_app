import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/Detail';
import Search from '../screens/Search';
import Card from '../components/Card';

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <NativeStack.Screen name="상세정보" component={Detail} />
  </NativeStack.Navigator>
);

export default Stack;
