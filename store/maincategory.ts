import { readMainCategoryApi } from "~/api/maincategory";
import createMutations from "../util/createMutations";
import createActions from "../util/createActions";

export const type = 'MAINCATEGORY'

export const state = () => ({
  data: null,
  error: null,
  loading: false,
});

export const mutations = {
  ...createMutations(type),
};
export const actions = {
  ...createActions(type, readMainCategoryApi),
};
