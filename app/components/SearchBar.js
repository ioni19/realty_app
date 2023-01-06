import React, {useState} from "react";
import styled from "styled-components/native";
import {TextInput, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import {SCREEN_HEIGHT, mainColor} from "../theme/theme";

const sortKind = ["수익순", "가격순", "인기순"];
const SearchBar = ({setSort, sort, setOpen, onChangeText, setCardData}) => {
  const handleSort = text => {
    setSort(text);
  };

  const changeToSearchData = () => {
    setCardData(filterData);
    setOpen(false);
    setCardData(initData);
  };

  return (
    <Container>
      <SearchInputWrapper>
        <TextInput
          placeholder='검색어를 입력해 주세요. [지역, 집 이름, 가격]'
          style={{width: "90%"}}
          returnKeyType='search'
          autoCorrect={false}
          onSubmitEditting={changeToSearchData}
          onChangeText={onChangeText}
          onKeyPress={() => setOpen(true)}
        />
        <SearchBtn onPress={changeToSearchData} activeOpacity={1}>
          <Ionicons name='search-outline' size={24} />
        </SearchBtn>
      </SearchInputWrapper>
      <SortFilterContainer>
        <SortBox>
          {sortKind.map((text, idx) => (
            <SortBtn onPress={() => handleSort(text)} key={idx} sort={text}>
              <SmallText color={sort === text}>{text}</SmallText>
            </SortBtn>
          ))}
        </SortBox>
        <FilterBtn activeOpacity={1}>
          <Ionicons name='funnel-outline' size={20} />
        </FilterBtn>
      </SortFilterContainer>
    </Container>
  );
};

const Container = styled.View`
  height: 130px;
  background-color: white;
`;

const SearchInputWrapper = styled.View`
  flex-direction: row;
  margin: 20px auto;
  padding: 15px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
`;

const SearchBtn = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 65%;
`;

const SortFilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const SortBox = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const SortBtn = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  border-right-width: 1px;
  border-right-color: ${props =>
    props.sort === "인기순" ? "white" : "rgba(0, 0, 0, 0.3)"};
`;

const SmallText = styled.Text`
  font-size: 13px;
  color: ${props => (props.color ? mainColor : "rgba(0, 0, 0, 0.3)")};
  font-weight: 600;
  margin: 0 7px;
`;

const VerticalLine = styled.Text`
  margin: 0 7px;
  width: 1px;
  height: 100%;
  background-color: ${props =>
    props.sort === "인기순" ? "white" : "rgba(0, 0, 0, 0.3)"};
`;

const FilterBtn = styled.TouchableOpacity``;

export default SearchBar;
