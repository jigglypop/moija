
interface IState {
  commit: (name: string, data: object) => void
}
interface IResponse {
  type: string
  data: object
}
const createActions = <IForm>(type: string , funcApi :(payload: IForm) => Promise<IResponse>) =>{
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return {
    async [type]({ commit }: IState, payload: IForm){
      const res = await funcApi(payload)
      if (res.type === 'SUCCESS'){
        commit(SUCCESS, res.data)
      } else{
        commit(FAILURE, res.data)
      }
    }
  }
}

export default createActions
