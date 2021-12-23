<template>
  <div class="middle">
    <DocotorList />
    <DailyHeaderCalendar/>
  </div>
</template>

<script>
import DocotorList from "../CalendarWeeklyAppointments/DocotorList.vue";
import DailyHeaderCalendar from "./DailyHeaderCalendar.vue";
export default {
  components: { DocotorList, DailyHeaderCalendar },
};
</script>

<style></style>
