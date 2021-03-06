import { DataTypes, Model, Sequelize } from "sequelize";
export interface IProfile extends Document{
  id: string;
  username: string;
  email: string;
  nickname :  string;
  imageurl : string;
  type : string;
  info : string;
  permission : number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileModel extends Model<IProfile>{}
export function ProfileFactory (sequelize: Sequelize) {
  const profile =  sequelize.define("profile", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "서울"
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    permission: {
      type: DataTypes.INTEGER,
      defaultValue: 1
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
  return profile
}
