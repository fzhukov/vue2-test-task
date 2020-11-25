import { ADD_RECORD_TO_HISTORY } from './constants';

const actions = {
  [ADD_RECORD_TO_HISTORY]({ commit }, item) {
    commit(ADD_RECORD_TO_HISTORY, item)
  },
};

export default actions;
