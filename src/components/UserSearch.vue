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
@import '../styles/shared.css';

.form-search {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.input-search {
  flex-grow: 1;
  margin-right: 5px;
  border: 1px solid #636464;
  color: #636464;
  outline: #636464;
  padding: 0 5px;
  background-color: #fff1e6;
}

.btn-submit {
  background-color: #eddcd2;
  margin-right: 5px;
}

.btn-reset {
  background-color: #eddcd2;
}

.btn-submit:hover {
  background-color: #b7b7a4;
}

.btn-reset:hover {
  background-color: #ddbea9;
}
</style>
