<template>
  <li class="user">
    <span>{{ user.name }}</span>
    <button class="btn btn-move" @click="moveUser(user)">{{ btnTitle }}</button>
  </li>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
    index: Number,
    btnTitle: String,
  },
  methods: {
    moveUser(user) {
      this.$emit('move-user', user);
    },
  },
};
</script>

<style scoped>
@import '../styles/shared.css';

.user {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2px;
}

.user span {
  background-color: #f3f3f3;
  padding: 6px 8px;
  text-align: center;
  flex-grow: 1;
}
.btn-move {
  background-color: #4caf50;
}

.btn-move:hover {
  background-color: #409143;
}
</style>
