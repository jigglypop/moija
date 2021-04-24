import { Request, Response } from "express";
import { Profile } from "../../models";

// 팔로우
export const follow = async ( req : Request, res : Response ) =>{
  try {
    const { followerId, followingId } = req.body
    let follower : any = await Profile.findByPk(followerId, {
      include: [
        {
          model: Profile,
          as: 'followers'
        },
        {
          model: Profile,
          as: 'followings'
        }
      ]
    })
    let following : any = await Profile.findByPk(followingId, {
      include: [
        {
          model: Profile,
          as: 'followers'
        },
        {
          model: Profile,
          as: 'followings'
        }
      ]
    })
    if (!follower || !following) throw new Error('팔로우 테이블 불러오기 실패')
    let followerset = []
    for (let item of follower.followers){
      followerset.push(item.get('id'))
    }
    // 있으면
    if (followerset.includes(followingId)){
      follower.removeFollowers(followingId)
    } else{
      follower.addFollowers(followingId)
    }
    follower = await Profile.findByPk(followerId, {
      include: [
        {
          model: Profile,
          as: 'followers'
        },
        {
          model: Profile,
          as: 'followings'
        }
      ]
    })
    following = await Profile.findByPk(followingId, {
      include: [
        {
          model: Profile,
          as: 'followers'
        },
        {
          model: Profile,
          as: 'followings'
        }
      ]
    })
    res.status(200).json({
      data: {
        follower : follower,
        following: following
      }
    })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

