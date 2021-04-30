import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { deleteCommentApi } from "~/api/comment";

const type = 'DELETECOMMENT'

export interface IDeleteCommentForm {
  postId: string;
  commentId: string;
}

export const state = () => ({
  data: null,
  error: '',
  loading: false,
});

export const mutations = {
  ...createMutations(type),
};
export const actions = {
  ...createActions<IDeleteCommentForm>(type, deleteCommentApi),
};
