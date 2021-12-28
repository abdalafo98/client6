<template>
  <div>
    <div :key="index1" v-for="(items, index1) in list.dailyAppointments">
      <tr :key="index2" v-for="(item, index2) in items.times">
        <th class="drname">&nbsp;{{ item.time }}</th>
        <td
          class="day"
          :key="index3"
          v-for="(i, index3) in item.filter.length < 7 ? 7 : item.filter.length"
        >
          <!-- {{ item.filter[index3].appointments.length }} -->
          <div v-if="index3 < item.filter.length">
            <CardEvent
              v-if="item.filter[index3].appointments.length === 1"
              :patientName="item.filter[index3].appointments[0].consumer_name"
              :doctorName="item.filter[index3].appointments[0].provider_name"
              :timeFrom="item.filter[index3].appointments[0].start_Time"
              :timeTo="item.filter[index3].appointments[0].end_Time"
              :procedure="item.filter[index3].appointments[0].service_name"
              :patient="item.filter[index3].appointments[0].consumer_name"
              :nameUser="item.filter[index3].appointments[0].provider_name"
              :Assistant="item.filter[index3].appointments[0].assistant_name"
              :RoomNo="item.filter[index3].appointments[0].room_name"
              :Insurance="item.filter[index3].appointments[0].insurance"
              :Priority="item.filter[index3].appointments[0].priority"
            />
            <Numbercard
              v-else-if="item.filter[index3].appointments.length > 1"
              :number="item.filter[index3].appointments[0].length"
              @change-id="changeId(item.filter[index3].id)"
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
  data() {
    return {
      list3: this.list2.length,
    };
  },
  computed: {
    list: function () {
      return this.$store.getters.getterDailyAppoinment;
    },
  },
  methods: {
    changeId(id) {
  
      this.$store.dispatch("changeDailyUserId", {
        dailyUserId: id,
      });

      this.$router.push("dailyappointmentsbyid");
    },
    list2() {
      return this.list.length;
    },

  },
  created() {
    this.$store.dispatch("getDailyAppoinments");
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
