import React from "react";
import styled from "styled-components/native";
import {StyledContainer, SectionTitle} from "../../screens/Detail";

const BasicInfo = () => {
  return (
    <StyledContainer>
      <SectionTitle>단지 기본정보</SectionTitle>
      <Container>
        <TextBox name='주소' content='경기도 오산시 대원동 901' />
        <TextBox name='준공년월' content='2009년 7월' />
        <TextBox name='세대수' content='433세대 (총6개동)' />
        <TextBox name='주차가능수' content='1.45세대' />
        <TextBox name='난방' content='지역난방, 열병합' />
      </Container>
    </StyledContainer>
  );
};

const TextBox = ({name, content}) => {
  return (
    <FlexRow>
      <SmallText name>{name}</SmallText>
      <SmallText>{content}</SmallText>
    </FlexRow>
  );
};

const Container = styled.View`
  padding: 30px 15px 0;
`;

const FlexRow = styled.View`
  flex-direction: row;
  margin-top: 25px;
`;

const SmallText = styled.Text`
  width: ${props => (props.name ? "30%" : "70%")};
  color: ${props => (props.name ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)")};
`;

export default BasicInfo;
