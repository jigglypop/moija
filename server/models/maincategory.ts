import { DataTypes, Sequelize } from "sequelize";
import { paginate } from 'sequelize-paginate'

export interface IMainCategory extends Document{
  id: string;
  image: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export function MainCategoryFactory (sequelize: Sequelize) {
  const maincategory : any = sequelize.define("maincategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
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
  paginate(maincategory)
  return maincategory
}
