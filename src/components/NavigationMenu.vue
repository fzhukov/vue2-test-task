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
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

.nav-menu a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-menu a:hover:not(.router-link-exact-active) {
  background-color: #ddd;
}

.nav-menu a.router-link-exact-active {
  color: white;
  background-color: rgb(68, 123, 185);
}
</style>
