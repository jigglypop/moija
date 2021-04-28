import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { updateprofileApi } from "~/api/profile";

const type = 'UPDATEPROFILE'

export interface IUpdateProfileForm {
  profileId: string
  nickname: string
  location: string
  imageurl: string
  info: string
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
  ...createActions<IUpdateProfileForm>(type, updateprofileApi),
};
