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
  background-color: rgb(201, 125, 55);
  padding: 2px 6px;
  color: #ffffff;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.45);
  text-align: center;
}

.status-added {
  background-color: rgb(62, 126, 67);
}

.status-deleted {
  background-color: rgb(224, 61, 94);
}

.history-date {
  width: 220px;
  background-color: rgb(68, 62, 53);
  padding: 2px 6px;
  color: #ffffff;
  box-sizing: border-box;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.45);
  text-align: center;
}

.history-id {
  width: 230px;
  background-color: rgb(196, 104, 29);
  padding: 2px 6px;
  color: #ffffff;
  box-sizing: border-box;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.45);
  text-align: center;
}

.history-name {
  width: 200px;
  background-color: rgb(68, 123, 185);
  padding: 2px 6px;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.45);
  text-align: center;
}
</style>
