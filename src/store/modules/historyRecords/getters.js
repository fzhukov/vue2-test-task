import {
  getHistoryRecords,
  getFilteredHistoryRecords,
} from './constants';

const getters = {
  [getHistoryRecords](state) {
    return state;
  },
  [getFilteredHistoryRecords]: (state, gettersArg) => (status = '') => {
    if (status) {
      return state.filter((item) => item.status.toLowerCase().includes(status.toLowerCase()));
    }
    return gettersArg.getHistoryRecords;
  },
};

export default getters;
