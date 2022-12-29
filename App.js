import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Tabs from './app/navigators/Tabs';
import theme from './app/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
