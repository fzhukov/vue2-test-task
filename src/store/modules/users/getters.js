import {
  GET_LOADING_STATUS,
  GET_FIRST_COLUMN_USERS,
  GET_SECOND_COLUMN_USERS,
  GET_FILTERED_FIRST_COLUMN_USERS,
 } from "./constants";

const getters = {
  [GET_FIRST_COLUMN_USERS](state) {
    return state.firstColumn;
  },
  [GET_SECOND_COLUMN_USERS](state) {
    return state.secondColumn;
  },
  [GET_FILTERED_FIRST_COLUMN_USERS]: (state, getters) => (queryName = '') => {
    if (queryName) {
      return state.firstColumn.filter((user) => user.name.toLowerCase().includes(queryName.toLowerCase()));
    } else {
      return getters.GET_FIRST_COLUMN_USERS;
    }
  },
  [GET_LOADING_STATUS](state) {
    return state.loadingStatus;
  },
};

export default getters;