<template>
  <div id="app">
    <h1>Application</h1>
    <NavigationMenu />
    <Loader v-if="getLoadingStatus" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { FETCH_USERS, getLoadingStatus } from '@/store/modules/users/constants';
import NavigationMenu from '@/components/NavigationMenu';
import Loader from '@/components/Loader';

export default {
  name: 'App',
  components: {
    NavigationMenu,
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    this.$store.dispatch(FETCH_USERS);
  },
  computed: mapGetters([getLoadingStatus]),
};
</script>

<style>
html {
  background-color: #fff1e6;
  color: #636464;
}

::-moz-selection {
  background: #cb997e;
}

::selection {
  background: #cb997e;
}

a {
  color: #636464;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 25px;
}
</style>
