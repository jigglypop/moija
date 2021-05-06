import createMutationClean from "../util/createMutationClean";
import createActions from "../util/createActions";
import { readLikeApi } from "~/api/post";

const type = 'LIKE'

export interface ILikeForm {
  userId: string | null
  postId: string | null
}

export interface ILikeState {
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
  ...createMutationClean<ILikeState>(type, state()),

};
export const actions = {
  ...createActions<ILikeForm>(type, readLikeApi),
};
