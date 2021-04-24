import { Request, Response } from "express";
import { Comment, Post } from "../../models";

const getPostCommentsAll = async (postId : string) =>{
  const post = await Post.findByPk(postId, {
    include: [
      {
        model: Comment,
        include: [
          {
            model: Comment,
            as:'recomments'
          }
        ]
      }
    ]
  })
  return post
}

// 댓글 쓰기
export const write = async ( req : Request, res : Response ) =>{
  try {
    const decoded = await req.body.decoded
    const { content } = await req.body
    const { postId } = await req.params
    const commentId = await req.query.commentId
    // 포스트 아이디
    if (!postId) throw new Error('포스트 아이디를 입력해 주세요.')
    // 내용이 모두 있는지
    if (!content) throw new Error('내용을 입력해 주세요')
    // 부모에 따른 분기
    let comment : any = null
    if (commentId){
      comment = await Comment.create({
        parentId: commentId,
        userId: decoded.id,
        content: content,
      })
      await comment.addParents(commentId)
    } else {
      comment = await Comment.create({
        postId: postId,
        userId: decoded.id,
        content: content,
      })
    }
    const post = await getPostCommentsAll(postId)
    res.status(200).json({
      data: post
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 댓글 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { postId } = await req.params
    // 포스트 아이디
    if (!postId) throw new Error('포스트 아이디를 입력해 주세요.')
    const post = await getPostCommentsAll(postId)
    res.status(200).json({
      data: post
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 댓글 삭제
export const remove = async ( req : Request, res : Response ) =>{
  try {
    const { postId, commentId } = await req.params
    // 포스트 아이디
    if (!postId || !commentId) throw new Error('포스트 아이디와 댓글 아이디를 입력해 주세요.')
    const comment = await Comment.findByPk(commentId, {
      include: [{
       model: Comment,
       as:'recomments'
      }]
    })
    if (comment){
      const recomments = await comment.getDataValue("recomments")
      for (let recomment of recomments){
        const recommentId = recomment.get('id')
        await Comment.destroy({
          where: {
            id: recommentId
          },
        })
      }
    }
    const result = await Comment.destroy({
      where: {
        id: commentId
      },
    })
    if (!result) throw new Error('댓글 삭제 실패')
    const post = await getPostCommentsAll(postId)
    res.status(200).json({
      data: post
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
