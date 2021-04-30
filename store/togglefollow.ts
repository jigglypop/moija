import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readToggleFollowApi } from "~/api/post";

const type = 'TOGGLEFOLLOW'

export interface IToggleFollowForm {
  followerId: string | null
  followingId: string | null
}

export interface IToggleFollowState {
  data: object | null
  error: string
  loading: boolean
}

export const getDefaultState = () => {
  return {
    data: null,
    error: '',
    loading: false,
  }
}

export const state = getDefaultState()

export const mutations = {
  ...createMutations(type),
  CLEAR (state: IToggleFollowState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<IToggleFollowForm>(type, readToggleFollowApi),
};
