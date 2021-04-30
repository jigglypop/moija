import { SERVER_URL } from "~/api/constants"

// 메인 카테고리 읽기
export const readMainCategoryApi  = async ()  => {
  const res = await fetch(`${SERVER_URL}/api/maincategory`)
  if (res.status != 200){
    const error = await res.json()
    return { type:'FAILURE', data: error.error }
  }
  const data = await res.json()
  return { type:'SUCCESS', data: data.data }
}
