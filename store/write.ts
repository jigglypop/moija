import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { writeApi } from "~/api/post";

const type = 'WRITE'

export interface IWriteForm {
  categoryId: string;
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
  ...createActions<IWriteForm>(type, writeApi),
};
