<template>
  <li class="user">
    <div class="content">
      <div class="user__name" v-html="user.name" />
      <div class="user__count" v-visible="user.count">
        &#8981;: {{ user.count }}
      </div>
      <button class="btn btn-move" @click="moveUser(user)">
        {{ btnTitle }}
      </button>
    </div>
    <ul v-if="user.items.length">
      <SubUser
        v-for="(item, index) of user.items"
        :key="item.id"
        :index="index"
        :user="item"
      />
    </ul>
  </li>
</template>

<script>
import SubUser from './SubUser.vue';

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
  components: {
    SubUser,
  },
  methods: {
    moveUser(user) {
      this.$emit('move-user', user);
    },
  },
};
</script>

<style>
@import '../styles/shared.css';

.user {
  display: block;
  margin-bottom: 10px;
}

.user .content {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: #eddcd2;
  margin-bottom: 2px;
}

.user .user__name {
  padding: 6px 8px;
  text-align: center;
  flex-grow: 1;
}

.user .user__count {
  background-color: #eddcd2;
  padding: 6px 8px;
  text-align: center;
  width: 50px;
}

.btn-move {
  background-color: #ddbea9;
}

.btn-move:hover {
  background-color: #b7b7a4;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
