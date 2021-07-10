export const mockProfileImgUrl =
  "https://lh3.googleusercontent.com/proxy/kCHnpFG5FXNijempsblpqqAhfhqvGHnBYBlRyC_5VUBFEX2qpuC0LHW90lCRFCXJUio-DWkfcC10ln57XLShPvUmJWcUANOSwfWjHIdMUTo7MynMVTOlQHhP";

export const mockChatList = [
  {
    chatId: 1,
    type: "self",
    title: "최진영",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        userId: 1001,
        name: "joi",
        nickname: "최진영",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "진영아 듣고있니?",
  },
  {
    chatId: 2,
    type: "oneToOne",
    title: "강지훈",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        userId: 1001,
        name: "joi",
        nickname: "최진영",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1005,
        name: "kangji",
        nickname: "강지훈",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "앤티크 유니버스!",
  },
  {
    chatId: 3,
    type: "group",
    title: "강지훈, 김용래",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        userId: 1001,
        name: "joi",
        nickname: "최진영",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1005,
        name: "kangji",
        nickname: "강지훈",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1006,
        name: "usage",
        nickname: "김용래",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "졸업하고 싶다",
  },
  {
    chatId: 4,
    type: "open",
    title: "오픈채팅방입니다",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        userId: 1001,
        name: "joi",
        nickname: "최진영",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1002,
        name: "kwoo",
        nickname: "김건우",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1003,
        name: "snustcice",
        nickname: "조규진",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1004,
        name: "genie",
        nickname: "윤지수",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1005,
        name: "kangji",
        nickname: "강지훈",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        userId: 1006,
        name: "usage",
        nickname: "김용래",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "넵!",
  },
];

export const mockTalkList = [
  {
    chatId: 1,
    talks: [
      {
        writer: {
          userId: 1001,
          name: "joi",
          nickname: "최진영",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "메모장1",
      },
      {
        writer: {
          userId: 1001,
          name: "joi",
          nickname: "최진영",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "메모장2",
      },
    ],
  },
  {
    chatId: 2,
    talks: [
      {
        writer: {
          userId: 1005,
          name: "kangji",
          nickname: "강지훈",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "갓겜",
      },
      {
        writer: {
          userId: 1005,
          name: "kangji",
          nickname: "강지훈",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "앤티크 유니버스!",
      },
    ],
  },
  {
    chatId: 3,
    talks: [
      {
        writer: {
          userId: 1005,
          name: "kangji",
          nickname: "강지훈",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "졸업하고 싶다",
      },
      {
        writer: {
          userId: 1006,
          name: "usage",
          nickname: "김용래",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "졸업하고 싶다",
      },
      {
        writer: {
          userId: 1001,
          name: "joi",
          nickname: "최진영",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "졸업하고 싶다",
      },
    ],
  },
  {
    chatId: 4,
    talks: [
      {
        writer: {
          userId: 1004,
          name: "genie",
          nickname: "윤지수",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "오늘은 6장까지!",
      },
      {
        writer: {
          userId: 1005,
          name: "kangji",
          nickname: "강지훈",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "넵!",
      },
      {
        writer: {
          userId: 1003,
          name: "snustcice",
          nickname: "조규진",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "넵!",
      },
      {
        writer: {
          userId: 1001,
          name: "joi",
          nickname: "최진영",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "넵!",
      },
    ],
  },
];
