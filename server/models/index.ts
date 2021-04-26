import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import { UserFactory } from './user';
import { PostFactory } from './post';
import { CommentFactory } from './comment';
import { ProfileFactory } from './profile';
import { GroupFactory } from './group';
import { CategoryFactory } from './category';
import { MainCategoryFactory } from './maincategory';

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
  Category: CategoryFactory(sequelize),
  MainCategory: MainCategoryFactory(sequelize)
}
// 그룹 : 유저 -> N : M
db.Group.belongsToMany(db.User, { through: 'GroupUser' })
db.User.belongsToMany(db.Group, { through: 'GroupUser' })

// 유저 : 포스트 -> 1 : N
db.User.hasMany(db.Post)
db.Post.belongsTo(db.User)

// 메인카테고리 : 그룹 -> 1 : N
db.MainCategory.hasMany(db.Group)
db.Group.belongsTo(db.MainCategory)

// 유저 : 코멘트 -> 1 : N
db.User.hasMany(db.Comment)
db.Comment.belongsTo(db.User)

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

// 댓글 셀프 조인 -> N : M
db.Comment.belongsToMany(db.Comment, { as: 'parents', through: 'recomments_parents', foreignKey: 'recomment' , otherKey: 'parent'  });
db.Comment.belongsToMany(db.Comment, { as: 'recomments', through: 'recomments_parents', foreignKey: 'parent', otherKey: 'recomment' });

// 팔로워 팔로잉 셀프 조인 -> N : M
db.Profile.belongsToMany(db.Profile, { as: 'followers', through: 'followings_followers', foreignKey: 'following', otherKey: 'follower' });
db.Profile.belongsToMany(db.Profile, { as: 'followings', through: 'followings_followers', foreignKey: 'follower', otherKey: 'following' });

// 좋아요 프로필 : 포스트 -> N : M
db.Post.belongsToMany(db.Profile, { as: 'profiles', through: 'post_profile', foreignKey: 'post', otherKey: 'profile' });
db.Profile.belongsToMany(db.Post, { as: 'posts', through: 'post_profile', foreignKey: 'profile', otherKey: 'post' });

export const Post = db.Post
export const User = db.User
export const Profile = db.Profile
export const Comment = db.Comment
export const Group = db.Group
export const Category = db.Category
export const MainCategory = db.MainCategory

export default db
