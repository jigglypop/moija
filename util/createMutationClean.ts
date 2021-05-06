interface IPayload {
  data : object | null
  error: string
}

interface IState {
  data : object | null
  error:  object | null
}

const createMutationClean = <IMixedState>(type: string, initialState: IMixedState) =>{
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  const init = () => {
    return {...initialState}
  }
  return {
    async [SUCCESS] (state: IState, payload: IPayload) {
      state.data = payload
      state.error = null
    },
    async [FAILURE] (state: IState, payload: IPayload) {
      state.data = null
      state.error = payload
    },
    CLEAR(state: IMixedState) {
      Object.assign(state, init())
    },
    SETERROR(state: IState, payload: IPayload){
      state.error = payload
    }
  }
}

export default createMutationClean
