<template>
  <div class="s">
    <div class="week-from-to">
      {{ weekFromTo.replaceAll(",", " ") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "WeekFromTo",
  computed: {
    weekFromTo() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      };

      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: 6,
        status: "change_startDate2",
      });

      let date1 = this.$store.getters.getStartDate.toLocaleString(
        this.$store.getters.getLanguage === "ar" ? "ar-EG" : "EG",
        options
      );
      let from = date1.toString().split(" ").slice(1, 4);

      let date2 = this.$store.getters.getStartDate2.toLocaleString(
        this.$store.getters.getLanguage === "ar" ? "ar-EG" : "EG",
        options
      );
      let to = date2.toString().split(" ").slice(1, 4);
      return `${from} - ${to}`;
    },
  },
};
</script>

<style>
.week-from-to {
  color: #949191;
  font-size: 12px;
  font-weight: 100;
  margin: auto;
}
</style>
