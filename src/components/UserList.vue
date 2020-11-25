<template>
  <div>
    <ul v-if="users.length">
      <User
        v-for="(user, index) of users"
        :key="index"
        :user="user"
        :index="index"
        :btnTitle="btnTitle"
        @move-user="moveUser"
      />
    </ul>
    <p v-else>No data</p>
  </div>
</template>

<script>
import User from '@/components/User';
import { ADD_RECORD_TO_HISTORY } from '@/store/modules/historyRecords/constants';

export default {
  name: 'UserList',
  props: {
    users: Array,
    status: String,
    btnTitle: String,
  },
  components: {
    User,
  },
  methods: {
    moveUser(user) {
      this.$emit('move-user-to-column', user.id);
      this.$store.dispatch(ADD_RECORD_TO_HISTORY, {
        ...user,
        status: this.status,
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 15px;
}
</style>