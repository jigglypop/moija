import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { joinApi } from "~/api/group";

const type = 'JOIN'

export interface IJoinForm {
  profileId: string | null
  groupId: string | null
}

export const state = () => ({
  data: null,
  error: '',
  loading: false,
});

export const mutations = {
  ...createMutations(type),
  async SETGROUP({ commit } : any ,state: any, payload: any){
    await commit('group/GROUP', payload.group)
    state.data = await null
  }
};
export const actions = {
  ...createActions<IJoinForm>(type, joinApi),
};
