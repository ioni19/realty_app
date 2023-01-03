import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import {StyleSheet} from "react-native";
import {bgColor} from "../../theme/theme";

const TextToggle = ({data, setPick}) => {
  const [pickValue, setPickValue] = useState(data.text[0]);
  const handlePickChange = text => {
    setPickValue(text);
    setPick(pickValue);
  };
  return (
    <Container>
      {data.text.map((text, idx) => (
        <ToggleBtn
          key={idx}
          onPress={() => handlePickChange(text)}
          pick={pickValue === text}
          style={pickValue === text && styles.shadow}
          height={data.height}
          activeOpacity={1}>
          <BtnText pick={pickValue === text} fontSize={data.fontSize}>
            {text}
          </BtnText>
        </ToggleBtn>
      ))}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${bgColor};
  flex-direction: row;
  margin: 30px 0;
  padding: 4px;
  width: 100%;
  border-radius: 50px;
`;

const ToggleBtn = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
  height: ${props => props.height}px;
  background-color: ${({pick}) => (pick ? "white" : bgColor)};
  border-radius: 50px;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 1,
  },
});

const BtnText = styled.Text`
  text-align: center;
  font-size: ${props => props.fontSize}px;
  font-weight: ${({pick}) => (pick ? "600" : "400")};
  color: ${({pick}) => (pick ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.5)")};
`;

export default TextToggle;
