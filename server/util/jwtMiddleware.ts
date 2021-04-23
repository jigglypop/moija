// import { NextFunction, Request, Response } from 'express'
// import jwt from 'jsonwebtoken'
// import { IComment } from '../models/comment'
// import { IPost } from '../models/post'
// import { IRecomment } from '../models/recomment'

// export interface RequestDecoded extends Request{
//     decoded : string | object;
//     _id : string
//     post : IPost
//     comment : IComment
//     recomment : IRecomment
//     news : string
// }


// // 쿠키 로그인 상황 체크
// const jwtMiddleware =  ( req : RequestDecoded, res: Response,  next : NextFunction ) : any => {
//     try {
//         const { authorization } : any = req.headers
//         const jwt_secret : any = process.env.JWT_SECRET
//         const decoded = jwt.verify(authorization, jwt_secret)
//         req.decoded = decoded
//         next()
//     } catch (e){
//         next()
//     }
// }

// export default jwtMiddleware
