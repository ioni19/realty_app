import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components/native";
import {View, Text, FlatList, ScrollView, TouchableOpacity} from "react-native";
import Card from "../components/Card";
import SearchModal from "../components/SearchModal";
import SearchBar from "../components/SearchBar";
import {bgColor} from "../theme/theme";
import {getCards} from "../lib/card";
import {getAddress} from "../lib/product";

const Search = () => {
  const [cardData, setCardData] = useState(null);
  const [addressData, setAddressData] = useState([]);
  // const [filterData, setFilterData] = useState([]);
  const [sort, setSort] = useState("이름");
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const timeSet = useRef();
  const onChangeText = text => {
    clearTimeout(timeSet.current);
    timeSet.current = setTimeout(() => {
      setQuery(text);
    }, 500);
  };
  const sortKey = {
    수익순: "info.prediction",
    가격순: "info.sellingPrice",
    인기순: "rank",
    이름: "name",
  };

  useEffect(() => {
    getCards(sortKey[sort], setCardData);
  }, [sort]);

  let filterData = [];
  if (cardData) {
    filterData = cardData.filter(
      item => item.address.includes(query) || item.name.includes(query),
    );
  }

  return (
    <SafeView>
      <>
        <SearchBar
          setSort={setSort}
          sort={sort}
          setOpen={setOpen}
          onChangeText={onChangeText}
          setCardData={setCardData}
        />
        <CardList
          data={
            sort === "수익순" || sort === "가격순"
              ? cardData.reverse()
              : cardData
          }
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          bounces={false}
          onEndReached={()=>alert('끝')}
          onEndReachedTreshold={0.5}
          renderItem={({item}) => <Card data={item} />}
        />
        {isOpen && (
          <SearchModal
            data={filterData}
            setOpen={setOpen}
            setCardData={setCardData}
          />
        )}
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
