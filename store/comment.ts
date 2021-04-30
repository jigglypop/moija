import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readCommentApi } from "~/api/comment";

const type = 'COMMENT'

export interface ICommentForm {
  postId: string | null
}

export interface ICommentState {
  data: object | null
  error: string
  loading: boolean
  comments: object
  openId: string
}

export const getDefaultState = () => {
  return {
    data: null,
    error: '',
    loading: false,
    comments: null,
    openId: '',
  }
}

export const state = getDefaultState()

export const mutations = {
  ...createMutations(type),
  CLEAR (state: ICommentState) {
    Object.assign(state, getDefaultState())
  },
  SETCOMMENT(state: ICommentState, payload: { comments: object }){
    state.comments = payload.comments
  },
  OPENID(state: ICommentState, payload: { openId: string }){
    if (payload.openId === state.openId){
      state.openId = ''
    } else{
      state.openId = payload.openId
    }
  }
};
export const actions = {
  ...createActions<ICommentForm>(type, readCommentApi),
};
