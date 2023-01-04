import React, {useEffect, useRef} from "react";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
import {View, Text, SafeAreaView, Button} from "react-native";
import firestore from "@react-native-firebase/firestore";

import {getCards} from "../lib/card";

const db = firestore();

// cardCollection.collection("product").add({
//   id: 1,
//   name: "오산원동힐스테이트",
//   rank: 38,
//   info: {
//     space: "118m²(36평)",
//     prediction: -10,
//     sellingPrice: 4.0,
//     jeonsePrice: 4.8,
//     graphImg: "",
//     realImg:
//       "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
// });




const Home = () => {

  const onSubmit = () => {
    getCards("id");
    // console.log();
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
