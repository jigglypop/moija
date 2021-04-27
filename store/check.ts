import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { checkApi } from "~/api/auth";

const type = 'CHECK'

export const state = () => ({
    data: null,
    error: '',
    loading: false,
});

export const mutations = {
  ...createMutations(type),
};
export const actions = {
  ...createActions(type, checkApi),
};
