import { Message } from "./message";

export interface Chat{
  id:number;
  user1: string;
  user1Id: number;
  user2: String;
  user2Id: number;
  conversation:Message[];
}
