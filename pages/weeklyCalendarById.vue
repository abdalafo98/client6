<template>
  <div class="my-app" :style="CalenderLanguage">
    <div id="allTheNav">
      <SideBarById />
    </div>
  </div>
</template>
<script>
import SideBarById from "../components/WeeklyCalendarById/SideBarById.vue";
export default {
  components: {
    SideBarById,
  },

  created() {
    this.$store.dispatch("getWeeklyAppointmentById");
  },
  mounted() {
    // this.$store.commit("changeStartDate", {
    //   startDate: this.getStratDate(new Date(), 6),
    // });
  },
  methods: {
    getStratDate(date, day) {
      var curr = new Date(date); // get current date
      // if day === 0 = sunday
      while (curr.getDay() != day) {
        curr.setDate(curr.getDate() - 1);
      }
      return curr;
    },
  },
  computed: {
    CalenderLanguage() {
      this.$store.dispatch("getFilters");
      this.$store.dispatch("getAppoinments");

      var direction = this.$store.getters.getDirection;
      var alignment = this.$store.getters.getAlignment;
      var position = this.$store.getters.getPosition;

      return {
        "--dir": direction,
        "--align": alignment,
        "--position": position,
      };
    },
  },
};
</script>
<style></style>
