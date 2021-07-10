import React from "react";
import styled from "styled-components";

const TalkItem = ({ talk }) => {
  const { writer, comment } = talk;
  return (
    <TalkItemDiv>
      <TalkProfile>
        <img src={writer.profileImgUrl} alt="profile-img" />
        <span> {writer.name} </span>
      </TalkProfile>
      <TalkContent>{comment}</TalkContent>
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
