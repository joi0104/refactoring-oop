import React from "react";

const mockChatList = [
  {
    type: "self",
    title: "최진영",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104"],
    lastComment: "진영아 듣고있니?",
    membersProfileImgUrl: ["/joi0104.jpg"],
  },
  {
    type: "oneToOne",
    title: "강지훈",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104", "kangji"],
    lastComment: "앤티크 유니버스!",
    membersProfileImgUrl: ["/joi0104.jpg", "/kangji.jpg"],
  },
  {
    type: "group",
    title: "강지훈, 김용래",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104", "kangji", "usage"],
    lastComment: "졸업하고 싶다",
    membersProfileImgUrl: ["/joi0104.jpg", "/kangji.jpg", "/usage.jpg"],
  },
  {
    type: "open",
    title: "오픈채팅방입니다",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: ["joi0104", "kangji", "usage"],
    lastComment: "룰루랄라",
    membersProfileImgUrl: ["/joi0104.jpg", "/kangji.jpg", "/usage.jpg"],
  },
];

const ChatList = () => {
  const renderThumbnail = (chat) => {
    const { type, title, updatedAt, lastComment, membersProfileImgUrl } = chat;
    if (type === "self") {
      return (
        <div>
          <div>
            <img src={membersProfileImgUrl[0]} alt="self_thumbnail_img" />
            <span style={{ color: "red" }}>나</span>
            <span>{title}</span>
            <span style={{ margin: "0 0 auto auto" }}>{updatedAt}</span>
          </div>
          <div>{lastComment}</div>
        </div>
      );
    } else if (type === "oneToOne") {
      return (
        <div>
          <div>
            <img src={membersProfileImgUrl[0]} alt="one_to_one_thumbnail_img" />
            <span>{title}</span>
            <span style={{ margin: "0 0 auto auto" }}>{updatedAt}</span>
          </div>
          <div>{lastComment}</div>
        </div>
      );
    } else if (type === "group") {
      return (
        <div>
          <div>
            {membersProfileImgUrl.slice(0, 3).map((imgUrl) => (
              <img src={imgUrl} alt="group_thumbnail_img" />
            ))}
            <span>{title}</span>
            <span style={{ margin: "0 0 auto auto" }}>{updatedAt}</span>
          </div>
          <div>{lastComment}</div>
        </div>
      );
    } else if (type === "open") {
      return (
        <div>
          <div>
            {membersProfileImgUrl.slice(0, 3).map((imgUrl) => (
              <img src={imgUrl} alt="open_thumbnail_img" />
            ))}
            <span style={{ color: "red" }}>오픈</span>
            <span>{title}</span>
            <span style={{ margin: "0 0 auto auto" }}>{updatedAt}</span>
          </div>
          <div>{lastComment}</div>
        </div>
      );
    }
  };

  return <div>{mockChatList.map((mockChat) => renderThumbnail(mockChat))}</div>;
};

export default ChatList;
