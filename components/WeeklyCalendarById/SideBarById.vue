<template>
  <div>
    <nav id="navigator" class="navbar" :class="{ navbaropen: opened }"></nav>
    <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
      <a href="#" @click="opened = !opened">
        <div class="component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-record-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </div>
      </a>
      <a href="#">H</a>
      <a href="#">A</a>
      <a href="#">S</a>
      <a href="#">C</a>
    </div>
    <div id="main" :class="{ mainopen: opened }">
      <span class="open-slide"> </span>
      <Header />
      <Filters />
      <RightComponents />
      <div class="calendar-view">
          <MiddleCalendar />
          <TableOfCalendarById/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../CalendarWeeklyAppointments/Header.vue";
import Filters from "../CalendarWeeklyAppointments/Filters.vue";
import RightComponents from "../CalendarWeeklyAppointments/RightComponents.vue";
import MiddleCalendar from "../CalendarWeeklyAppointments/MiddleCalendar.vue"
import TableOfCalendar from "../CalendarWeeklyAppointments/TableOfCalendar.vue"
import TableOfCalendarById from "./TableOfCalendarById.vue"
export default {
  components: {
    Header,
    RightComponents,
    Filters,
    MiddleCalendar,
    TableOfCalendar,
    TableOfCalendarById,
  },
};
</script>
<style></style>