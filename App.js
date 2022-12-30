import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import Detail from './app/screens/Detail';
import Root from './app/navigators/Root';
import {View} from 'react-native';
import {bgColor} from './app/theme/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <View style={{backgroundColor: bgColor}}>
        <Detail />
      </View>

      {/* <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </QueryClientProvider> */}
    </>
  );
};

export default App;
