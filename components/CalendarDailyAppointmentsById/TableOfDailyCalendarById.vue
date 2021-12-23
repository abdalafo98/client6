<template>
  <div class="calendar-view">
    <table id="calendar">
      <!--  days -->
      <!-- <TableHeaderDaily/>
      <TableRowDaily/> -->
      <TableRowDailyById/>
    </table>
  </div>
</template>

<script>
import TableRowDailyById from "./TableRowDailyById.vue";


export default { components: { TableRowDailyById } };
</script>

<style>
#calendar {
  width: 90%;
  grid-template-columns: repeat(7, 12.2%);
  margin-left: 4%;
  margin: auto;
}

#calendar a {
  color: #949191;
  text-decoration: none;
}
</style>
