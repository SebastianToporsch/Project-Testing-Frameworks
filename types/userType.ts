export interface BasicUser {
  id:number;
}

export interface User extends BasicUser{
  username:string;
  age:number;
}