import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readPostApi } from "~/api/post";

const type = 'POST'

export interface IPostForm {
  postId: string | null
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
  ...createActions<IPostForm>(type, readPostApi),
};
