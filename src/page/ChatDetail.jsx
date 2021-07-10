import React from "react";
import styled from "styled-components";
import TalkItem from "../components/TalkItem";
import { mockChatList, mockTalkList } from "../constants/mock";
import { useParams } from "react-router-dom";

const ChatDetail = () => {
  const { id } = useParams();
  const { talks } = mockTalkList.find((talk) => talk.chatId === +id);
  const { title, type, members } = mockChatList.find(
    (chat) => chat.chatId === +id
  );

  const renderChatImg = () => {
    if (type === "self" || type === "oneToOne") {
      return (
        <ChatImg>
          <img src={members[0].profileImgUrl} alt="profile-img" />
        </ChatImg>
      );
    } else if (type === "group" || type === "open") {
      return (
        <ChatImg className="many">
          {members.map((member) => (
            <img src={member.profileImgUrl} alt="profile-img" />
          ))}
        </ChatImg>
      );
    }
  };

  return (
    <ChatDetailDiv>
      <ChatHeader>
        <ChatImg>{renderChatImg()}</ChatImg>
        <ChatHeaderContent>
          <span>{title}</span>
          <span>{members.length} 명</span>
        </ChatHeaderContent>
      </ChatHeader>
      <ChatBody>
        <TalkList>
          {talks.map((talk) => (
            <TalkItem talk={talk} />
          ))}
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
