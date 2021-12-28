<template>
  <div class="filter">
    <FilterRadioButton
      :title="$t('FilterByUser.doctor')"
      :value.sync="value"
      @filter-data="filter($t('FilterByUserStore.doctor'))"
    />
    <FilterRadioButton
      :title="$t('FilterByUser.room')"
      :value.sync="value"
      @filter-data="filter($t('FilterByUserStore.room'))"
    />
    <FilterRadioButton
      :title="$t('FilterByUser.Procedure')"
      :value.sync="value"
      @filter-data="filter($t('FilterByUserStore.Procedure'))"
    />
    <FilterRadioButton
      :title="$t('FilterByUser.assistant')"
      :value.sync="value"
      @filter-data="filter($t('FilterByUserStore.assistant'))"
    />
  </div>
</template>

<script>
import FilterRadioButton from "./FilterRadioButton.vue";
import FilterRadioButtonChecked from "./FilterRadioButtonChecked.vue";
export default {
  data() {
    return { value: "doctor" };
  },
  methods: {
    filter(title) {
      this.value = title;
      this.$store.dispatch("getFilterData", {
        type: title,
      });
      if (this.$route.name === "weeklyappointments") {
        this.$store.dispatch("getFilters");
        this.$store.dispatch("getAppoinments");
        console.log(this.$store.getters.gettersFilter,"weekly");
      } else if (this.$route.name === "dailyappointments") {
        this.$store.dispatch("getFilters");
        this.$store.dispatch("getDailyAppoinments");
        console.log(this.$store.getters.gettersFilter,"daily");
      } else if (this.$route.name === "dailyappointmentsbyid") {
        this.$store.dispatch("getDailyAppinmentsById");
        this.$store.dispatch("getFilters");
        console.log(this.$store.getters.gettersFilter,"daily by id");
        this.$router.push({ path: "dailyappointments" });
      } else if (this.$route.name === "weeklyCalendarById") {
        this.$store.dispatch("getWeeklyAppointmentById");
        console.log(this.$store.getters.gettersFilter,"weekly by id");
        this.$store.dispatch("changeUserId", {
          userId: this.$store.getters.getAppoinment[0].id,
        });
        this.$router.push({ path: "weeklyappointments" });
      }

      return title;
    },
  },
  components: { FilterRadioButton, FilterRadioButtonChecked },
};
</script>

<style>
.filter {
  color: #949191;
  display: flex;
}
#main {
  transition: margin-left 0.5s;
  overflow: hidden;
}
.mainopen {
  transition: margin-left 0.3s;
  overflow: hidden;
  margin-left: 18%;
}

@media (max-width: 768px) {
  .filter {
    color: #949191;
    display: flex;
    flex-direction: column;
  }
}
</style>
