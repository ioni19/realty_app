import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

const Prescription = () => {
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

export default Prescription;
