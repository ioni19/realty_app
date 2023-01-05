import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import styled from "styled-components/native";
import reportData from "../mockData/reportData";
import {bgColor, SCREEN_WIDTH} from "../theme/theme";
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

  useEffect(() => {
    const result = setFilterData();
  }, [query]);

  const combinedText = item => {
    return `${item.address.split("동")[0]}동 ${item.name}`;
  };

  return (
    <>
      <OverLay onPress={() => setOpen(false)}></OverLay>
      <Container>
        {data.slice(0, 8).map(item => {
          return (
            <SeacrhCard onPress={() => changeToSearchData(item)} key={item.id}>
              <Icon>
                <Ionicons name='location-outline' size={18} color={"white"} />
              </Icon>
              <MdText>{combinedText(item)}</MdText>
            </SeacrhCard>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.View`
  position: absolute;
  margin-top: 130px;
  padding: 0 20px;
  height: 420px;
  width: ${SCREEN_WIDTH}px;
  background-color: white;
`;

const OverLay = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`;

const SeacrhCard = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
`;

const MdText = styled.Text`
  font-size: 16px;
  font-weight: 300;
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
