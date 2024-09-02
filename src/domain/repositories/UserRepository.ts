import { User } from '../entities/User';

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  save(user: any): Promise<any>;
  //create(): Promise<any>
}
