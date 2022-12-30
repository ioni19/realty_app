import React, {useState} from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {bgColor} from '../../theme/theme';

const toggle = {text: ['매매', '전/월세'], fontSize: 17, height: 50};

const TextToggle = () => {
  const [pickValue, setPickValue] = useState('매매');

  return (
    <Container>
      {toggle.text.map(text => (
        <ToggleBtn
          onPress={() => setPickValue(text)}
          pick={pickValue === text ? true : false}
          style={pickValue === text && styles.shadow}
          activeOpacity={1}>
          <BtnText pick={pickValue === text ? true : false}>{text}</BtnText>
        </ToggleBtn>
      ))}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${bgColor};
  flex-direction: row;
  padding: 4px;
  height: ${toggle.height}px;
  width: 100%;
  border-radius: 50px;
`;

const ToggleBtn = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
  background-color: ${({pick}) => (pick ? 'white' : bgColor)};
  border-radius: 50px;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
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
  font-size: ${toggle.fontSize}px;
  font-weight: ${({pick}) => (pick ? '600' : '400')};
  color: ${({pick}) => (pick ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)')};
`;

export default TextToggle;
