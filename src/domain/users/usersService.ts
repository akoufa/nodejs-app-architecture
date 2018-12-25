import { IUser } from './user';
import { IUserRepository } from './userRepository';

// DOMAIN LAYER
// Has the userRepository as a dependency. The UserService does not know
// nor does it care where the user models came from. This is abstracted away
// by the implementation of the repositories. It just calls the needed repositories
// gets the results and usually applies some business logic on them.

export class UsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getAllUsers() {
    const users = await this.userRepository.getAll();
    return users;
  }

  async createUser(
    firstName: string,
    lastName: string,
    age: number,
  ): Promise<IUser> {
    // TODO: catch possible errors here and rethrow a custom error you defined instead
    return this.userRepository.add(firstName, lastName, age);
  }
}
