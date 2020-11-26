import {
  getHistoryRecords,
  getFilteredHistoryRecords
} from "./constants";

const getters = {
  [getHistoryRecords](state) {
    return state;
  },
  [getFilteredHistoryRecords]: (state, getters) => (status = '') => {
    if (status) {
      return state.filter((item) => item.status.toLowerCase().includes(status.toLowerCase()));
    } else {
      return getters.getHistoryRecords;
    }
  },
};

export default getters;