import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import TextToggle from './TextToggle';

const kind = {text: ['매매', '전/월세'], fontSize: 17, height: 50};
const period = {
  text: ['최근 3년', '최근 5년', '전체'],
  fontSize: 12,
  height: 30,
};

const PriceInfo = () => {
  return (
    <>
      <TextToggle data={kind} />
      <TextToggle data={period} />
    </>
  );
};

export default PriceInfo;
