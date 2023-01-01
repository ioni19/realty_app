import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Stack from './Stack';
import Tabs from './Tabs';
import Login from '../screens/Login';

const Root = () => {
  const Nav = createNativeStackNavigator();
  return (
    <Nav.Navigator>
      <Nav.Screen
        name="로그인"
        component={Login}
        options={{headerShown: false}}
      />
      <Nav.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
      <Nav.Screen
        name="Stack"
        component={Stack}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title: '상세정보',
        }}
      />
    </Nav.Navigator>
  );
};

export default Root;
