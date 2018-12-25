import { IUserEntity, UserDao } from '../database/entities/user';
import { IUser } from '../../domain/users/user';

// DATA LAYER
// UserRepository:
// is used to provide an abstraction on top of the database ( and possible other data sources)
// so other parts of the application are decoupled from the specific database implementation.
// Furthermore it can hide the origin of the data from it's consumers.
// It is possible to fetch the entities from different sources like inmemory cache,
// network or the db without the need to alter the consumers code.

export class UserRepository {
  async getAll(): Promise<IUser[]> {
    const users: IUserEntity[] = await UserDao.find();
    return users.map((userEntity: IUserEntity) => userEntity.toUser());
  }

  async add(firstName: string, lastName: string, age: number): Promise<IUser> {
    let userModel = new UserDao({ firstName, lastName, age });
    userModel = await userModel.save();
    return userModel.toUser();
  }
}
