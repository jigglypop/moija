import { readMainCategoryApi } from "~/api/maincategory";
import createMutationClean from "../util/createMutationClean";
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

export const state = () => ({
  data: null,
  error: '',
  loading: false,
})

export const mutations = {
  ...createMutationClean<IMainCategoryState>(type, state()),
  SETMAINCATEGORY(state: IMainCategoryState, payload: { data: object }){
    state.data = payload.data
  },
};
export const actions = {
  ...createActions(type, readMainCategoryApi),
};
