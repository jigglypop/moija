import { Request, Response } from "express";
import { Post, Profile } from "../../models";

// 좋아요
export const like = async ( req : Request, res : Response ) =>{
  try {
    const { postId } = req.params
    const { profileId } = req.body
    let post : any = await Post.findByPk(postId, {
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
          model: Post,
          as: 'posts'
        },
      ]
    })
    if (!post || !profile) throw new Error('테이블 불러오기 실패')
    let postset = []
    for (let item of profile.posts){
      postset.push(item.get('id'))
    }
    // 있으면
    if (postset.includes(parseInt(postId))){
      await profile.removePosts(parseInt(postId))
      await post.removeProfiles(parseInt(profileId))
    } else{
      await profile.addPosts(parseInt(postId))
      await post.addProfiles(parseInt(profileId))
    }
    post = await Post.findByPk(postId, {
      include: [
        {
          model: Profile,
          as: 'profiles'
        }
      ]
    })
    profile = await Profile.findByPk(profileId, {
      include: [
        {
          model: Post,
          as: 'posts'
        },
      ]
    })
    res.status(200).json({
      data: {
        post : post,
        profile: profile
      }
    })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

