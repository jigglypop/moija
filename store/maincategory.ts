import { readMainCategoryApi } from "~/api/maincategory";
import createMutations from "../util/createMutations";
import createActions from "../util/createActions";

const type = 'MAINCATEGORY'

export interface IMainCategoryForm {
  postId: string | null
}

export interface IMainCategoryState {
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
  CLEAR (state: IMainCategoryState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions(type, readMainCategoryApi),
};
