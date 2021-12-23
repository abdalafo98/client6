<template>
  <div class="calendar-view">
    <table id="calendar">
      <!--  days -->
      <TableHeaderDaily/>
      <TableRowDaily/>
    </table>
  </div>
</template>

<script>
import TableRowDaily from "./TableRowDaily.vue";
import TableHeaderDaily from "./TableHeaderDaily.vue";

export default { components: { TableRowDaily, TableHeaderDaily } };
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
