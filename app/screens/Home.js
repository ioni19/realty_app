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
    .doc("상품29")
    .set({
      id: 29,
      ranking: {
        myName: "미소지움",
        myRank: 29,
        prevName: "우경싸이트빌",
        nextName: "갈곶피오레",
      },
      itemScore: {
        jeonsePercent: [58.4, 69],
        gapPrice: ["1.5억", 44],
        totalPrice: ["703.7억", 56],
        flatPrice: ["1.4천만", 42],
      },
      priceInfo: {
        widthType: [
          {
            id: 1,
            households: 192,
            type: 26,
            supplyArea: 40,
            dedicatedArea: 28,
            sellingPrice: "3.7억원",
            jeonsePrice: "2.2억원",
          },
        ],
      },
      saleInfo: null,
      basicInfo: {
        adress: "경기도 오산시 대원동 906",
        createDate: "2017년 07월",
        households: "192세대 (총3개동)",
        ablePark: "1.08세대",
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
