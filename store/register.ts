import createMutationClean from "../util/createMutationClean";
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
export interface IRegisterState {
  data: object | null
  error: string
  loading: boolean
}
export const mutations = {
  ...createMutationClean<IRegisterState>(type, state()),
};
export const actions = {
  ...createActions<IResiterForm>(type, registerApi),
};
