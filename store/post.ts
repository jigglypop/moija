import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readPostApi } from "~/api/post";

const type = 'POST'

export interface IPostForm {
  postId: string | null
}

export interface IPostState {
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
  CLEAR (state: IPostState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<IPostForm>(type, readPostApi),
};
