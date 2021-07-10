import React from "react";
import styled from "styled-components";
import { mockProfileImgUrl } from "../constants/mock";

const TalkItem = () => {
  return (
    <TalkItemDiv>
      <TalkProfile>
        <img src={mockProfileImgUrl} alt="profile-img" />
        <span> 00님 </span>
      </TalkProfile>
      <TalkContent>안녕하세요오오</TalkContent>
    </TalkItemDiv>
  );
};

const TalkItemDiv = styled.div`
  width: 100%;
  padding: 10px;
`;

const TalkProfile = styled.div`
  display: flex;
  flex: row;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
  }
`;

const TalkContent = styled.div`
  max-width: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  line-height: 20px;
`;

export default TalkItem;
