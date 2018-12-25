import { IUser } from './user';

export interface IUserRepository {
  getAll(): Promise<IUser[]>;
  add(firstName: string, lastName: string, age: number): Promise<IUser>;
}
