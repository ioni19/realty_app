import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Ranking = () => {
  return (
    <Container>
      <RankContainer>
        <Text></Text>
        <View></View>
        <Text></Text>
      </RankContainer>
      <NameContainer></NameContainer>
      {/* <FontAwesome name="align-left"></FontAwesome> */}
    </Container>
  );
};

const Container = styled.View`
  height: 110px;
  background-color: black;
`;

const RankContainer = styled.View``;

const NameContainer = styled.View``;

export default Ranking;
