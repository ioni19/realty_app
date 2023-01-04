import React from "react";
import styled from "styled-components/native";
import {StyledContainer, SectionTitle} from "../../screens/Detail";

const BasicInfo = ({data}) => {
  console.log(data);
  return (
    <StyledContainer>
      <SectionTitle>단지 기본정보</SectionTitle>
      <Container>
        <TextBox name='주소' content={data.adress} />
        <TextBox name='준공년월' content={data.createDate} />
        <TextBox name='세대수' content={data.ablePark} />
        <TextBox name='주차가능수' content={data.households} />
        <TextBox name='난방' content={data.heat} />
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
