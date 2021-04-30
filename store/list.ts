import createMutations from "../util/createMutations";
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
  CLEAR (state: IListState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions<IListForm>(type, readListPageApi),
};
