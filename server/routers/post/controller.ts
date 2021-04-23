import { NextFunction, Request, Response } from "express";

// 리스트
export const list = async ( req : Request, res : Response, next : NextFunction ) =>{
  try{
      res.status(200).json({
          posts : { "성공" : "성공" },
          last :  { "성공" : "성공" }
      })
  } catch(e){
      res.status(500).json({ message: e })
  }
}

