import createMutations from "../util/createMutations";
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
export const getDefaultState = () => {
  return {
    data: null,
    error: '',
    loading: false,
  }
}
export const state = getDefaultState()

export const mutations = {
  ...createMutations(type),
  CLEAR (state: ILocationState) {
    Object.assign(state, getDefaultState())
  }
};
export const actions = {
  ...createActions(type, readLocationApi),
};
