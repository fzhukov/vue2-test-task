<template>
  <li>
    <span
      :class="{
        'history-status': true,
        'status-added': record.status === recordStatus().ADDED,
        'status-deleted': record.status === recordStatus().DELETED,
      }"
    >
      {{ getStatusName(record.status) }}
    </span>
    <span class="history-date">{{ formatDate(record.date) }}</span>
    <span class="history-id">{{ record.id }}</span>
    <span class="history-name">{{ record.name }}</span>
  </li>
</template>

<script>
import formatDate from '@/utils/date';
import getStatusName from '@/utils/historyRecord';
import RECORD_STATUS from '@/constants/recordStatus';

export default {
  name: 'HistoryRecord',
  props: {
    record: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return formatDate(date);
    },
    getStatusName(status) {
      return getStatusName(status);
    },
    recordStatus() {
      return RECORD_STATUS;
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  margin-bottom: 7px;
  justify-content: center;
}

.history-status {
  width: 80px;
  background-color: #eddcd2;
  padding: 2px 6px;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  text-align: center;
}

.status-added {
  background-color: #a5a58d;
}

.status-deleted {
  background-color: #cb997e;
}

.history-date {
  width: 220px;
  background-color: #ddbea9;
  padding: 2px 6px;
  box-sizing: border-box;
  text-align: center;
}

.history-id {
  width: 230px;
  background-color: #eddcd2;
  padding: 2px 6px;
  box-sizing: border-box;
  text-align: center;
}

.history-name {
  width: 200px;
  background-color: #b7b7a4;
  padding: 2px 6px;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;
  text-align: center;
}
</style>
