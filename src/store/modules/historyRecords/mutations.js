import { ADD_RECORD_TO_HISTORY } from './constants';

const mutations = {
  [ADD_RECORD_TO_HISTORY](state, item) {
    const name = item.name.replaceAll(/<[^>]*>/g, '');
    state.push({ ...item, name, date: new Date() });
  },
};

export default mutations;
