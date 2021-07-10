import React from "react";
import ChatItem from "../components/ChatItem";
import { mockChatList } from "../constants/mock";

const ChatList = () => {
  return (
    <div>
      {mockChatList.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
