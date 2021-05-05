import createMutationClean from "../util/createMutationClean";
import createActions from "../util/createActions";
import { updateprofileApi } from "~/api/profile";

const type = 'UPDATEPROFILE'

export interface IUpdateProfileForm {
  profileId: string
  nickname: string
  location: string
  imageurl: string
  info: string
}
export interface IUpdateProfileState {
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
  ...createMutationClean<IUpdateProfileState>(type, state()),
};
export const actions = {
  ...createActions<IUpdateProfileForm>(type, updateprofileApi),
};
