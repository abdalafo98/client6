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
  computed: {
    CalenderLanguage() {
      this.$store.dispatch("getFilters");
      this.$store.dispatch("getAppoinments");

      var direction = this.$store.getters.getDirection;
      var alignment = this.$store.getters.getAlignment;
      var position = this.$store.getters.getPosition;
      console.log("in CalenderLanguage ", this.$store.getters.getLanguage);

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
