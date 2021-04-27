import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { ILocation } from "../../models/location";
import { Group, MainCategory, Location } from "../../models";
import { IMainCategory } from "../../models/maincategory";


// 지역별 그룹 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { maincategoryId, locationname } = await req.params
    if (!maincategoryId || !locationname) throw new Error('잘못된 경로입니다.')
    const maincategory: Model<IMainCategory> | null = await MainCategory.findByPk(maincategoryId, { include: Location })
    if (!maincategory) throw new Error('메인 카테고리가 없습니다.')
    const locations : any = await maincategory.get('locations')
    let locationId = ''
    for (let location of locations){
      if (location.get('name') === locationname){
        locationId = await location.get('id')
      }
    }
    const _location: Model<ILocation> | null = await Location.findByPk(locationId, { include: Group })
    res.status(200).json({
      data: {
        location: _location,
        maincategory: maincategory
      }
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
