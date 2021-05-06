import createMutationClean from "../util/createMutationClean";
import createActions from "../util/createActions";
import { readToggleLikeApi } from "~/api/post";

const type = 'TOGGLELIKE'

export interface IToggleLikeForm {
  userId: string | null
  postId: string | null
}

export interface IToggleLikeState {
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
  ...createMutationClean<IToggleLikeState>(type, state()),
};
export const actions = {
  ...createActions<IToggleLikeForm>(type, readToggleLikeApi),
};
