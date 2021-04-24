import { DataTypes, Model, Sequelize } from "sequelize";

export interface IUser extends Document{
  id: string;
  username: string;
  email: string;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModel extends Model<UserModel, IUser>{}
export function UserFactory (sequelize: Sequelize) {
  const user =  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
  return user
}
