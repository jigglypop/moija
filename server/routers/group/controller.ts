import { Request, Response } from "express";
import { Group, Category, Profile, Post, User, Comment } from "../../models";

// 그룹생성
export const create = async ( req : Request, res : Response ) =>{
  try {
    const { locationId } = await req.params
    if (!locationId) throw new Error('지역을 입력해 주세요')
    const { name, info, imageurl, profileId } = await req.body
    if (!profileId) throw new Error('모임 가입은 로그인 후 가능합니다.')
    if (!name || !info || !imageurl) throw new Error('이름, 모임 설명, 이미지를 입력해 주세요')
    const group = await Group.create({
      ownerId: profileId,
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
    let _group : any = await Group.findByPk(group.getDataValue('id'))
    let _profile : any = await Profile.findByPk(profileId)
    if (!_group || !_profile) throw new Error('테이블 불러오기 실패')

    await _profile.addGroups(parseInt(group.getDataValue('id')))
    await _group.addProfiles(parseInt(profileId))
    await _group.addOwners(parseInt(profileId))
    const __group : any = await Group.findAll({
      where: { id: group.getDataValue('id') },
      include: [ { all: true } ]
    })
    res.status(200).json({
      data: __group[0]
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
    const group: any = await Group.findAll({
      where: { id: groupId },
      include: [ { all: true } ]
    })
    if (!group) throw new Error('그룹이 없습니다.')
    res.status(200).json({
      data: group[0]
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


// 그룹 자식 포스트 페이지로 읽기
export const readpost = async ( req : Request, res : Response ) =>{
  try {
    const { categoryId } = await req.params
    const { page } = await req.query
    // 페이지 한계
    const limit = 10
    if (!categoryId) throw new Error('잘못된 경로입니다.')
    let posts : any = await Post.findAndCountAll(
      {
        where: {
        "categoryId" : categoryId
        },
        order: [['createdAt','DESC']],
        offset: Number(page) * limit,
        limit: limit,
        include: [
          {
            model: User,
            as: 'user',
            include: [
              {
                model:Profile,
                as: 'profile'
              }
            ]
          },
          {
            model: Profile,
            as: 'profiles'
          },
          {
            model: Comment,
            as: 'comments'
          },
      ]
    })
    if (!posts) throw new Error('포스트 페이지가 없습니다.')
    posts['totalpage'] = Math.ceil(posts.count / limit)
    res.status(200).json({
      data: posts
    })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 그룹 업데이트
export const update = async ( req : Request, res : Response ) =>{
  try {
    const { groupId, profileId } = await req.params
    const { name, info, imageurl } = await req.body
    if (!name || !info || !imageurl ) throw new Error('제목과 내용을 모두 입력해 주세요')
    // if (!categoryId) throw new Error('잘못된 경로입니다.')
    // res.status(200).json({
    //   data: posts
    // })
  } catch(e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
