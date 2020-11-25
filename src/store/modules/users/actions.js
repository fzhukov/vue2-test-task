import { UserPresenter } from "@/presenters/UserPresenter";
import {
  FETCH_USERS,
  MOVE_TO_FIRST_COLUMN,
  MOVE_TO_SECOND_COLUMN,
  SET_ITEMS,
  SET_LOADING_STATUS,
 } from "./constants";

const actions = {
  async [FETCH_USERS]({ commit }) {
    commit(SET_LOADING_STATUS, true);

    const firstColumn = await UserPresenter.getUsers();

    commit(SET_ITEMS, firstColumn);
    commit(SET_LOADING_STATUS, false);
  },
  [MOVE_TO_FIRST_COLUMN]({ commit }, id) {
    commit(MOVE_TO_FIRST_COLUMN, id)
  },
  [MOVE_TO_SECOND_COLUMN]({ commit }, id) {
    commit(MOVE_TO_SECOND_COLUMN, id)
  },
  
};

export default actions;