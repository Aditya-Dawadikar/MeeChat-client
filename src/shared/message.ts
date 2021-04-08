export interface Message{
  sender:string;
  senderId:number;
  receiver:string;
  receiverId:number;
  body:string;
  meta:{
    date:number;
    seen:boolean;
  }
}
