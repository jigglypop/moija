import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readProfileApi } from "~/api/profile";

const type = 'PROFILE'

export interface IProfileForm {
  profileId: string | null
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
  ...createActions<IProfileForm>(type, readProfileApi),
};
