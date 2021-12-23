<template>
  <div>
    <div :key="index1" v-for="(items, index1) in list.dailyAppointments">
      <tr :key="index2" v-for="(item, index2) in items.times">
        <th class="drname">&nbsp;{{ item.time }}</th>
        <td
          :key="index3"
          v-for="(count, index3) in item.appointments.length < 7
            ? 7
            : item.appointments.length"
          class="day"
        >
          <div v-if="index3 < item.appointments.length">
            <CardEvent
              :patientName="item.appointments[index3].consumer_name"
              :doctorName="item.appointments[index3].provider_name"
              :timeFrom="item.appointments[index3].start_Time"
              :timeTo="item.appointments[index3].end_Time"
              :procedure="item.appointments[index3].service_name"
            />
          </div>
        </td>
      </tr>
    </div>
  </div>
</template>

<script>
import CardEvent from "../CalendarWeeklyAppointments/CardEvent.vue";
import Numbercard from "../CalendarWeeklyAppointments/Numbercard.vue";
export default {
  components: { CardEvent, Numbercard },

  computed: {
    list() {
      return this.$store.getters.getterDailyAppoinmentById;
    },

  },
  created() {
    this.$store.dispatch("getDailyAppinmentsById");
  },
};
</script>

<style>
#calendar tr,
#calendar tbody {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
}

#calendar .days li:hover {
  background: #d3d3d3;
}

.drname {
  border-left: none !important;
  border-right: none !important;
}
.drname {
  width: 98%;
  border-left: none !important;
  background-color: #fff;
  padding-top: 55px !important;
  color: #949191;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
}
</style>
