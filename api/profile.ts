import { createToast } from "~/components/common/createToast"
import { IProfileForm } from "~/store/profile"
import { IUpdateProfileForm } from "~/store/updateprofile"
import { SERVER_URL } from "./constants"

// 프로필 읽기
export const readProfileApi  = async (payload : IProfileForm) => {
  const res : any = await fetch(`${SERVER_URL}/api/profile/${payload.profileId}`)
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  return { type:'SUCCESS', data: data.data }
}

// 업데이트 프로필
export const updateprofileApi  = async ( payload: IUpdateProfileForm) => {
  let token = ''
  const storage = await localStorage.getItem('token')
  if (storage){
  token = await JSON.parse(storage)
  }
  const res : any = await fetch(`${SERVER_URL}/api/profile/${payload.profileId}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Authorization":`${token}`
      },
      body: JSON.stringify({
          "imageurl": payload.imageurl,
          "nickname": payload.nickname,
          "location" : payload.location,
          "info" : payload.info
      }),
  })
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  createToast('프로필 업데이트')
  return { type:'SUCCESS', data: data.data }
}
