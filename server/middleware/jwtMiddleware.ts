import jwt from 'jsonwebtoken'
import { IHeader } from '../types'
import type { RequestHandler } from "express";

// 쿠키 로그인 상황 체크
const jwtMiddleware : RequestHandler = ( req, res, next ) => {
    try {
      const { authorization } : IHeader = req.headers
      const jwt_secret : string | undefined = process.env.JWT_SECRET
      if (authorization && jwt_secret){
        const decoded = jwt.verify(authorization, jwt_secret)
        req.body['decoded'] = decoded
      }
      next()
    } catch (e){
      next()
    }
}
export default jwtMiddleware
