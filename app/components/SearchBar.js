import React from 'react';
import styled from 'styled-components/native';
import {TextInput, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {SCREEN_HEIGHT} from '../theme/theme';

const SearchBar = () => {
  return (
    <Container>
      <SearchInputWrapper>
        <TextInput
          placeholder="검색어를 입력해 주세요. [지역, 집 이름, 가격]"
          returnKeyType="search"
          style={{width: '90%'}}
        />
        <SearchBtn activeOpacity={1}>
          <Ionicons name="search-outline" size={24} />
        </SearchBtn>
      </SearchInputWrapper>
      <SortFilterContainer>
        <SortBox>
          <SmallText>수익순</SmallText>
          <VerticalLine />
          <SmallText>가격순</SmallText>
          <VerticalLine />
          <SmallText>인기순</SmallText>
        </SortBox>
        <FilterBtn activeOpacity={1}>
          <Ionicons name="funnel-outline" size={20}></Ionicons>
        </FilterBtn>
      </SortFilterContainer>
    </Container>
  );
};

const Container = styled.View`
  height: ${Math.floor(SCREEN_HEIGHT / 6.5)}px;
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

const SmallText = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 600;
`;

const VerticalLine = styled.Text`
  margin: 0 7px;
  width: 1px;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const FilterBtn = styled.TouchableOpacity``;

export default SearchBar;
