<template>
  <div>
    <div class="son" v-if="getLanguage === 'ar'">
      <ArrowHeaderRight @increase-date="increaseDate" />
      <h2 class="week-from-to">
        <DailyDate />
      </h2>
      <ArrowHeaderLeft @decrease-date="decreaseDate" />

    </div>
    <div v-else class="son">
      <ArrowHeaderRight @increase-date="increaseDate" />
      <h2 class="week-from-to">
        <DailyDate />
      </h2>
      <ArrowHeaderLeft @decrease-date="decreaseDate" />
    </div>
  </div>
</template>

<script>
import ArrowHeaderRight from "../CalendarWeeklyAppointments/ArrowHeaderRight.vue";
import DailyDate from "./DailyDate.vue";
import ArrowHeaderLeft from "../CalendarWeeklyAppointments/ArrowHeaderLeft.vue";
export default {
  components: { ArrowHeaderRight, DailyDate, ArrowHeaderLeft },

  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
  },

  methods: {
    conditionRoute() {
      if (this.$route.name === "dailyappointments") {
        this.$store.dispatch("getDailyAppoinments");
        this.$store.dispatch("getFilters");
      } else if (this.$route.name === "dailyappointmentsbyid") {
        this.$store.dispatch("getDailyAppinmentsById"),
          this.$store.dispatch("getFilters");
          console.log(1);
      }
    },
    decreaseDate() {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getterDailyDate,
        num: -1,
        status: "change_dailyCalendar",
      });
      this.conditionRoute();
    },
    increaseDate() {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getterDailyDate,
        num: 1,
        status: "change_dailyCalendar",
      });
      this.conditionRoute();
    },
  },
};
</script>

<style scoped>
.son {
  margin-left: 15px;
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  grid-gap: 10px;
  gap: 10px;
  margin-right: 15px;
}
.week-from-to {
  color: #949191;
  font-size: 18px;
  font-weight: 100;
}
</style>
