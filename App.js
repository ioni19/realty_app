import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import Detail from './app/screens/Detail';
import Root from './app/navigators/Root';

const queryClient = new QueryClient();

const App = () => {
  return (
    // {/* <Detail /> */}
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
