import { createToast } from "~/components/common/createToast"
import { IPostForm } from "~/store/post"
import { IWriteForm } from "~/store/write"
import { SERVER_URL } from "./constants"


// 글쓰기
export const writeApi  = async ( payload: IWriteForm) => {
  let token = ''
  const storage = await localStorage.getItem('token')
  if (storage){
    token = await JSON.parse(storage)
  }
  const res : any = await fetch(`${SERVER_URL}/api/post/${payload.categoryId}`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization":`${token}`
      },
      body: JSON.stringify({
          "title": payload.title,
          "content": payload.content,
      }),
  })
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  createToast('글쓰기')
  return { type:'SUCCESS', data: data.data }
}


// 포스트 읽기
export const readPostApi  = async (payload : IPostForm) => {
  const res : any = await fetch(`${SERVER_URL}/api/post/${payload.postId}`)
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  return { type:'SUCCESS', data: data.data }
}


// // 그룹 가입
// export const joinApi  = async ( payload : IJoinForm ) => {
//   let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/group/${payload.profileId}/${payload.groupId}`, {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization":`${token}`
//       },
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   return { type:'SUCCESS', data: data.data }
// }
