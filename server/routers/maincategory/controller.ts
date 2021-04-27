import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { MainCategory, Location, Group } from "../../models";
import { IMainCategory } from "../../models/maincategory";
import { location_list } from "./location_list";

// 메인 카테고리 생성
export const create = async ( req : Request, res : Response ) =>{
  try {
    const { name, image } = await req.body
    const maincategory = await MainCategory.create({
      name: name,
      image: image
    })
    for (let name of location_list){
      await Location.create({
        maincategoryId: maincategory.get('id'),
        name: name,
      })
    }
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
    const maincategory: Model<IMainCategory> | null = await MainCategory.findByPk(maincategoryId, { include: Location })
    if (!maincategoryId) throw new Error('메인 카테고리가 없습니다.')
    res.status(200).json({
      data: maincategory
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 메인 카테고리 그룹 모두 읽기
export const readgroup = async ( req : Request, res : Response ) =>{
  try {
    const { maincategoryId } = await req.params
    if (!maincategoryId) throw new Error('잘못된 경로입니다.')
    const maincategory: Model<IMainCategory> | null = await MainCategory.findByPk(maincategoryId, {
      include: Location
    })
    if (!maincategory) throw new Error('메인 카테고리가 없습니다.')
    const locations : any = await maincategory.get('locations')
    let locations_all: object[] = []
    for (let location of locations){
      const _location: any = await Location.findByPk(location.get('id'), {
        include: Group
      })
      if (!_location) continue
      locations_all.push(..._location.get('groups'))
    }
    res.status(200).json({
      data: {
        groups: locations_all
      }
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 메인 카테고리 모두 읽기
export const readall = async ( req : Request, res : Response ) =>{
  try {
    const maincategories: Model<IMainCategory> | null = await MainCategory.findAll()
    res.status(200).json({
      data: maincategories
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
