<template>
  <div class="my-app" :style="CalenderLanguage">
    <div id="allTheNav">
      <SideBarDaily />
    </div>
  </div>
</template>

<script>
import SideBarDaily from "../components/CalendarDailyAppointments/SideBarDaily.vue";
export default {
  components: { SideBarDaily },

  computed: {
    CalenderLanguage() {
      this.$store.dispatch("getFilters");
      this.$store.dispatch("getDailyAppoinments");

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
