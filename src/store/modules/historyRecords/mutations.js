import { ADD_RECORD_TO_HISTORY } from './constants';

const mutations = {
  [ADD_RECORD_TO_HISTORY](state, item) {
    state.push({ ...item, date: new Date() });
  },
};

export default mutations;
