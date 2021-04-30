import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { deleteApi } from "~/api/post";

const type = 'DELETE'

export interface IDeleteForm {
  postId: string;
  title: string
  content: string;
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
  ...createActions<IDeleteForm>(type, deleteApi),
};
