import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Tabs from './app/navigators/Tabs';
import Stack from './app/navigators/Stack';
import DetailInfo from './app/screens/DetailInfo';
import Root from './app/navigators/Root';

const App = () => {
  return (
    // {/* <DetailInfo /> */}
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
