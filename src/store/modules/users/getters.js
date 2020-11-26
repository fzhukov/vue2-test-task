import {
  getLoadingStatus,
  getFirstColumnUsers,
  getSecondColumnUsers,
  getFilteredFirstColumnUsers,
 } from "./constants";

const getters = {
  [getFirstColumnUsers](state) {
    return state.firstColumn;
  },
  [getSecondColumnUsers](state) {
    return state.secondColumn;
  },
  [getFilteredFirstColumnUsers]: (state, getters) => (queryName = '') => {
    if (queryName) {
      return state.firstColumn.filter((user) => user.name.toLowerCase().includes(queryName.toLowerCase()));
    } else {
      return getters.getFirstColumnUsers;
    }
  },
  [getLoadingStatus](state) {
    return state.loadingStatus;
  },
};

export default getters;