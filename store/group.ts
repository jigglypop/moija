import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readGroupApi } from "~/api/group";

const type = 'GROUP'

export interface IGroupForm {
  groupId: string | null
}

export const state = () => ({
  profiles: null,
  isSlice: false,
  isJoin: false,
  data: null,
  error: '',
  loading: false,
});

export const mutations = {
  ...createMutations(type),
  SLICE(state: any){
    if (state.data){
      if (state.data.profiles.length > 5){
        state.profiles = state.data.profiles.slice(0, 5)
        state.isSlice = true
      }
    }
  },
  ISJOIN(state: any, payload: any){
    if (state.data){
      if (state.data.profiles.length){
        let join = state.data.profiles.filter((item : any) =>  item.id === payload.profileId)
        console.log(join.length, join.length > 0)
        if (join.length > 0){
          state.isJoin = true
        }
      }
    }
  }
};
export const actions = {
  ...createActions<IGroupForm>(type, readGroupApi),
};

export const getters = {

}
