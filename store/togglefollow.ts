import createMutationClean from "../util/createMutationClean";
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

export const state = () => ({
  data: null,
  error: '',
  loading: false,
})

export const mutations = {
  ...createMutationClean<IToggleFollowState>(type, state()),
};
export const actions = {
  ...createActions<IToggleFollowForm>(type, readToggleFollowApi),
};
