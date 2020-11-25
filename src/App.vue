<template>
  <div id="app">
    <h1>Application</h1>
    <NavigationMenu />
    <Loader v-if="GET_LOADING_STATUS" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import {
  FETCH_USERS,
  GET_LOADING_STATUS,
} from "@/store/modules/users/constants";
import NavigationMenu from "@/components/NavigationMenu";
import Loader from "@/components/Loader";

export default {
  name: "App",
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
  computed: mapGetters([GET_LOADING_STATUS]),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}
</style>
