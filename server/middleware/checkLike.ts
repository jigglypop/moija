import { RequestHandler } from "express";
import { Model } from "sequelize/types";
import { IProfile } from "../models/profile";
import { Profile, User } from "../models";

const checkLike: RequestHandler = async ( req, res, next ) => {
  try {
    const { userId } = await req.params
    // 프로필이 있는지
    const profile : Model<IProfile> | null = await User.findByPk(userId, { include: Profile })
    if (!profile) throw new Error('프로필이 없습니다')
    req.body['profileId'] = parseInt(profile.getDataValue('id'))
    next()
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
export default checkLike
