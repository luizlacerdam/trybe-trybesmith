export interface NewUser {
  username: string;
  vocation: string;
  level: number;
  password?: string;
}

export interface IUser extends NewUser {
  id: number;
}