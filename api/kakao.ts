import { createToast } from "~/components/common/createToast"
import { SERVER_URL } from "./constants"
import axios from 'axios'

// 카카오 읽기
export const kakaoApi  = async (code: string) => {
  const REST_API_KEY = process.env.NUXT_ENV_KAKAO_REST_API_KEY
  const ADMIN_KEY = process.env.NUXT_ENV_KAKAO_ADMIN_KEY
  const strings : any = {
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: SERVER_URL + '/kakao',
    code: code,
  };
  const kakaoHeader = {
    'Authorization': ADMIN_KEY,
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  const queryString = await Object.keys(strings)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(strings[k]))
    .join('&');
  const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
  // if (result.status !== 200){
  //     return result
  // }
  console.log('결과', result)
  const res = await JSON.parse(result.request.response)
  const ACCESS_TOKEN = await res.access_token
  createToast('카카오 프로필 가져오기')
  return ACCESS_TOKEN
}
