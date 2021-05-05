import createMutationClean from "../util/createMutationClean";
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

export const state = () => ({
  data: null,
  error: '',
  loading: false,
})

export const mutations = {
  ...createMutationClean<IProfileState>(type, state()),
};
export const actions = {
  ...createActions<IProfileForm>(type, readProfileApi),
};
