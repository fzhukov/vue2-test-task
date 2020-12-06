import UserPresenter from '@/presenters/UserPresenter';
import {
  getLoadingStatus,
  getFirstColumnUsers,
  getSecondColumnUsers,
  getFilteredUsers,
} from './constants';

const getters = {
  [getFirstColumnUsers](state) {
    return state.firstColumn;
  },
  [getSecondColumnUsers](state) {
    return state.secondColumn;
  },
  [getFilteredUsers]: (state, gettersArg) => (queryName = '') => {
    if (queryName) {
      return UserPresenter.filteredUsers(state.firstColumn, queryName.toLowerCase());
    }
    return gettersArg.getFirstColumnUsers;
  },
  [getLoadingStatus](state) {
    return state.loadingStatus;
  },
};

export default getters;
