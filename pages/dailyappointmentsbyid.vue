<template>
  <div class="my-app" :style="CalenderLanguage">
    <div id="allTheNav">
      <SideBarDailyById />
    </div>
  </div>
</template>

<script>
import SideBarDailyById from "../components/CalendarDailyAppointmentsById/SideBarDailyById.vue";
export default {
  components: { SideBarDailyById },
  methods: {},
  computed: {
    CalenderLanguage() {
      this.$store.dispatch("getFilters");
      this.$store.dispatch("getDailyAppinmentsById");

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
