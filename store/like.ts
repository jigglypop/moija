import createMutations from "../util/createMutations";
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
  CLEAR (state: ILikeState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<ILikeForm>(type, readLikeApi),
};
