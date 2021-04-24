import { RequestHandler } from "express";
import { Model } from "sequelize/types";
import { IProfile } from "../models/profile";
import { Profile, User } from "../models";

const checkFollow: RequestHandler = async ( req, res, next ) => {
  try {
    const { followerId, followingId } = await req.params
    const decoded = await req.body.decoded
    // 팔로워 본인인지
    if (parseInt(decoded.id) !== parseInt(followerId)) throw new Error('팔로워 본인이 아닙니다')
    // 팔로워, 팔로잉 아이디
    if (!followerId || !followingId ) throw new Error('팔로워와 팔로우 아이디를 모두 입력해 주세요.')
    // 프로필이 있는지
    const follower : Model<IProfile> | null = await User.findByPk(followerId, { include: Profile })
    const following : Model<IProfile> | null = await User.findByPk(followingId, { include: Profile })

    if (!follower || !following ) throw new Error('팔로워와 팔로우 프로필이 없습니다')
    if (parseInt(follower.getDataValue('id')) === parseInt(following.getDataValue('id'))){
      throw new Error('자신은 팔로우할 수 없습니다')
    } else {
      req.body['followerId'] = parseInt(follower.getDataValue('id'))
      req.body['followingId'] = parseInt(following.getDataValue('id'))
      next()
    }
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
export default checkFollow
