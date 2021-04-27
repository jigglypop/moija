import { DataTypes, Sequelize } from "sequelize";

export interface ILocation extends Document{
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export function LocationFactory (sequelize: Sequelize) {
  const location = sequelize.define("location", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
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
  return location
}
