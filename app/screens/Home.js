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
    .doc("상품5")
    .set({
      id: 22,
      ranking: {
        myName: "반포팰리스",
        myRank: 701,
        prevName: "서초힐하우스",
        nextName: "해청파인빌",
      },
      itemScore: {
        jeonsePercent: [71.4, 49],
        gapPrice: ["2억", 48],
        totalPrice: ["138.8억", 63],
        flatPrice: ["2.1천만", 52],
      },
      priceInfo: {
        widthType: [
          {
            id: 1,
            households: 120,
            type: 30,
            supplyArea: 40,
            dedicatedArea: 28,
            sellingPrice: "5.6억원",
            jeonsePrice: "3.7억원",
          },
          {
            id: 2,
            households: 324,
            type: 31,
            supplyArea: 67,
            dedicatedArea: 47,
            sellingPrice: "6억원",
            jeonsePrice: "3.7억원",
          },
          {
            id: 3,
            households: 72,
            type: 32,
            supplyArea: 67,
            dedicatedArea: 47,
            sellingPrice: "5.8억원",
            jeonsePrice: "3.2억원",
          },
          {
            id: 4,
            households: 72,
            type: 34,
            supplyArea: 67,
            dedicatedArea: 47,
            sellingPrice: "7.9억원",
            jeonsePrice: "6.7억원",
          },
          {
            id: 5,
            households: 72,
            type: 38,
            supplyArea: 67,
            dedicatedArea: 47,
            sellingPrice: "6.2억원",
            jeonsePrice: "5.6억원",
          },
        ],
      },
      saleInfo: [
        {
          id: 1,
          floor: "1동 6층",
          space: "110m²(33평)",
          direction: "냠향",
          date: "23.01.02",
          kind: "매매",
          price: 6.5,
        },
        {
          id: 2,
          floor: "104동 2층",
          space: "110m²(33평)",
          direction: "냠향",
          date: "23.01.02",
          kind: "매매",
          price: 6.5,
        },
      ],
      basicInfo: {
        adress: "서울특별시 서초구 반포1동 728-7",
        createDate: "2004년 6월",
        households: "18세대 (총1개동)",
        ablePark: "1.38세대",
        heat: "개별난방, 도시가스",
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
