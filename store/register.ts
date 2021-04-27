import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { registerApi } from "~/api/auth";

const type = 'REGISTER'

export interface IResiterForm {
  username: string | null
  email: string | null
  password: string | null
}

export const state = () => ({
    register: {
      username: '',
      email: '',
      password: '',
    },
    data: null,
    error: '',
    loading: false,
});

export const mutations = {
  ...createMutations(type),
};
export const actions = {
  ...createActions<IResiterForm>(type, registerApi),
};
