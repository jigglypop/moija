import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { writeGroupApi } from "~/api/group";

const type = 'WRITEGROUP'

export interface IWriteGroupForm {
  locationId: string;
  name: string
  info: string;
  imageurl: string;
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
  ...createActions<IWriteGroupForm>(type, writeGroupApi),
};
