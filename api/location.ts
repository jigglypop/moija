import { SERVER_URL } from "~/api/constants"
import { ILocationForm } from "~/store/location"

// 로케이션
export const readLocationApi  = async (payload: ILocationForm)  => {
    const res = await fetch(`${SERVER_URL}/api/location/${payload.maincategoryId}/${payload.locationname}`)
    if (res.status != 200){
      const error = await res.json()
      return { type:'FAILURE', data: error.error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data.data }
}
