import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Detail from "../screens/Detail";

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
