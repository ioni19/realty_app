import React from "react";
import styled from "styled-components/native";
import {mainColor} from "../../theme/theme";
import {StyledContainer, SectionTitle} from "../../screens/Detail";

const ItemScore = () => {
  return (
    <StyledContainer>
      <SectionTitle>투자 항목 점수</SectionTitle>
      <Container>
        <ScoreText name='전세가율' unit='%' price='68.5' percent='42' />
        <ScoreText name='갭가격' unit='원' price='1.3억' percent='51' />
        <ScoreText name='시가총액' unit='원' price='1830.9억' percent='39' />
        <ScoreText name='평당매매가' unit='원' price='1.1천만' percent='67' />
      </Container>
    </StyledContainer>
  );
};

const ScoreText = ({name, unit, price, percent}) => {
  return (
    <TextBox>
      <MdText name>{name}</MdText>
      <Row>
        <MdText color='rgba(0,0,0,0.7)'>
          {price}
          {unit}
        </MdText>
        <VerticalLine />
        <MdText color={mainColor}>상위 {percent}%</MdText>
      </Row>
    </TextBox>
  );
};

const Container = styled.View`
  padding: 30px 15px 0;
`;

const TextBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MdText = styled.Text`
  font-size: ${props => (props.name ? "15px" : "16px")};
  font-weight: ${props => (props.name ? "400" : "600")};
  color: ${props => (props.name ? "rgba(0,0,0,0.6)" : props.color)};
`;

const VerticalLine = styled.Text`
  margin: 0 5px;
  width: 2px;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default ItemScore;
