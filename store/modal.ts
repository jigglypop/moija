interface IOpen {
  openname: string
}

export const state = () => ({
  openname: '',
});

export const mutations = {
  LOGIN(state: IOpen) {
    state.openname = 'login'
  },
  REGISTER(state: IOpen) {
    state.openname = 'register'
  },
  JOIN(state: IOpen) {
    state.openname = 'join'
  },
  CLOSE(state: IOpen) {
    state.openname = ''
  },
};

