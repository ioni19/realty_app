import React, {useEffect, useRef} from "react";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
// import {View, Text, SafeAreaView} from "react-native";
import {View, Text, ScrollView, Button, SafeAreaView} from "react-native";
import {wrapScrollView, useScrollIntoView} from "react-native-scroll-into-view";

// const Home = () => {
//   useEffect(() => {
//     console.log(auth().currentUser);
//   }, []);
//   return (
//     <SafeView>
//       <View>
//         <Text></Text>
//       </View>
//     </SafeView>
//   );
// };

const CustomScrollView = wrapScrollView(ScrollView);

function MyScreen() {
  const scrollIntoView = useScrollIntoView();
  const viewRef = useRef();
  return (
    <CustomScrollView>
      <SafeAreaView>
        <Button
          onPress={() => scrollIntoView(viewRef.current)}
          title='Scroll a view ref into view'
        />
        <View style={{height: 100000}}>
          <Text>Some long ScrollView content</Text>
        </View>
        <View ref={viewRef}>
          <Text>Will be scrolled into view on button press</Text>
        </View>
      </SafeAreaView>
    </CustomScrollView>
  );
}

function MyScreenContent() {
  const scrollIntoView = useScrollIntoView();
  const viewRef = useRef();
  return (
    <SafeAreaView>
      <Button
        onPress={() => scrollIntoView(viewRef.current)}
        title='Scroll a view ref into view'
      />
      <View style={{height: 100000}}>
        <Text>Some long ScrollView content</Text>
      </View>
      <View ref={viewRef}>
        <Text>Will be scrolled into view on button press</Text>
      </View>
    </SafeAreaView>
  );
}

// const SafeView = styled.SafeAreaView`
//   background-color: white;
//   height: 10px;
// `;

// export default Home;

export default MyScreen;
