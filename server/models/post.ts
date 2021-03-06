import { DataTypes, Sequelize } from "sequelize";
import { IUser } from "./user";

export interface IPost extends Document{
  id: string;
  title: string;
  content: string;
  user: IUser
  createdAt: Date;
  updatedAt: Date;
}

export function PostFactory (sequelize: Sequelize) {
  const post = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
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
  return post
}
