interface IPayload {
  data : object | null
  error: string
}

interface IState {
  data : object | null
  error: string
}

const createMutations = (type: string) =>{
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return {
    async [SUCCESS] (state: IState, payload: IPayload) {
      state.data = payload
    },
    async [FAILURE] (state: IState, payload: IPayload) {
      state.data = payload
    },
  }
}

export default createMutations
