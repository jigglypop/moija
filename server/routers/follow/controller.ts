import { Request, Response } from "express";
import { Profile } from "../../models";

// 팔로우
export const follow = async ( req : Request, res : Response ) =>{
  try {
    const { followerId, followingId } = req.params
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
    let following_followerset = []
    for (let item of following.followers){
      following_followerset.push(item.get('id'))
    }
    // // 있으면
    if (following_followerset.includes(Number(followerId))){
      await following.removeFollowers(Number(followerId))
      await follower.removeFollowings(Number(followingId))
    } else{
      await follower.addFollowings(Number(followingId))
      await following.addFollowers(Number(followerId))
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

// 팔로우 읽기
export const readfollow = async ( req : Request, res : Response ) =>{
  try {
    const { followerId, followingId } = req.params
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
    if (!following) throw new Error('팔로우 테이블 불러오기 실패')
    let isin = false
    for (let item of following.followers){
      if(Number(item.get('id')) === Number(followerId)){
        isin = true
        break
      }
    }
    res.status(200).json({
      data: {
        isin: isin,
        followerslength : following.followers.length,
        followingslength: following.followings.length,
        followers: following.followers,
        followings: following.followings,
      }
    })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}
