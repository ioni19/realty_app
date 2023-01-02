import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {mainColor} from '../../theme/theme';
import reportData from '../../mockData/reportData';
import {ScrollView, View} from 'react-native';
import {SCREEN_WIDTH} from '../../theme/theme';
import {SectionTitle, HLine} from '../../screens/Detail';

const gap = 10;
const offset = 10;
const pageWidth = SCREEN_WIDTH - (gap + offset) * 2;

const Report = () => {
  const navaigation = useNavigation();

  return (
    <>
      <Container>
        <SectionTitle>레포트로 보는 단지</SectionTitle>
        <Box>
          <Description>
            해당 단지의 지역에 대해 부동부동이 준비한 분석을
          </Description>
          <Description>
            <Highlight>부동부동 레포트로</Highlight> 만나보세요!
          </Description>
        </Box>
      </Container>
      <HScrollList
        data={reportData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ReportCard data={item} />}></HScrollList>
      <HLine />
      <MoreBtn onPress={() => navaigation.navigate('Tabs', {screen: '레포트'})}>
        <MoreText>더 많은 컨텐츠 보러가기</MoreText>
      </MoreBtn>
    </>
  );
};

const ReportCard = ({data}) => {
  const {subTitleOne, subTitleTwo, BgImage, date} = data;
  return (
    <Card>
      <BgImg source={{uri: BgImage}} />
      <OverLay>
        <TextBox>
          <MainTitle>주간 레포트</MainTitle>
          <BottomLine />
          <SubTitle>{subTitleOne}</SubTitle>
          <SubTitle>{subTitleTwo}</SubTitle>
        </TextBox>
      </OverLay>
    </Card>
  );
};

const Container = styled.View`
  width: 90%;
  margin: 35px auto 0;
`;

const Box = styled.View`
  margin-top: 20px;
`;

const Description = styled.Text`
  font-size: 15px;
  font-weight: 300;
`;

const Highlight = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${mainColor};
`;

const HScrollList = styled.FlatList.attrs({
  pagingEnabled: true,
  horizontal: true,
  bounces: false,
  decelerationRate: 'fast',
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: offset + gap / 2},
  snapToInterval: pageWidth + gap,
})`
  margin: 20px 0 30px;
`;

const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${pageWidth + gap}px;
  border-radius: 20px;
`;

const BgImg = styled.Image`
  margin: ${gap / 2}px;

  height: 270px;
  border-radius: 20px;
`;

const OverLay = styled.View`
  margin: ${gap / 2}px;
  position: absolute;
  width: ${pageWidth}px;
  height: 270px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const TextBox = styled.View`
  margin: auto;
`;

const MainTitle = styled.Text`
  text-align: center;
  color: white;
  font-weight: 900;
  font-size: 34px;
`;

const BottomLine = styled.View`
  margin: 8px auto;
  height: 2px;
  width: 175px;
  background-color: white;
`;

const SubTitle = styled(MainTitle)`
  font-weight: 500;
  font-size: 22px;
`;

const MoreBtn = styled.TouchableOpacity.attrs({activeOpacity: 1})`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
`;

const MoreText = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

export default Report;
