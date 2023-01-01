import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import Detail from './app/screens/Detail';
import Root from './app/navigators/Root';
import {View} from 'react-native';
import {bgColor} from './app/theme/theme';
import Login from './app/screens/Login';
import LoginTest from './app/screens/LoginTest';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      {/* <View style={{backgroundColor: bgColor}}> */}
      {/* <Detail /> */}
      {/* <Login /> */}
      {/* <LoginTest /> */}
      {/* </View> */}

      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
};

export default App;
