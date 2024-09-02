import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { UserModel } from '../../infrastructure/database/models/UserModel'; 

export class SequelizeUserRepository implements UserRepository {
  async findById(id: number): Promise<User | null> {
    const userRecord = await UserModel.findByPk(id);
    if (!userRecord) return null;
    return new User(userRecord.id, userRecord.name, userRecord.role); 
  }

  async save(user: any): Promise<User> {
    const userRecord = await UserModel.create({
        id: user.id,
        name: user.name,
        role: user.role
    });
    return new User(userRecord.id, userRecord.name, userRecord.role);
  }

  

  // Implementación de otros métodos como update, delete, etc.
}
