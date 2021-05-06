import createActions from "../util/createActions";
import { readPostApi } from "~/api/post";
import createMutationClean from "~/util/createMutationClean";

const type = 'POST'

export interface IPostForm {
  postId: string | null
}

export interface IPostState {
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
  ...createMutationClean<IPostState>(type, state()),
};
export const actions = {
  ...createActions<IPostForm>(type, readPostApi),
};
