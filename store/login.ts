import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { loginApi } from "~/api/auth";

const type = 'LOGIN'

export interface ILoginForm {
  username: string | null
  password: string | null
}

export const state = () => ({
    register: {
      username: '',
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
  ...createActions<ILoginForm>(type, loginApi),
};
