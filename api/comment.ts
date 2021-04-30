import { createToast } from "~/components/common/createToast"
import { ICommentForm } from "~/store/comment"
import { IDeleteForm } from "~/store/delete"
import { IDeleteCommentForm } from "~/store/deletecomment"
import { IPostForm } from "~/store/post"
import { IWriteCommentForm } from "~/store/writecomment"
import { SERVER_URL } from "./constants"




// 포스트 읽기
export const readCommentApi  = async (payload : ICommentForm) => {
  const res : any = await fetch(`${SERVER_URL}/api/comment/${payload.postId}`)
  if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  return { type:'SUCCESS', data: data.data }
}
// 글쓰기
export const writeCommentApi  = async ( payload: IWriteCommentForm) => {
  let token = ''
  const storage = await localStorage.getItem('token')
  if (storage){
    token = await JSON.parse(storage)
  }
  const res : any = await fetch(`${SERVER_URL}/api/comment/${payload.postId}${payload.commentId? '?commentId=' + payload.commentId :''}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`${token}`
      },
      body: JSON.stringify({
        "content": payload.content,
      }),
  })
  if (res.status != 200){
    const error = await res.json()
    return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  createToast('댓글 쓰기')
  return { type:'SUCCESS', data: data.data }
}

// 삭제
export const deleteCommentApi  = async ( payload : IDeleteCommentForm ) => {
  let token = ''
  const storage = await localStorage.getItem('token')
  if (storage){
    token = await JSON.parse(storage)
  }
  const res = await fetch(`${SERVER_URL}/api/comment/${payload.postId}/${payload.commentId}`, {
      method: "DELETE",
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
  createToast('댓글 삭제')
  return { type:'SUCCESS', data: data.data }
}
