<template>
  <ul class="history-records-list">
    <HistoryRecord
      v-for="(record, index) of records"
      :key="index"
      :record="record"
    />
  </ul>
</template>

<script>
import HistoryRecord from '@/components/HistoryRecord';

export default {
  name: 'HistoryRecordList',
  props: {
    records: Array,
  },
  components: {
    HistoryRecord,
  },
};
</script>

<style scoped>
.history-records-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
