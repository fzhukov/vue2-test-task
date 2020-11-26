import {
  getLoadingStatus,
  getFirstColumnUsers,
  getSecondColumnUsers,
  getFilteredFirstColumnUsers,
} from './constants';

const getters = {
  [getFirstColumnUsers](state) {
    return state.firstColumn;
  },
  [getSecondColumnUsers](state) {
    return state.secondColumn;
  },
  [getFilteredFirstColumnUsers]: (state, gettersArg) => (queryName = '') => {
    if (queryName) {
      return state.firstColumn
        .filter((user) => user.name.toLowerCase().includes(queryName.toLowerCase()));
    }
    return gettersArg.getFirstColumnUsers;
  },
  [getLoadingStatus](state) {
    return state.loadingStatus;
  },
};

export default getters;
