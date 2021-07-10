import React from "react";
import styled from "styled-components";
import TalkItem from "../components/TalkItem";
import { mockProfileImgUrl } from "../constants/mock";

const ChatDetail = () => {
  return (
    <ChatDetailDiv>
      <ChatHeader>
        <ChatImg>
          <img src={mockProfileImgUrl} alt="chat-img" />
        </ChatImg>
        <ChatHeaderContent>
          <span>채팅방 이름</span>
          <span>n 명</span>
        </ChatHeaderContent>
      </ChatHeader>
      <ChatBody>
        <TalkList>
          <TalkItem />
          <TalkItem />
          <TalkItem />
        </TalkList>
      </ChatBody>
      <ChatFooter>
        <textarea />
        <button type="submit">전송</button>
      </ChatFooter>
    </ChatDetailDiv>
  );
};

const ChatDetailDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const ChatImg = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  margin: 0;
  &.many {
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ChatHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatBody = styled.div`
  width: 100%;
  flex: 1;
`;

const TalkList = styled.div`
  padding: 10px;
  overflow: auto;
  .talk + .talk {
    margin-top: 10px;
  }
`;

const ChatFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  textarea {
    flex: 1;
  }

  button {
    width: 50px;
    height: 100%;
  }
`;
export default ChatDetail;
