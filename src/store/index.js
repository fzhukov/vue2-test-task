import Vue from 'vue';
import Vuex from 'vuex';

import userStoreModule from './modules/users';
import historyRecordStoreModule from './modules/historyRecords';

Vue.use(Vuex);

export default new Vuex.Store({
  devtools: true,
  modules: {
    users: userStoreModule,
    historyRecords: historyRecordStoreModule,
  },
});
