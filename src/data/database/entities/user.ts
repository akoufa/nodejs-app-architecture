import mongoose from 'mongoose';
import { User } from '../../../domain/users/user';

export interface IDocumentUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  age: number;
}
export interface UserEntity extends IDocumentUser {
  toUser(): User;
}

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: Number,
});

UserSchema.methods.toUser = function toUser(): User {
  const name = `${this.firstName} ${this.lastName}`;
  return {
    name,
    age: this.age,
    id: this._id,
  };
};

export const UserDao = mongoose.model<UserEntity>('User', UserSchema);
