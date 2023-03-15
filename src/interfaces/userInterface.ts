export interface Username {
  username: string;
}
export interface LoginUser extends Username {
  password?: string;
} 

export interface NewUser extends LoginUser{
  vocation: string;
  level: number;
}

export interface IUser extends NewUser {
  id: number;
}
