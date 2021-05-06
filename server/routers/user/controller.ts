import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'
import { Profile, User } from '../../models'
import { serialize } from "../../util/serialize";
import { generateToken } from "../../util/generateToken";
import { IUser } from "../../models/user";
import { Model } from "sequelize/types";
import { IProfile } from "server/models/profile";

// 회원가입
export const register = async ( req : Request, res : Response ) =>{
  try {
    const { username, password, email } = req.body
    // 에러처리 (빈칸과 형식)
    if (!username || !password || !email){
      let table : any = {username : username, password : password, email : email}
      let blanks = []
      for (let blank of ['username', 'password', 'email']){
        if (!table[blank]) blanks.push(blank)
      }
      throw new Error(`${blanks.join(', ')}을 올바르게 입력해 주세요`)
    };
    // 에러처리 (이메일 형식)
    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if (!emailValidation && email !== 'kakao') throw new Error(`이메일의 형식이 올바르게 입력되지 않았습니다. ex) honggildong@naver.com `)
    // 에러처리 (이미 존재하는 계정)
    const nameExists = await User.findOne({ where: { username: username }})
    if (nameExists) throw new Error("같은 이름의 계정이 존재합니다.");
    // 에러처리 (이미 존재하는 이메일)
    const emailExists = await User.findOne({ where: { email: email }})
    if (emailExists) throw new Error("이미 가입된 이메일입니다.");

    const hashedPassword = await bcrypt.hash(password.toString(), 10)
    const now = new Date()
    const profile = await Profile.create({
      username: username,
      email: email,
      imageurl: req.body.imageurl? req.body.imageurl : undefined,
      nickname: username,
      createdAt: now,
      updatedAt: now
    })
    const user : Model<IUser> = await User.create({
      profileId: profile.get('id'),
      username: username,
      email: email,
      hashedPassword: hashedPassword,
      createdAt: now,
      updatedAt: now
    })
    if (!user || !profile) throw new Error("새로운 유저 생성 실패");
    const serialized = await serialize(user)
    const token = await generateToken(user)
    if (!token) throw new Error("토큰 생성 실패");
    res.set('token', token);
    res.status(200).json({ data: serialized })
  } catch(e) {
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 로그인
export const login = async ( req : Request, res : Response ) =>{
  const { username, password } = req.body
  // 에러처리 (형식)
  try {
    if (!username || !password) throw new Error('이름과 비밀번호를 정확히 입력해 주세요')
    const user: Model<IUser, IUser> | null = await User.findOne({ where: { username: username }})
    // 계정이 존재하는지
    if (!user) throw new Error('같은 이름의 계정이 존재하지 않습니다.')
    // 비밀번호가 일치하지 않음
    const hashedPassword = user.getDataValue('hashedPassword')
    const valid = await bcrypt.compare(password, hashedPassword)
    if (!valid) throw new Error('비밀번호가 잘못되었습니다')
    // 토큰 발급
    const serialized = await serialize(user)
    const token = await generateToken(user)
    if (!token) throw new Error("토큰 생성 실패");
    res.set('token', token);
    res.status(200).json({ data: serialized })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 체크
export const check = async ( req : Request, res : Response, next: NextFunction ) =>{
  try {
    const { decoded } = await req.body
    if (!decoded) throw new Error('허가되지 않은 사용자입니다.')
    const user: Model<IUser, IUser> | null = await User.findByPk(decoded.id)
    if (!user) throw new Error('같은 이름의 계정이 존재하지 않습니다.')
    const profileId = Number(user.get("profileId"))
    const profile: Model<IProfile, IProfile> | null = await Profile.findByPk(profileId)
    if (!profile) throw new Error('프로필이 존재하지 않습니다.')
    res.status(200).json({ data: profile })
  } catch (e){
    res.status(500).json({ error: e.toString().replace("Error: ", "") })
  }
}

// 로그아웃
export const logout = async ( res : Response ) =>{
    await res.status(200).json({ data: '로그아웃 되었습니다.'} )
}



