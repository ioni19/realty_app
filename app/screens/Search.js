import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import {View, Text, FlatList, ScrollView, TouchableOpacity} from "react-native";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import test from "../mockData/test";
import {bgColor} from "../theme/theme";
import {getCards} from "../lib/card";

const Search = () => {
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    const data = getCards("id", setCardData);
  }, []);

  return (
    <SafeView>
      <>
        <SearchBar />
        <CardList
          data={cardData}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          bounces={false}
          renderItem={({item}) => <Card data={item} />}
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
  background-color: ${bgColor};
`;

export default Search;
