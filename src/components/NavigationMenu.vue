<template>
  <nav class="nav-menu">
    <router-link to="/">Home</router-link>
    <router-link
      :to="{
        path: '/history',
      }"
    >
      History records
    </router-link>
    <router-link
      :to="{
        path: '/history',
        query: { status: 'added' },
      }"
    >
      Only added record
    </router-link>
    <router-link
      :to="{
        path: '/history',
        query: { status: 'deleted' },
      }"
    >
      Only deleted records
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
};
</script>

<style scoped>
.nav-menu {
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #eddcd2;
}

.nav-menu a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-menu a:hover:not(.router-link-exact-active) {
  background-color: #ddbea9;
}

.nav-menu a.router-link-exact-active {
  background-color: #b7b7a4;
}
</style>
