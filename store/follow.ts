import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readFollowApi } from "~/api/post";

const type = 'FOLLOW'

export interface IFollowForm {
  followerId: string | null
  followingId: string | null
}

export interface IFollowState {
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
  CLEAR (state: IFollowState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<IFollowForm>(type, readFollowApi),
};
