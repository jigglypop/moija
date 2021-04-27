// import { IUpdateProfileForm } from "../module/updateprofile"

import { IProfileForm } from "~/store/profile"
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

// // 업데이트 프로필
// export const updateprofileApi  = async ( updateprofile: IUpdateProfileForm,  thunkAPI: any) => {
//     const res : any = await fetch(`${SERVER_URL}/api/profile/${updateprofile._id}`,{
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization":`${updateprofile.token}`
//         },
//         body: JSON.stringify({
//             "imageurl": updateprofile.imageurl,
//             "nickname": updateprofile.nickname,
//             "type" : updateprofile.type,
//             "info" : updateprofile.info
//         }),
//     })
//     if (res.status != 200){
//         const error = await res.json()
//         return await thunkAPI.rejectWithValue(error)
//     }
//     return await res.json()
// }
