import {User} from "../user";

export const users:User[]=[
  {
    id:0,
    userName:"geekgod",
    avatar:"#",
    friends:[
      {
        friendName:"chandler",
        userId:1,
        chatId:0,
      },
      {
        friendName:"stillsingle",
        userId:2,
        chatId:1,
      }
    ],
    blocked:[
      {
        friendName:"abc",
        userId:11,
        chatId:0,
      },
      {
        friendName:"def",
        userId:12,
        chatId:0,
      }
    ],
    requests:{
      sent:[],
      received:[
        {
          id:13,
          userName:"test user 1",
          avatar:"#",
          friends:[],
          blocked:[],
          requests:{
            sent:[],
            received:[]
          }
        },
        {
          id:15,
          userName:"test user 3",
          avatar:"#",
          friends:[],
          blocked:[],
          requests:{
            sent:[],
            received:[]
          }
        }
      ]
    }
  },
  {
    id:1,
    userName:"chandler",
    avatar:"#",
    friends:[
      {
        friendName:"geekgod",
        userId:0,
        chatId:0,
      },
      {
        friendName:"kamdev",
        userId:3,
        chatId:2,
      }
    ],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },
  {
    id:2,
    userName:"stillsingle",
    avatar:"#",
    friends:[
      {
        friendName:"geekgod",
        userId:0,
        chatId:1,
      }
    ],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },
  {
    id:3,
    userName:"kamdev",
    avatar:"#",
    friends:[
      {
        friendName:"chandler",
        userId:1,
        chatId:2,
      }
    ],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:11,
    userName:"abc",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:12,
    userName:"def",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:13,
    userName:"test user 1",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:14,
    userName:"test user 2",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:15,
    userName:"test user 3",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:16,
    userName:"test user 4",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },{
    id:17,
    userName:"test user 5",
    avatar:"#",
    friends:[],
    blocked:[],
    requests:{
      sent:[],
      received:[]
    }
  },
]
