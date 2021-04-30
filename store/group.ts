import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readGroupApi } from "~/api/group";

const type = 'GROUP'

export interface IGroupForm {
  groupId: string | null
}

export interface IGroupState {
  profiles: object | null
  isSlice: boolean
  isJoin: boolean
  data: {
    profiles : object[]
  }
  error: string
  loading: boolean
}

export const getDefaultState = () => {
  return {
    profiles: null,
    isSlice: false,
    isJoin: false,
    data: null,
    error: '',
    loading: false,
  }
}

export const state = getDefaultState()

export const mutations = {
  ...createMutations(type),
  SLICE(state: IGroupState){
    if (state.data){
      state.profiles = state.data.profiles.slice(0, 5)
      if (state.data.profiles.length > 5){
        state.isSlice = true
      }
    }
  },
  ISJOIN(state: IGroupState, payload: { profileId : string }){
    state.isJoin = false
    if (state.data){
      if (state.data.profiles){
        for (let profile of state.data.profiles){
          const _profile : any = { ...profile }
          if (payload.profileId === _profile.id){
            state.isJoin = true
            break
          }
        }
      }
    }
  },
  CLEAR (state: IGroupState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<IGroupForm>(type, readGroupApi),
};

export const getters = {

}
