<template>
  <div class="calendar-view">
    <table id="calendar">
      <!--  days -->
      <TableHeader />
      <TableRow />
    </table>
  </div>
</template>

<script>
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";
export default { components: { TableHeader, TableRow } };
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
