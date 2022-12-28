import React from 'react';
import styled from 'styled-components/native';
import {View, Text, SafeAreaView} from 'react-native';

const Home = () => {
  return (
    <SafeView>
      <View>
        <Text></Text>
      </View>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  background-color: white;
  height: 10px;
`;

export default Home;
