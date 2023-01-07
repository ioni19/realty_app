import React from 'react';
import styled from 'styled-components/native';
import Plotly from 'react-native-plotly';
import {View, Text} from 'react-native';

const data = [
  // 차트에 들어갈 data를 먼저 지정해주고!
  {
    type: 'scatterpolar', // chart type
    r: [39, 28, 8, 7, 25, 39], // data
    theta: ['편의성', '수익', '교통', '주거', '교육'], // data category
    fill: 'toself', // fill option
    name: 'Group A', // data group name
  },
];

const layout = {
  height: 400, // 원하는 크기로 height를 지정해주었다!
  margin: {
    // chart에는 기본값으로 margin이 적용되어 있는데, 우리가 흔히 아는 top, bottom, left와는 좀 다르다. 0으로 모두 초기화 해주었다.
    l: 0,
    r: 0,
    t: 50,
    d: 0,
  },
  polar: {
    radialaxis: {
      // 방사축 꾸미기 시작!
      visible: true,
      range: [0, 200],
      color: 'rgba(0, 0, 0, 0.8)', // 방사축의 선 색깔
      showticklabels: false, // @1-1
      showline: false, // @1-2
      ticklen: 0, // @1-3
    },
    angularaxis: {
      // 각축 꾸미기 시작!
      rotation: 18, // 차트 회전율! (KDA가 제일 위로 올 수 있도록 돌려주었당)
      color: '#eee', // 각축의 선 색깔
      ticklen: 13,
      tickcolor: 'white',
      tickfont: {
        // @2-2
        color: '#888',
        size: 13,
      },
    },
    gridshape: 'linear', // @3
  },
  showlegend: false, // @4
};

const RadarChart = () => {
  return (
    <View style={{height: 340}}>
      <Plotly data={data} layout={layout} debug enableFullPlotly />
      <Text></Text>
    </View>
  );
};

export default RadarChart;
