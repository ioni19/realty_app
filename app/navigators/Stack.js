import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import Search from "../screens/Search";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Contact from "../screens/Contact";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="상세정보"
      component={Detail}
      options={{
        headerShown: false,
      }}
    />
  </NativeStack.Navigator>
);

export default Stack;
