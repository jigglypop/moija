import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { MainCategory } from "../../models";
import { IMainCategory } from "../../models/maincategory";

// 메인 카테고리 생성
export const create = async ( req : Request, res : Response ) =>{
  try {
    const { name, image } = await req.body
    const maincategory = await MainCategory.create({
      name: name,
      image: image
    })
    if (!name) throw new Error('이름을 입력해 주세요')
    res.status(200).json({
      data: maincategory
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 메인 카테고리 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { maincategoryId } = await req.params
    if (!maincategoryId) throw new Error('잘못된 경로입니다.')
    const maincategory: Model<IMainCategory> | null = await MainCategory.findByPk(maincategoryId, { include: MainCategory })
    if (!maincategoryId) throw new Error('메인 카테고리가 없습니다.')
    res.status(200).json({
      data: maincategory
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
