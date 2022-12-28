import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

const Search = () => {
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

export default Search;
