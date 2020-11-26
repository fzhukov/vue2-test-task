import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const historyRecordStoreModule = {
  state: () => [],
  actions,
  mutations,
  getters,
};

export default historyRecordStoreModule;
