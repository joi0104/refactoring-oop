export const mockProfileImgUrl =
  "https://lh3.googleusercontent.com/proxy/kCHnpFG5FXNijempsblpqqAhfhqvGHnBYBlRyC_5VUBFEX2qpuC0LHW90lCRFCXJUio-DWkfcC10ln57XLShPvUmJWcUANOSwfWjHIdMUTo7MynMVTOlQHhP";

export const mockChatList = [
  {
    type: "self",
    id: 1,
    title: "최진영",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "진영아 듣고있니?",
  },
  {
    type: "oneToOne",
    id: 2,
    title: "강지훈",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "kangji",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "앤티크 유니버스!",
  },
  {
    type: "group",
    id: 3,
    title: "강지훈, 김용래",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "kangji",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "usage",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "졸업하고 싶다",
  },
  {
    type: "open",
    id: 4,
    title: "오픈채팅방입니다",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "kangji",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "usage",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "genie",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "snustcice",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "kwoo",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    lastComment: "룰루랄라",
  },
];

export const mockChatDetailList = [
  {
    type: "self",
    id: 1,
    title: "최진영",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    talks: [
      {
        writer: {
          name: "joi",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "메모장1",
      },
      {
        writer: {
          name: "joi",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "메모장2",
      },
    ],
  },
  {
    type: "oneToOne",
    id: 2,
    title: "강지훈",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "kangji",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    talks: [
      {
        writer: {
          name: "kangji",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "갓겜",
      },
      {
        writer: {
          name: "kangji",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "앤티크 유니버스!",
      },
    ],
  },
  {
    type: "group",
    id: 3,
    title: "강지훈, 김용래",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "kangji",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "usage",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    talks: [
      {
        writer: {
          name: "kangji",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "졸업하고 싶다",
      },
      {
        writer: {
          name: "usage",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "졸업하고 싶다",
      },
      {
        writer: {
          name: "joi",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "졸업하고 싶다",
      },
    ],
  },
  {
    type: "open",
    id: 4,
    title: "오픈채팅방입니다",
    createdAt: "2021-07-10",
    updatedAt: "2021-07-10",
    members: [
      {
        name: "joi",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "kangji",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "usage",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "genie",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "snustcice",
        profileImgUrl: mockProfileImgUrl,
      },
      {
        name: "kwoo",
        profileImgUrl: mockProfileImgUrl,
      },
    ],
    talks: [
      {
        writer: {
          name: "genie",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "오늘은 6장까지!",
      },
      {
        writer: {
          name: "kangji",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "넵!",
      },
      {
        writer: {
          name: "snustcice",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "넵!",
      },
      {
        writer: {
          name: "joi",
          profileImgUrl: mockProfileImgUrl,
        },
        comment: "넵!",
      },
    ],
  },
];
