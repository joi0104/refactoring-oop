import React from "react";
import styled from "styled-components";

const mockProfileImgUrl =
  "https://lh3.googleusercontent.com/proxy/kCHnpFG5FXNijempsblpqqAhfhqvGHnBYBlRyC_5VUBFEX2qpuC0LHW90lCRFCXJUio-DWkfcC10ln57XLShPvUmJWcUANOSwfWjHIdMUTo7MynMVTOlQHhP";

const mockChatList = [
  {
    type: "self",
    title: "최진영",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104"],
    lastComment: "진영아 듣고있니?",
    membersProfileImgUrl: [mockProfileImgUrl],
  },
  {
    type: "oneToOne",
    title: "강지훈",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104", "kangji"],
    lastComment: "앤티크 유니버스!",
    membersProfileImgUrl: [mockProfileImgUrl, mockProfileImgUrl],
  },
  {
    type: "group",
    title: "강지훈, 김용래",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104", "kangji", "usage"],
    lastComment: "졸업하고 싶다",
    membersProfileImgUrl: [
      mockProfileImgUrl,
      mockProfileImgUrl,
      mockProfileImgUrl,
    ],
  },
  {
    type: "open",
    title: "오픈채팅방입니다",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104", "kangji", "usage"],
    lastComment: "룰루랄라",
    membersProfileImgUrl: [
      mockProfileImgUrl,
      mockProfileImgUrl,
      mockProfileImgUrl,
    ],
  },
];

const ChatList = () => {
  const renderThumbnail = (chat) => {
    const { type, title, updatedAt, lastComment, membersProfileImgUrl } = chat;
    if (type === "self") {
      return (
        <ChatDiv>
          <ChatImg>
            <img src={membersProfileImgUrl[0]} alt="self-thumbnail-img" />
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
        <ChatDiv>
          <ChatImg>
            <img src={membersProfileImgUrl[0]} alt="one_to_one_thumbnail_img" />
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
        <ChatDiv>
          <ChatImg className="many">
            {membersProfileImgUrl.slice(0, 3).map((imgUrl) => (
              <img src={imgUrl} alt="group_thumbnail_img" />
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
        <ChatDiv>
          <ChatImg className="many">
            {membersProfileImgUrl.slice(0, 3).map((imgUrl) => (
              <img src={imgUrl} alt="open_thumbnail_img" />
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

  return <div>{mockChatList.map((mockChat) => renderThumbnail(mockChat))}</div>;
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

export default ChatList;
