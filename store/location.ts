import createMutationClean from "../util/createMutationClean";
import createActions from "../util/createActions";
import { readLocationApi } from "~/api/location";

const type = 'LOCATION'

export interface ILocationForm {
  maincategoryId: string | null
  locationname: string | null
}

export interface ILocationState {
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
  ...createMutationClean<ILocationState>(type, state()),
};
export const actions = {
  ...createActions(type, readLocationApi),
};
