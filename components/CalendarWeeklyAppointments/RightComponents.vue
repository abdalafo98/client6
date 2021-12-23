<template>
  <div class="right-components">
    <AddAppointmentIcon />
    <TodoIcon />
    <CurrentAppointmentsIcon />
  </div>
</template>

<script>
import AddAppointmentIcon from "./AddAppointmentIcon.vue";
import TodoIcon from "./TodoIcon.vue";
import CurrentAppointmentsIcon from "./CurrentAppointmentsIcon.vue";
export default {
  components: { AddAppointmentIcon, TodoIcon, CurrentAppointmentsIcon },
};
</script>

<style>
.right-components {
  float: right;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 0.6%;
  position: fixed;
  top: 96px;
}
</style>
