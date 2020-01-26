import { UserEntity, UserDao } from '../database/entities/user';
import { User } from '../../domain/users/user';
import { UserRepository } from '../../domain/users/userRepository';

// DATA LAYER
// UserRepository:
// is used to provide an abstraction on top of the database ( and possible other data sources)
// so other parts of the application are decoupled from the specific database implementation.
// Furthermore it can hide the origin of the data from it's consumers.
// It is possible to fetch the entities from different sources like inmemory cache,
// network or the db without the need to alter the consumers code.

export function createUserRepository(): UserRepository {
  async function getAll(): Promise<User[]> {
    const users: UserEntity[] = await UserDao.find();
    return users.map((userEntity: UserEntity) => userEntity.toUser());
  }

  async function add(
    firstName: string,
    lastName: string,
    age: number,
  ): Promise<User> {
    let userModel = new UserDao({ firstName, lastName, age });
    userModel = await userModel.save();
    return userModel.toUser();
  }

  return {
    getAll,
    add,
  };
}
