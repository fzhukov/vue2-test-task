<template>
  <form class="form-search" @submit.prevent="onSubmit">
    <input class="input-search" type="text" v-model="name" placeholder="Name" />
    <button class="btn btn-submit" type="submit">Search</button>
    <button class="btn btn-reset" type="reset" @click="onReset">
      Reset filter
    </button>
  </form>
</template>

<script>
export default {
  name: 'UserSearch',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('changed-name', this.name);
    },
    onReset() {
      this.name = '';
      this.onSubmit();
    },
  },
};
</script>

<style scoped>
@import "../styles/shared.css";

.form-search {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.input-search {
  flex-grow: 1;
  margin-right: 5px;
}

.btn-submit {
  background-color: #4caf50;
  margin-right: 5px;
}

.btn-reset {
  background-color: rgb(224, 61, 94);
}

.btn-submit:hover {
  background-color: #409143;
}

.btn-reset:hover {
  background-color: rgb(196, 56, 84);
}
</style>
