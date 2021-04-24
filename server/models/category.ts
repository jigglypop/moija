import { DataTypes, Model, Sequelize } from "sequelize";
import { paginate } from 'sequelize-paginate'

export interface ICategory extends Document{
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export function CategoryFactory (sequelize: Sequelize) {
  const category : any = sequelize.define("category", {
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
  paginate(category)
  return category
}
