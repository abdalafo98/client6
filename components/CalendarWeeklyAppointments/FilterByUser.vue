<template>
  <div class="filter">
    <FilterRadioButtonChecked
      :title="$t('FilterByUser.doctor')"
      @filter-data="filter($t('FilterByUserStore.doctor'))"
    />
    <FilterRadioButton
      :title="$t('FilterByUser.room')"
      @filter-data="filter($t('FilterByUserStore.room'))"
    />
    <FilterRadioButton
      :title="$t('FilterByUser.Procedure')"
      @filter-data="filter($t('FilterByUserStore.Procedure'))"
    />
    <FilterRadioButton
      :title="$t('FilterByUser.assistant')"
      @filter-data="filter($t('FilterByUserStore.assistant'))"
    />
  </div>
</template>

<script>
import FilterRadioButton from "./FilterRadioButton.vue";
import FilterRadioButtonChecked from "./FilterRadioButtonChecked.vue";
export default {
  methods: {
    filter(title) {
      this.$store.dispatch("getFilterData", {
        type: title,
      });
      if (this.$route.name === "weeklyappointments") {
        this.$store.dispatch("getAppoinments");
        this.$store.dispatch("getFilters");
      } else if (this.$route.name === "dailyappointments") {
        this.$store.dispatch("getDailyAppoinments");
        this.$store.dispatch("getFilters");
      } else if (this.$route.name === "dailyappointmentsbyid") {
        this.$store.dispatch("getDailyAppinmentsById");
        this.$store.dispatch("getFilters");
      } else if (this.$route.name === "weeklyCalendarById") {
        this.$store.dispatch("getWeeklyAppointmentById");
        this.$store.dispatch("changeUserId", {
          userId: this.$store.getters.getAppoinment[0].id,
        });
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
