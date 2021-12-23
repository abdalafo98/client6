<template>
  <div>
    <div :key="index1" v-for="(items, index1) in list.weeklyAppointments">
      <tr :key="index2" v-for="(item, index2) in items.times">
        <th class="drname">&nbsp;{{ item.time }}</th>
        <td :key="index3" v-for="(count, index3) in 7" class="day">
          <!-- {{ item.week[index3].appointments.length }} -->
          <CardEvent
            v-if="item.week[index3].appointments.length === 1"
            :patientName="item.week[index3].appointments[0].consumer_name"
            :doctorName="item.week[index3].appointments[0].provider_name"
            :timeFrom="item.week[index3].appointments[0].start_Time"
            :timeTo="item.week[index3].appointments[0].end_Time"
            :procedure="item.week[index3].appointments[0].service_name"
          />
          <Numbercard
            v-else-if="item.week[index3].appointments.length > 1"
            :number="item.week[index3].appointments[0].length"
          />
        </td>
      </tr>
    </div>
  </div>
</template>
<script>
import CardEvent from "../CalendarWeeklyAppointments/CardEvent.vue";
import Numbercard from "../CalendarWeeklyAppointments/Numbercard.vue";
export default {
  computed: {
    list() {
      console.log("hihihihihihihihih");
      return this.$store.getters.getterAppointment;
    },
  },
  methods: {
    console(value) {
      console.log(value);
    },
  },
  created() {
    this.$store.dispatch("getWeeklyAppointmentById");
  },
  components: { CardEvent, Numbercard },
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
  background: #D3D3D3;
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