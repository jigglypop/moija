import createMutations from "../util/createMutations";
import createActions from "../util/createActions";
import { readLocationApi } from "~/api/location";

const type = 'LOCATION'

export interface ILocationForm {
  maincategoryId: string | null
  locationname: string | null
}

export const state = () => ({
  location: {
    maincategoryId: '',
    locationname: '',
  },
  data: null,
  error: null,
  loading: false,
});

export const mutations = {
  ...createMutations(type),
};
export const actions = {
  ...createActions(type, readLocationApi),
};
