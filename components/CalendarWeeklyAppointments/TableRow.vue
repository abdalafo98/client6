<template>
  <div>
    <tr class="days" :key="index1" v-for="(items, index1) in list">
      <th class="drname" @click="moveTo(items.id)">&nbsp;{{ items.name }}</th>

      <td :key="index2" v-for="(count, index2) in 7" class="day">
        <div
          :load="
            console(
              `${index1} - ${item[index1].week[index2].appointments.length}`
            )
          "
          v-for="(item, index3) in list2"
          :key="index3"
        >
          <CardEvent
            v-if="item[index1].week[index2].appointments.length === 1"
            :patientName="
              item[index1].week[index2].appointments[0].consumer_name
            "
            :doctorName="
              item[index1].week[index2].appointments[0].provider_name
            "
            :timeFrom="item[index1].week[index2].appointments[0].start_Time"
            :timeTo="item[index1].week[index2].appointments[0].end_Time"
            :procedure="item[index1].week[index2].appointments[0].service_name"
          />

          <Numbercard
            v-else-if="item[index1].week[index2].appointments.length > 1"
            :number="item[index1].week[index2].appointments.length"
          />
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
import CardEvent from "./CardEvent.vue";
import Numbercard from "./Numbercard.vue";
export default {
  computed: {
    list: function () {
      console.log("ddddd");
      return this.$store.getters.getAppoinment;
    },
    list2() {
      console.log("aaaa");
      return this.$store.getters.gettersFilter;
    },
  },

  methods: {
    console(value) {
      console.log(value);
    },
    moveTo(id) {
      this.$store.dispatch("changeUserId", { userId: id });
      this.$router.push({ path: "/weeklyCalendarById" });
    },
  },

  created() {
    this.$store.dispatch("getAppoinments");
    this.$store.dispatch("getFilters");
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
