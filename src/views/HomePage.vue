<template>
  <div>
    <h1>Home Page</h1>
    <div class="row">
      <div class="col">
        <p>First column</p>
        <UserSearch @changed-name="changedName" />
        <UserList
          btnTitle="Add"
          :status="recordStatus().ADDED"
          :users="getFilteredFirstColumnUsers(name)"
          @move-user-to-column="moveToSecondColumn"
        />
      </div>
      <div class="col">
        <p>Second column</p>
        <UserList
          class="second-user-list"
          btnTitle="Remove"
          :status="recordStatus().DELETED"
          :users="getSecondColumnUsers"
          @move-user-to-column="moveToFirstColumn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import {
  getSecondColumnUsers,
  getFilteredFirstColumnUsers,
  MOVE_TO_FIRST_COLUMN,
  MOVE_TO_SECOND_COLUMN,
} from "@/store/modules/users/constants";

import { RECORD_STATUS } from "@/constants/recordStatus";
import UserSearch from "@/components/UserSearch";
import UserList from "@/components/UserList";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
    };
  },
  components: {
    UserList,
    UserSearch,
  },
  computed: mapGetters([getSecondColumnUsers, getFilteredFirstColumnUsers]),
  methods: {
    moveToFirstColumn(id) {
      this.$store.dispatch(MOVE_TO_FIRST_COLUMN, id);
    },
    moveToSecondColumn(id) {
      this.$store.dispatch(MOVE_TO_SECOND_COLUMN, id);
    },
    changedName(name) {
      this.name = name;
    },
    recordStatus() {
      return RECORD_STATUS;
    },
  },
};
</script>

<style scoped >
.row {
  display: flex;
  justify-content: space-around;
}

.col {
  width: 45%;
}

.second-user-list {
  margin-top: 59px;
}
</style>