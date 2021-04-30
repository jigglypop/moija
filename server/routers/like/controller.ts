import { Request, Response } from "express";
import { Post, Profile, Comment } from "../../models";

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


// 좋아요 읽어오기
export const readlike = async ( req : Request, res : Response ) =>{
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
    let profileset = []
    for (let item of post.profiles){
      await profileset.push(item.get('id'))
    }
    // 있으면
    let isin = false
    if (profileset.includes(parseInt(profileId))){
      isin = true
    }
    res.status(200).json({
      data: {
        isin : isin,
        length: profileset.length,
        profileset: profileset
      }
    })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}


// 댓글 좋아요
export const likecomment = async ( req : Request, res : Response ) =>{
  try {
    const { commentId } = req.params
    const { profileId } = req.body
    let comment : any = await Comment.findByPk(commentId, {
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
          model: Comment,
          as: 'comments'
        },
      ]
    })
    if (!comment || !profile) throw new Error('테이블 불러오기 실패')
    let commentset = []
    for (let item of profile.comments){
      commentset.push(item.get('id'))
    }
    // 있으면
    if (commentset.includes(parseInt(commentId))){
      await profile.removeComments(parseInt(commentId))
      await comment.removeProfiles(parseInt(profileId))
    } else{
      await profile.addComments(parseInt(commentId))
      await comment.addProfiles(parseInt(profileId))
    }
    comment = await Comment.findByPk(commentId, {
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
          model: Comment,
          as: 'comments'
        },
      ]
    })
    res.status(200).json({
      data: {
        comment : comment,
        profile: profile
      }
    })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

