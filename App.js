import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Tabs from './app/navigators/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
