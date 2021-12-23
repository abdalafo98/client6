<template>
  <div class="s">
    <div class="week-from-to">{{ dailyDate.replace(",", " ") }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    dailyDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      return this.$store.getters.getterDailyDate.toLocaleDateString(
        this.$store.getters.getLanguage === "ar" ? "ar-EG" : "EG",
        options
      );
    },
  },
};
</script>

<style></style>
