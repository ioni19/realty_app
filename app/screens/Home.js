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
    .doc("순위40")
    .set({
      id: 40,
      ranking: {
        myName: "더퍼스트관희 1차",
        myRank: 40,
        prevName: "이온빌",
        nextName: "",
      },
      itemScore: {
        jeonsePercent: [81.6, 0],
        gapPrice: ["57억", 0],
        totalPrice: ["10조", 0],
        flatPrice: ["283억만", 0],
      },
      priceInfo: {
        widthType: [
          {
            id: 1,
            households: 192,
            type: 32,
            supplyArea: 40,
            dedicatedArea: 28,
            sellingPrice: "265억원",
            jeonsePrice: "190억원",
          },
          {
            id: 2,
            households: 192,
            type: 35,
            supplyArea: 31,
            dedicatedArea: 32,
            sellingPrice: "345억원",
            jeonsePrice: "145억원",
          },
          // {
          //   id: 3,
          //   households: 192,
          //   type: 73,
          //   supplyArea: 50,
          //   dedicatedArea: 32,
          //   sellingPrice: "25.3억원",
          //   jeonsePrice: "16.5억원",
          // },
          // {
          //   id: 4,
          //   households: 192,
          //   type: 74,
          //   supplyArea: 50,
          //   dedicatedArea: 32,
          //   sellingPrice: "22억원",
          //   jeonsePrice: "21.3억원",
          // }
        ],
      },
      saleInfo: [
        {
          id: 1,
          floor: "1동 6층",
          space: "110m²(33평)",
          date: "22.12.31",
          kind: "전세",
          price: 22,
        },
        {
          id: 2,
          floor: "1동 6층",
          space: "110m²(33평)",
          date: "22.12.27",
          kind: "매매",
          price: 23,
        },
        {
          id: 3,
          floor: "2동 25층",
          space: "110m²(33평)",
          date: "22.12.27",
          kind: "전세",
          price: 17.9,
        },
        {
          id: 4,
          floor: "2동 23층",
          space: "110m²(33평)",
          date: "22.12.27",
          kind: "전세",
          price: 17.9,
        },
        {
          id: 5,
          floor: "5동 19층",
          space: "110m²(33평)",
          date: "22.12.22",
          kind: "매매",
          price: 34.5,
        },
      ],
      basicInfo: {
        adress: "부산광역시 진구 112-15",
        createDate: "1995년 3월",
        households: "63세대 (총12개동)",
        ablePark: "1.91세대",
        heat: "지역난방, 도시가스",
      },
    });
};

// test.forEach(item => console.log(item));
const cardAddInfo = () => {
  db.collection("card").add({
    id: 40,
    name: "더퍼스트관희 1차",
    rank: 40,
    info: {
      space: "110m²(32평)",
      prediction: 16,
      sellingPrice: 26.3,
      jeonsePrice: 16,
      graphImg: "",
      realImg: "",
    },
  });
};

const Home = () => {
  useEffect(() => {
    getRank();
  }, []);
  const onSubmit = () => {
    cardAddInfo();
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
