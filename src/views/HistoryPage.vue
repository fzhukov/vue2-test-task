<template>
  <div>
    <h1>History Page{{ this.getFilteredStatusTitle() }}</h1>
    <HistoryRecordList
      v-if="GET_FILTERED_HISTORY_RECORDS(this.status).length"
      :records="GET_FILTERED_HISTORY_RECORDS(this.status)"
    />
    <p v-else>History is empty</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import HistoryRecordList from "@/components/HistoryRecordList";
import { getStatusName } from "@/utils/historyRecord";
import { GET_FILTERED_HISTORY_RECORDS } from "@/store/modules/historyRecords/constants";

export default {
  name: "HistoryPage",
  props: {
    status: String,
  },
  components: {
    HistoryRecordList,
  },
  computed: {
    ...mapGetters([GET_FILTERED_HISTORY_RECORDS]),
  },
  methods: {
    getStatusName(status) {
      return getStatusName(status);
    },
    getFilteredStatusTitle() {
      return this.status ? `: ${getStatusName(this.status)}` : null;
    },
  },
};
</script>

<style scoped>
</style>