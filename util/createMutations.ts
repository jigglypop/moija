interface IPayload {
  data : object | null
  error: string
}

interface IState {
  data : object | null
  error:  object | null
}

const createMutations = (type: string) =>{
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return {
    async [SUCCESS] (state: IState, payload: IPayload) {
      state.data = payload
      state.error = null
    },
    async [FAILURE] (state: IState, payload: IPayload) {
      state.data = null
      state.error = payload
    },
  }
}

export default createMutations
