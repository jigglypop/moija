import { Request, Response } from "express";
import { Post, User } from "../../models";

// 글쓰기
export const write = async ( req : Request, res : Response ) =>{
  try {
    const decoded = await req.body.decoded
    const { title, content } = await req.body
    const { categoryId } = await req.params
    // 카테고리 아이디
    if (!categoryId ) throw new Error('카테고리 아이디를 입력해 주세요.')
    // 내용이 모두 있는지
    if (!title || !content ) throw new Error('제목과 내용을 모두 입력해 주세요')
    const post = await Post.create({
      categoryId: categoryId,
      userId: decoded.id,
      title: title,
      content: content,
    })
    res.status(200).json({
      data: post
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 글 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { postId } = await req.params
    // 포스트 아이디
    if (!postId ) throw new Error('포스트 아이디를 입력해 주세요.')
    // 포스트가 있는지
    const post = await Post.findByPk(postId, { include: User })
    if (!post) throw new Error('포스트가 없습니다.')
    res.status(200).json({
      data: post
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 글 업데이트
export const update = async ( req : Request, res : Response ) =>{
  try {
    const { postId } = await req.params
    const { title, content } = await req.body
    if (!title || !content ) throw new Error('제목과 내용을 모두 입력해 주세요')
    const result = await Post.update({
      title: title,
      content: content,
      updatedAt: new Date()
    }, {
      where: {
        id: postId
      },
    })
    if (!result) throw new Error('포스트 업데이트 실패')
    const post = await Post.findByPk(postId, { include: User })
    if (!post) throw new Error('포스트가 없습니다.')
    res.status(200).json({
      data: post
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 글 삭제
export const remove = async ( req : Request, res : Response ) =>{
  try {
    const { postId } = await req.params
    const result = await Post.destroy({
      where: {
        id: postId
      },
    })
    if (!result) throw new Error('포스트 삭제 실패')
    res.status(200).json({
      data: {
        message: "포스트를 성공적으로 삭제하였습니다."
      }
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
