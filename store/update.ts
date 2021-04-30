import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { updateApi } from "~/api/post";

const type = 'UPDATE'

export interface IUpdateForm {
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
  ...createActions<IUpdateForm>(type, updateApi),
};
