import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import { UserFactory } from './user';
import { PostFactory } from './post';
import { CommentFactory } from './comment';
import { ProfileFactory } from './profile';
import { GroupFactory } from './group';
import { CategoryFactory } from './category';

dotenv.config();
export const sequelize = new Sequelize(
  process.env.DB_DBNAME || 'moija',
  process.env.DB_USERNAME || 'root',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  }
)

const db = {
  sequelize : sequelize,
  Sequelize : Sequelize,
  Post : PostFactory(sequelize),
  Comment : CommentFactory(sequelize),
  User: UserFactory(sequelize),
  Profile: ProfileFactory(sequelize),
  Group: GroupFactory(sequelize),
  Category: CategoryFactory(sequelize)
}
// 그룹 : 유저 -> N : M
db.Group.belongsToMany(db.User, { through: 'GroupUser' })
db.User.belongsToMany(db.Group, { through: 'GroupUser' })

// 유저 : 포스트 -> 1 : N
db.User.hasMany(db.Post)
db.Post.belongsTo(db.User)

// 프로필 : 유저 -> 1 : 1
db.Profile.hasOne(db.User)
db.User.belongsTo(db.Profile)

// 그룹 : 카테고리 -> 1 : N
db.Group.hasMany(db.Category)
db.Category.belongsTo(db.Group)

// 카테고리 : 포스트 -> 1 : N
db.Category.hasMany(db.Post)
db.Post.belongsTo(db.Category)

// 포스트 : 코멘트 -> 1 : N
db.Post.hasMany(db.Comment)
db.Comment.belongsTo(db.Post)

export const Post = db.Post
export const User = db.User
export const Profile = db.Profile
export const Comment = db.Comment
export const Group = db.Group
export const Category = db.Category

export default db
