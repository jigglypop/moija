import createMutationClean from "../util/createMutationClean";
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

export const state = () => ({
  data: null,
  error: '',
  loading: false,
})

export const mutations = {
  ...createMutationClean<IFollowState>(type, state()),
};
export const actions = {
  ...createActions<IFollowForm>(type, readFollowApi),
};
