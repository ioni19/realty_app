import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Report from '../screens/Report';
import Prescription from '../screens/Prescription';
import Search from '../screens/Search';
import My from '../screens/My';
import Home from '../screens/Home';
import mainColor from '../theme/theme';
import Stack from './Stack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="검색"
      screenOptions={{
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: '#c3c3c3',
        headerShown: false,
      }}>
      <Tab.Screen
        name="처방전"
        component={Prescription}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'document-text'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'search-sharp'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="레포트"
        component={Report}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'newspaper-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={My}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'apps'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
