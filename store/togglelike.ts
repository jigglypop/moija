import createMutations from "../util/createMutations";
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
  CLEAR (state: IToggleLikeState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<IToggleLikeForm>(type, readToggleLikeApi),
};
