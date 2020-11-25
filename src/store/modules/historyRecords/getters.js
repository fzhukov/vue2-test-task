import {
  GET_HISTORY_RECORDS,
  GET_FILTERED_HISTORY_RECORDS
} from "./constants";

const getters = {
  [GET_HISTORY_RECORDS](state) {
    return state;
  },
  [GET_FILTERED_HISTORY_RECORDS]: (state, getters) => (status = '') => {
    if (status) {
      return state.filter((item) => item.status.toLowerCase().includes(status.toLowerCase()));
    } else {
      return getters.GET_HISTORY_RECORDS;
    }
  },
};

export default getters;