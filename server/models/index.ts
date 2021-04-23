import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import { UserFactory } from './user';
import { PostFactory } from './post';
import { CommentFactory } from './comment';
import { ProfileFactory } from './profile';

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
}
db.Post.hasMany(db.Comment)
db.Comment.belongsTo(db.Post)

db.User.hasMany(db.Post)
db.Post.belongsTo(db.User)

db.User.belongsTo(db.Profile)
db.Profile.hasOne(db.User)

export const Post = db.Post
export const User = db.User
export const Profile = db.Profile
export const Comment = db.Comment
export default db
