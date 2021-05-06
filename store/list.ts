import createMutationClean from "../util/createMutationClean";
import createActions from "../util/createActions";
import { readListPageApi } from "~/api/group";

const type = 'LIST'

export interface IListForm {
  categoryId: string | null
  page: string | null
}

export interface IListState {
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
  ...createMutationClean<IListState>(type, state()),
};
export const actions = {
  ...createActions<IListForm>(type, readListPageApi),
};
