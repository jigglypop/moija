import { createToast } from "~/components/common/createToast"
import { IGroupForm } from "~/store/group"
import { IJoinForm } from "~/store/join"
import { IWriteGroupForm } from "~/store/writegroup"
import { SERVER_URL } from "./constants"



// 그룹 생성
export const writeGroupApi  = async ( payload: IWriteGroupForm) => {
  let token = ''
  const storage = await localStorage.getItem('token')
  if (storage){
    token = await JSON.parse(storage)
  }
  const res : any = await fetch(`${SERVER_URL}/api/group/${payload.locationId}`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization":`${token}`
      },
      body: JSON.stringify({
          "name": payload.name,
          "info" : payload.info,
          "imageurl": payload.imageurl,
      }),
  })
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  createToast('그룹 생성')
  return { type:'SUCCESS', data: data.data }
}


// 그룹 읽기
export const readGroupApi  = async (payload : IGroupForm) => {
  const res : any = await fetch(`${SERVER_URL}/api/group/${payload.groupId}`)
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  return { type:'SUCCESS', data: data.data }
}


// 그룹 가입
export const joinApi  = async ( payload : IJoinForm ) => {
  let token = ''
  const storage = await localStorage.getItem('token')
  if (storage){
    token = await JSON.parse(storage)
  }
  const res : any = await fetch(`${SERVER_URL}/api/group/${payload.profileId}/${payload.groupId}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization":`${token}`
      },
  })
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  createToast('모임 가입')
  return { type:'SUCCESS', data: data.data }
}
