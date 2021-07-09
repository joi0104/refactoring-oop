import React from 'react';

const mockChatList = [
    {
        type: 'self',
        title: '최진영',
        createdAt: '2021-07-10',
        updatedAt: '2021-07-10',
        members: ['joi0104'],
        lastComment: '진영아 듣고있니?'
    },
    {
        type: 'oneToOne',
        title: '강지훈',
        createdAt: '2021-07-10',
        updatedAt: '2021-07-10',
        members: ['joi0104', 'kangji'],
        lastComment: '앤티크 유니버스!'
    },
    {
        type: 'group',
        title: '강지훈, 김용래',
        createdAt: '2021-07-10',
        updatedAt: '2021-07-10',
        members: ['joi0104', 'kangji', 'usage'],
        lastComment: '졸업하고 싶다'
    },
    ,
    {
        type: 'open',
        title: '오픈채팅방입니다',
        createdAt: '2021-07-10',
        updatedAt: '2021-07-10',
        members: ['joi0104', 'kangji', 'usage'],
        lastComment: '룰루랄라'
    }
]

const ChatList = () => {
    return <div>ChatList</div>;
}

export default ChatList;