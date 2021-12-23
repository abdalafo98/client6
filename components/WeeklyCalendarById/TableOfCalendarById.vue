<template>
  <div class="calendar-view">
    <table id="calendar">
      <TableHeader />
      <TableTimeRow />
    </table>
  </div>
</template>
<script>
import TableHeader from "../CalendarWeeklyAppointments/TableHeader.vue";
import TableTimeRow from "./TableTimeRow.vue";
export default {
  components: {
    TableHeader,
    TableTimeRow,
  },
};
</script>
<style></style>