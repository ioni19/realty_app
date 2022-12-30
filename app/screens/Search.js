import React from 'react';
import styled from 'styled-components/native';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import test from '../mockData/test';

const Search = ({navigation: {navigate}}) => {
  const goToDetail = () => {
    navigate('Stack', {screen: '상세정보'});
  };
  return (
    <SafeView>
      <>
        <SearchBar />
        <CardList
          data={test}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          bounces={false}
          renderItem={({item}) => <Card function={goToDetail} data={item} />}
        />
      </>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  height: 10px;
`;

const CardList = styled.FlatList`
  padding-top: 10px;
  background-color: #f6f7fb;
`;

export default Search;
