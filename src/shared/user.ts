import {Friend} from './friend';

export interface User{
  id:number;
  userName:string;
  avatar:string;
  friends:Friend[];
  blocked:Friend[];
  requests:{
    sent:User[],
    received:User[]
  };
}
