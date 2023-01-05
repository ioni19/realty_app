import React, {useEffect, useRef} from "react";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
import {View, Text, SafeAreaView, Button} from "react-native";
import firestore from "@react-native-firebase/firestore";
import {test} from "../mockData/test";

import {getCards} from "../lib/card";

const db = firestore();

const getRank = () => {
  let dataArr = {};
  db.collection("card")
    .orderBy("rank", "asc")
    .get()
    .then(query => {
      query.forEach(el => {
        const data = el.data().id;
        const rank = el.data().rank;
        const name = el.data().name;
        // console.log(data, rank, name);
        // dataArr.push(data);
      });
    });
};

const addInfo = () => {
  db.collection("product")
    .doc("순위2")
    .set({
      id: 2,
      ranking: {
        myName: "래미안리더스원",
        myRank: 2,
        prevName: "디에이치반포라클라스",
        nextName: "아크로리버파크",
      },
      itemScore: {
        jeonsePercent: [991, 15],
        gapPrice: ["6.2억", 14],
        totalPrice: ["1.7조", 3],
        flatPrice: ["7.6천만", 1],
      },
      priceInfo: {
        widthType: [
          {
            id: 1,
            households: 192,
            type: 33,
            supplyArea: 40,
            dedicatedArea: 28,
            sellingPrice: "42.7억원",
            jeonsePrice: "16.6억원",
          },
        ],
      },
      saleInfo: [
        {
          id: 1,
          floor: "104동 19층",
          space: "110m²(33평)",
          date: "22.12.31",
          kind: "전세",
          price: 18,
        },
        {
          id: 2,
          floor: "104동 1층",
          space: "110m²(33평)",
          date: "22.12.27",
          kind: "매매",
          price: 34.5,
        },
        {
          id: 3,
          floor: "106동 25층",
          space: "110m²(33평)",
          date: "22.12.27",
          kind: "전세",
          price: 17.9,
        },
        {
          id: 4,
          floor: "106동 25층",
          space: "110m²(33평)",
          date: "22.12.27",
          kind: "전세",
          price: 17.9,
        },
        {
          id: 5,
          floor: "104동 19층",
          space: "110m²(33평)",
          date: "22.12.22",
          kind: "매매",
          price: 34.5,
        },
      ],
      basicInfo: {
        adress: "서울특별시 서초구 서초2동 1744",
        createDate: "2020년 09월",
        households: "1317 (총12개동)",
        ablePark: "1.91세대",
        heat: "지역난방, 열병합",
      },
    });
};

// test.forEach(item => console.log(item));
// const cardAddInfo = () => {
//   test.forEach(item => {
//     db.collection("card").add(item);
//   });
// };

const Home = () => {
  useEffect(() => {
    getRank();
  }, []);
  const onSubmit = () => {
    addInfo();
  };

  return (
    <SafeView style={{flex: 1, backgroundColor: "red"}}>
      <View>
        <Text>외 업어</Text>
        <Button title='누르기' onPress={onSubmit} />
      </View>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  background-color: white;
  height: 10px;
`;

export default Home;
