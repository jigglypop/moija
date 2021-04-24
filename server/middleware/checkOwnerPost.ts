import { RequestHandler } from "express";
import { Model } from "sequelize/types";
import { Post, User } from "../models";
import { IPost } from "../models/post";
import { IUser } from "../models/user";

// 글 업데이트
const checkOwnerPost : RequestHandler = async ( req, res, next ) => {
  try {
    const { postId } = await req.params
    const decoded = await req.body.decoded
    // 포스트 아이디
    if (!postId ) throw new Error('포스트 아이디를 입력해 주세요.')
    // 포스트가 있는지
    const post : Model<IPost> | null = await Post.findByPk(postId, { include: User })
    if (!post) throw new Error('포스트가 없습니다.')
    const writer : IUser | null = post.getDataValue("user")
    if (!writer) throw new Error('포스트가 없습니다.')
    if (decoded.id !== writer.id){
      throw new Error('글쓴이가 아닙니다.')
    } else{
      next()
    }
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
export default checkOwnerPost
