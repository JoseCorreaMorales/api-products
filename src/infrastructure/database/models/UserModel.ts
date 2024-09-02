import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class UserModel extends Model {
  public id!: number;
  public name!: string;
  public role!: string;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  tableName: 'users',
});
export default UserModel