import { RequestHandler } from "express";
import { Model } from "sequelize/types";
import { IProfile } from "../models/profile";
import { Profile, User } from "../models";

const setProfileIdByUser: RequestHandler = async ( req, res, next ) => {
  try {
    const { decoded }= await req.body
    // 팔로워 본인인지
    const profile : Model<IProfile> | null = await User.findByPk(decoded.id, { include: Profile })
    if (!profile) throw new Error('포스트가 없습니다.')
    req.body['profileId'] = parseInt(profile.getDataValue('id'))
    next()
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
export default setProfileIdByUser
