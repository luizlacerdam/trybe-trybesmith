export interface LoginUser {
  username: string;
  password?: string;
} 

export interface NewUser extends LoginUser{
  vocation: string;
  level: number;
}

export interface IUser extends NewUser {
  id: number;
}
