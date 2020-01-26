import { User } from './user';

export interface UserRepository {
  getAll(): Promise<User[]>;
  add(firstName: string, lastName: string, age: number): Promise<User>;
}
