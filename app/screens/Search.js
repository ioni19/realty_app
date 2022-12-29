import React from 'react';
import styled from 'styled-components/native';
import {View, Text, FlatList, ScrollView} from 'react-native';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import test from '../mockData/test';

const Search = () => {
  return (
    <SafeView>
      <>
        <SearchBar />
        <ScrollList
          data={test}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          bounces={false}
          renderItem={({item}) => <Card data={item} />}
        />
        <View></View>
      </>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  height: 10px;
`;

const ScrollList = styled.FlatList`
  padding-top: 10px;
  background-color: #f6f7fb;
`;

export default Search;
