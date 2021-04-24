import { RequestHandler } from "express";
import { Model } from "sequelize/types";
import { Comment, User } from "../models";
import { IComment } from "../models/comment";
import { IUser } from "../models/user";

const checkOwnerComment : RequestHandler = async ( req, res, next ) => {
  try {
    const { commentId } = await req.params
    const decoded = await req.body.decoded
    // 댓글 아이디
    if (!commentId ) throw new Error('댓글 아이디를 입력해 주세요.')
    // 댓글이 있는지
    const comment : Model<IComment> | null = await Comment.findByPk(commentId, { include: User })
    if (!comment) throw new Error('댓글이 없습니다.')
    const writer : IUser | null = comment.getDataValue("user")
    if (!writer) throw new Error('댓글이 없습니다.')
    if (decoded.id !== writer.id){
      throw new Error('글쓴이가 아닙니다.')
    } else{
      next()
    }
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
export default checkOwnerComment
