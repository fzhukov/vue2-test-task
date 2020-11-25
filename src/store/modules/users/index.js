import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const userStoreModule = {
  state: () => {
    return {
      firstColumn: [],
      secondColumn: [],
      loadingStatus: false,
    }
  },
  actions,
  mutations,
  getters,
}

export default userStoreModule;
