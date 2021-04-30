import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { writeCommentApi } from "~/api/comment";

const type = 'WRITECOMMENT'

export interface IWriteCommentForm {
  postId: string | null
  commentId : string | null
  content: string
}

export interface IWriteCommentState {
  data: object | null
  error: string
  loading: boolean
  comments: object
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
  CLEAR (state: IWriteCommentState) {
    Object.assign(state, getDefaultState())
  },
};
export const actions = {
  ...createActions<IWriteCommentForm>(type, writeCommentApi),
};
