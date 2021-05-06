import { RequestHandler } from "express";
import { Group, Profile } from "../models";

// 그룹 주인 확인
const checkOwnerGroup : RequestHandler = async ( req, res, next ) => {
  try {
    const { groupId, profileId } = await req.params
    const decoded = await req.body.decoded
    // 포스트 아이디
    if (!groupId ) throw new Error('그룹 아이디를 입력해 주세요.')
    // 포스트가 있는지
    const group: any = await Group.findByPk(groupId, { include: [
      {
        model:Profile,
        as: 'owners'
      }
    ] })
    if (!group) throw new Error('그룹이 없습니다.')
    const owners = group.getDataValue("owners")[0]
    const ownerId = owners.getDataValue("id")
    if (ownerId.toString() !== profileId.toString()){
      throw new Error('그룹 주인이 아닙니다.')
    } else{
      next()
    }
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
export default checkOwnerGroup
