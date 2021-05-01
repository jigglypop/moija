import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readProfileApi } from "~/api/profile";

const type = 'PROFILE'

export interface IProfileForm {
  profileId: string | null
}

export interface IProfileState {
  data: object | null
  error: string
  loading: boolean
}

export const getState = () => {
  return {
    data: null,
    error: '',
    loading: false,
  }
}

export const state = getState()

export const mutations = {
  ...createMutations(type),
  CLEAR (state: IProfileState) {
    Object.assign(state, getState())
  }
};
export const actions = {
  ...createActions<IProfileForm>(type, readProfileApi),
};
