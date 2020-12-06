<template>
  <li class="sub-user">
    <div class="sub-margin" />
    <div class="sub-user__name" v-html="user.name" />
  </li>
</template>

<script>
export default {
  name: 'SubUser',
  props: {
    user: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
.sub-margin {
  width: 15px;
  background: #cb997e;
}

.sub-user {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 0 0 2px;
}

.sub-user .sub-user__name {
  background-color: #eddcd2;
  padding: 6px 8px;
  text-align: center;
  text-indent: -120px;
  flex-grow: 1;
}
</style>
