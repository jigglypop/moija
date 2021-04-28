import { Request, Response } from "express";
import { Group, Category, Profile, Post } from "../../models";

// 그룹생성
export const create = async ( req : Request, res : Response ) =>{
  try {
    const { locationId } = await req.params
    if (!locationId) throw new Error('지역을 입력해 주세요')
    const { name, info, imageurl } = await req.body
    if (!name || !info || !imageurl) throw new Error('이름, 모임 설명, 이미지를 입력해 주세요')
    const group = await Group.create({
      locationId: locationId,
      name: name,
      info: info,
      imageurl: imageurl
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
    const group: any = await Group.findByPk(groupId, {
      include: [
        {
          model: Category,
          as: 'categories',
          include: [
            {
              model: Post,
              as: 'posts',
            }
          ]
        },
        {
          model: Profile,
          as: 'profiles'
        }
      ]
    })
    if (!group) throw new Error('그룹이 없습니다.')
    res.status(200).json({
      data: group
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 그룹 가입하기
export const join = async ( req : Request, res : Response ) =>{
  try {
    const { profileId, groupId } = req.params
    let group : any = await Group.findByPk(groupId, {
      include: [
        {
          model: Profile,
          as: 'profiles'
        },
      ]
    })
    let profile : any = await Profile.findByPk(profileId, {
      include: [
        {
          model: Group,
          as: 'groups'
        },
      ]
    })
    if (!group || !profile) throw new Error('테이블 불러오기 실패')
    let groupset = []
    for (let item of profile.groups){
      groupset.push(item.get('id'))
    }
    // 있으면
    if (groupset.includes(parseInt(groupId))){
      await profile.removeGroups(parseInt(groupId))
      await group.removeProfiles(parseInt(profileId))
    } else{
      await profile.addGroups(parseInt(groupId))
      await group.addProfiles(parseInt(profileId))
    }
    group = await Group.findByPk(groupId, {
      include: [
        {
          model: Category,
          as: 'categories'
        },
        {
          model: Profile,
          as: 'profiles'
        }
      ]
    })
    profile = await Profile.findByPk(profileId, {
      include: [
        {
          model: Group,
          as: 'groups'
        },
      ]
    })
    res.status(200).json({
      data: {
        group : group,
        profile: profile
      }
    })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

