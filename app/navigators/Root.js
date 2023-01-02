import React, {useEffect, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stack from "./Stack";
import Tabs from "./Tabs";
import Login from "../screens/Login";
import {useNavigation} from "@react-navigation/native";
import Contact from "../screens/Contact";

const Root = () => {
  const Nav = createNativeStackNavigator();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      await AsyncStorage.getItem("accessToken").then(
        jsonValue => jsonValue !== null && navigation.navigate("Tabs"),
      );
    })();
  }, []);

  return (
    <Nav.Navigator options={{headerShown: true}}>
      <Nav.Screen
        name="로그인"
        component={Login}
        options={{headerShown: false}}
      />
      <Nav.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Nav.Screen
        name="Stack"
        component={Stack}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "black",
          title: "상세정보",
        }}
      />
    </Nav.Navigator>
  );
};

export default Root;
