import { DataTypes, Sequelize } from "sequelize";
import { IUser } from "./user";

export interface IComment extends Document{
  id: string;
  content: string;
  user: IUser
  createdAt: Date;
  updatedAt: Date;
}

export function CommentFactory (sequelize: Sequelize) {
  const comment =  sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
  return comment
}
