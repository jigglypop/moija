import { DataTypes, Sequelize } from "sequelize";

export interface IGroup extends Document{
  id: string;
  name: string;
  info: string;
  imageurl: string;
  createdAt: Date;
  updatedAt: Date;
}

export function GroupFactory (sequelize: Sequelize) {
  const group = sequelize.define("group", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageurl:{
      type: DataTypes.STRING,
      allowNull: true,
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
  return group
}
