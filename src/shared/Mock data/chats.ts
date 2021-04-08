import {Chat} from "../chat";

export const Chats:Chat[]=[
  {
    id:0,
    user1: "geekgod",
    user1Id: 0,
    user2: "chandler",
    user2Id: 1,
    conversation:[
      {
        sender:"geekgod",
        senderId:0,
        receiver:"chandler",
        receiverId:1,
        body:"hello chandler",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"chandler",
        senderId:1,
        receiver:"geekgod",
        receiverId:0,
        body:"hey geekgod",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"chandler",
        senderId:1,
        receiver:"geekgod",
        receiverId:0,
        body:"Here's an example of creating and subscribing to a simple observable, with an observer that logs the received message to the console:",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"geekgod",
        senderId:0,
        receiver:"chandler",
        receiverId:1,
        body:"Use the Observable constructor to create an observable stream of any type. The constructor takes as its argument the subscriber function to run when the observable’s subscribe() method executes. A subscriber function receives an Observer object, and can publish values to the observer's next() method.",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"geekgod",
        senderId:0,
        receiver:"chandler",
        receiverId:1,
        body:"hello chandler",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"chandler",
        senderId:1,
        receiver:"geekgod",
        receiverId:0,
        body:"hey geekgod",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"chandler",
        senderId:1,
        receiver:"geekgod",
        receiverId:0,
        body:"Here's an example of creating and subscribing to a simple observable, with an observer that logs the received message to the console:",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"geekgod",
        senderId:0,
        receiver:"chandler",
        receiverId:1,
        body:"Use the Observable constructor to create an observable stream of any type. The constructor takes as its argument the subscriber function to run when the observable’s subscribe() method executes. A subscriber function receives an Observer object, and can publish values to the observer's next() method.",
        meta:{
          date:1,
          seen:true
        }
      }
    ],
  },
  {
    id:1,
    user1: "geekgod",
    user1Id: 0,
    user2: "stillsingle",
    user2Id: 2,
    conversation:[
      {
        sender:"geekgod",
        senderId:0,
        receiver:"stillsingle",
        receiverId:2,
        body:"hello stillsingle",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"stillsingle",
        senderId:2,
        receiver:"geekgod",
        receiverId:0,
        body:"hey geekgod",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"geekgod",
        senderId:0,
        receiver:"stillsingle",
        receiverId:2,
        body:"instance begins publishing values only when someone subscribes to it. You subscribe by calling the subscribe() method of the instance, ",
        meta:{
          date:1,
          seen:true
        }
      }
    ],
  },
  {
    id:2,
    user1: "chandler",
    user1Id: 1,
    user2: "kamdev",
    user2Id: 3,
    conversation:[
      {
        sender:"kamdev",
        senderId:3,
        receiver:"chandler",
        receiverId:1,
        body:"hello chandler",
        meta:{
          date:1,
          seen:true
        }
      },{
        sender:"chandler",
        senderId:1,
        receiver:"geekgod",
        receiverId:3,
        body:"hey kamdev",
        meta:{
          date:1,
          seen:true
        }
      }
    ],
  }
];
