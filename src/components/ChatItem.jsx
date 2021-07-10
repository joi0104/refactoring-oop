import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { mockUserList } from "../constants/mock";

const ChatItem = ({ chat }) => {
  const { type, chatId, title, updatedAt, lastComment, members } = chat;
  const history = useHistory();

  const goChatDetail = () => {
    history.push(`/${chatId}`);
  };

  const renderChat = () => {
    if (type === "self") {
      return (
        <ChatDiv onClick={goChatDetail}>
          <ChatImg>
            <img src={members[0].profileImgUrl} alt="self_chat_img" />
          </ChatImg>
          <ChatContent>
            <ChatTitle>
              <span className="label">나</span>
              <span className="title">{title}</span>
              <span className="updated-date">{updatedAt}</span>
            </ChatTitle>
            <ChatDesc>{lastComment}</ChatDesc>
          </ChatContent>
        </ChatDiv>
      );
    } else if (type === "oneToOne") {
      return (
        <ChatDiv onClick={goChatDetail}>
          <ChatImg>
            <img src={members[0].profileImgUrl} alt="one_to_one_chat_img" />
          </ChatImg>
          <ChatContent>
            <ChatTitle>
              <span className="title">{title}</span>
              <span className="updated-date">{updatedAt}</span>
            </ChatTitle>
            <ChatDesc>{lastComment}</ChatDesc>
          </ChatContent>
        </ChatDiv>
      );
    } else if (type === "group") {
      return (
        <ChatDiv onClick={goChatDetail}>
          <ChatImg className="many">
            {members.slice(0, 4).map((member) => (
              <img src={member.profileImgUrl} alt="group_chat_img" />
            ))}
          </ChatImg>
          <ChatContent>
            <ChatTitle>
              <span className="title">{title}</span>
              <span className="updated-date">{updatedAt}</span>
            </ChatTitle>
            <ChatDesc>{lastComment}</ChatDesc>
          </ChatContent>
        </ChatDiv>
      );
    } else if (type === "open") {
      return (
        <ChatDiv onClick={goChatDetail}>
          <ChatImg className="many">
            {members.slice(0, 4).map((member) => (
              <img src={member.profileImgUrl} alt="open_chat_img" />
            ))}
          </ChatImg>
          <ChatContent>
            <ChatTitle>
              <span className="label">오픈</span>
              <span className="title">{title}</span>
              <span className="updated-date">{updatedAt}</span>
            </ChatTitle>
            <ChatDesc>{lastComment}</ChatDesc>
          </ChatContent>
        </ChatDiv>
      );
    }
  };

  return <>{renderChat()}</>;
};

const ChatDiv = styled.div`
  width: 400px;
  height: 100px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & + & {
    margin-top: 20px;
  }
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

const ChatContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ChatTitle = styled.div`
  display: flex;
  flex-direction: row;
  .label {
    color: red;
    margin-right: 10px;
  }

  .updated-date {
    margin: 0 0 0 auto;
  }
`;

const ChatDesc = styled.div`
  overflow: hidden;
`;

export default ChatItem;
