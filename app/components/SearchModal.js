import React, {useEffect, useState} from "react";
import {Keyboard} from "react-native";
import styled from "styled-components/native";
import reportData from "../mockData/reportData";
import {bgColor, mainColor, SCREEN_HEIGHT, SCREEN_WIDTH} from "../theme/theme";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import {getAddress} from "../lib/product";

const SearchModal = ({query, data, setOpen, setCardData}) => {
  const [addressData, setAddressData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [test, setTest] = useState([]);
  const [finalData, setFinalData] = useState([]);

  // query.forEach(el => {
  //   const data = el.data();
  //   dataArr.push(data);
  // });
  const changeToSearchData = item => {
    setCardData([item]);
    setOpen(false);
  };

  const clickBackdrop = () => {
    setOpen(false);
    Keyboard.dismiss();
  };

  const combinedText = item => {
    return `${item.address.split("동")[0]}동 ${item.name}`;
  };

  return (
    <Container onPress={clickBackdrop}>
      <SearchList>
        {data.slice(0, 8).map(item => {
          return (
            <SeacrhCard onPress={() => changeToSearchData(item)} key={item.id}>
              {query && (
                <>
                  <Icon>
                    <Ionicons
                      name='location-outline'
                      size={18}
                      color={"white"}
                    />
                  </Icon>
                  <MdText>
                    <MdText>{combinedText(item).split(query)[0]}</MdText>
                    <MdText color>{query}</MdText>
                    <MdText>{combinedText(item).split(query)[1]}</MdText>
                  </MdText>
                </>
              )}
            </SeacrhCard>
          );
        })}
      </SearchList>
    </Container>
  );
};

const Container = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  height: ${SCREEN_HEIGHT}px;
  margin-top: 120px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SearchList = styled.View`
  padding: 0 20px;
  height: 410px;
  width: ${SCREEN_WIDTH}px;
  background-color: white;
`;

const SeacrhCard = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  flex-direction: row;
  margin: 13px 0;
  align-items: center;
`;

const MdText = styled.Text`
  font-size: 15px;
  font-weight: 300;
  color: ${props => props.color && mainColor};
`;

const Icon = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default SearchModal;
