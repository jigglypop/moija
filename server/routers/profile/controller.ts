import { Request, Response } from "express";
import { Profile, User } from "../../models";

// 프로필 읽기
export const read = async ( req : Request, res : Response ) =>{
  try {
    const { profileId } = await req.params
    // 프로필 아이디
    if (!profileId ) throw new Error('프로필 아이디를 입력해 주세요.')
    // // 프로필이 있는지
    const profile : any = await Profile.findAll({
      where: { id: profileId },
      include: [ { all: true } ]
    })
    if (!profile) throw new Error('프로필이 없습니다')
    res.status(200).json({
      data: profile[0]
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 프로필 유저 아이디로 읽기
export const readuser = async ( req : Request, res : Response ) =>{
  try {
    const { userId } = await req.params
    // 유저 아이디
    if (!userId ) throw new Error('유저 아이디를 입력해 주세요.')
    // 유저 없음
    const user = await User.findByPk(userId)
    if (!user) throw new Error('유저가 없습니다')
    // 프로필이 있는지
    const profile = await Profile.findByPk(user.getDataValue('profileId'))
    if (!profile) throw new Error('프로필이 없습니다.')
    res.status(200).json({
      data: profile
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 프로필 업데이트
export const update = async ( req : Request, res : Response ) =>{
  try {
    const { profileId } = await req.params
    const  decoded = await req.body.decoded
    const user = await User.findOne({ where: { username: decoded.username }})
    if (!user) throw new Error('유저가 없습니다.')
    const _profileId = user.get('profileId')
    if (String(_profileId) !== String(profileId)) throw new Error('프로필 주인이 아닙니다.')
    const { nickname, location, imageurl, info } = await req.body
    if (!nickname || !location || !imageurl || !info ) throw new Error('모두 입력해 주세요')
    const result = await Profile.update({
      nickname: nickname,
      location: location,
      imageurl: imageurl,
      info: info,
      updatedAt: new Date()
    }, {
      where: {
        id: profileId
      },
    })
    if (!result) throw new Error('프로필 업데이트 실패')
    const profile : any = await Profile.findAll({
      where: { id: profileId },
      include: [ { all: true } ]
    })
    if (!profile) throw new Error('프로필이 없습니다.')
    res.status(200).json({
      data: profile[0]
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


