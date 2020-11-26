import {
  MOVE_TO_FIRST_COLUMN,
  MOVE_TO_SECOND_COLUMN,
  SET_ITEMS,
  SET_LOADING_STATUS,
} from './constants';

const mutations = {
  [SET_ITEMS](state, firstColumn) {
    state.firstColumn = firstColumn;
  },
  [MOVE_TO_FIRST_COLUMN](state, id) {
    const findedItem = state.secondColumn.find((user) => user.id === id);
    state.firstColumn.push(findedItem);
    state.secondColumn = state.secondColumn.filter((user) => user.id !== id);
  },
  [MOVE_TO_SECOND_COLUMN](state, id) {
    const findedItem = state.firstColumn.find((user) => user.id === id);
    state.secondColumn.push(findedItem);
    state.firstColumn = state.firstColumn.filter((user) => user.id !== id);
  },
  [SET_LOADING_STATUS](state, newStatus) {
    state.loadingStatus = newStatus;
  },
};

export default mutations;
