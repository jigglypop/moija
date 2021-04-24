import { Request, Response } from "express";
import { Category } from "../../models";

// 카테고리 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { categoryId } = req.params
    const page = req.query.page
    if (!categoryId) throw new Error('잘못된 경로입니다.')
    const category = await Category.paginate({
      page: page,
      paginate: 10,
      order: [['id', 'DESC']],
    })
    if (!category) throw new Error('카테고리가 없습니다.')
    res.status(200).json({
      data: category
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
