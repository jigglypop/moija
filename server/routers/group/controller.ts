import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { Group, Category } from "../../models";
import { IGroup } from "../../models/group";

// 그룹생성
export const create = async ( req : Request, res : Response ) =>{
  try {
    const { maincategoryId } = await req.params
    if (!maincategoryId) throw new Error('메인카테고리를 입력해 주세요')
    const { name } = await req.body
    if (!name) throw new Error('이름을 입력해 주세요')
    const group = await Group.create({
      maincategoryId: maincategoryId,
      name: name,
    })
    await Category.create({
      groupId: group.get('id'),
      name: "자유글",
    })
    await Category.create({
      groupId: group.get('id'),
      name: "가입인사",
    })
    await Category.create({
      groupId: group.get('id'),
      name: "공지사항",
    })
    res.status(200).json({
      data: group
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 그룹 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { groupId } = await req.params
    if (!groupId) throw new Error('잘못된 경로입니다.')
    const group: Model<IGroup> | null = await Group.findByPk(groupId, { include: Category })
    if (!group) throw new Error('그룹이 없습니다.')
    res.status(200).json({
      data: group
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
