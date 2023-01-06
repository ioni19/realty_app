import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components/native";
import Card from "../components/Card";
import SearchModal from "../components/SearchModal";
import SearchBar from "../components/SearchBar";
import {bgColor} from "../theme/theme";
import {getCards} from "../lib/card";
import {getDescCards} from "../lib/card";

const Search = () => {
  const [initData, setInitData] = useState([]);
  const [cardData, setCardData] = useState(null);
  const [sortedData, setSortedData] = useState();
  const [sort, setSort] = useState("이름");
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const timeSet = useRef();
  const onChangeText = text => {
    clearTimeout(timeSet.current);
    timeSet.current = setTimeout(() => {
      setQuery(text);
    }, 300);
  };
  const sortKey = {
    수익순: "info.prediction",
    가격순: "info.sellingPrice",
    인기순: "rank",
    이름: "name",
  };

  useEffect(() => {
    getCards(sortKey[sort], setCardData);
    getCards(sortKey[sort], setInitData);
    getDescCards(sortKey[sort], setSortedData);
    // fetchCardsData();
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
          filterData={filterData}
          setSort={setSort}
          sort={sort}
          setOpen={setOpen}
          onChangeText={onChangeText}
          setCardData={setCardData}
          initData={initData}
        />
        <CardList
          data={sort === "수익순" || sort === "가격순" ? sortedData : cardData}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          bounces={false}
          // onEndReached={() => alert("끝")}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => <Card data={item} />}
        />
        {isOpen && (
          <SearchModal
            data={filterData}
            setOpen={setOpen}
            setCardData={setCardData}
            initData={initData}
            query={query}
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
