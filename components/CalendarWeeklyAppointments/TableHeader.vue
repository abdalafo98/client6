<template>
  <div>
    <tbody>
      <tr ref="header" class="weekdays">
        <th>&nbsp;</th>
        <th
          @click="pushTo(index)"
          ref="header"
          :key="day"
          v-for="(day, index) in 7"
          scope="col"
        >
          <span class="date" v-html="getDate(index)"></span>
        </th>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  name: "TableHeader",

  methods: {
    getDate(index) {
      var options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };

      let date = new Date(this.$store.getters.getStartDate);
      date.setDate(date.getDate() + index);
      let d = date
        .toLocaleDateString(
          this.$store.getters.getLanguage === "ar" ? "ar-EG" : "EG",
          options
        )
        .split(" ");

      return `<span>${
        this.$store.getters.getLanguage === "ar"
          ? d[0].replaceAll("،", "")
          : d[0].replaceAll(",", "")
      } <br/> ${d[1]} ${d[2]}</span>`;
    },

    pushTo(index) {
      let date = new Date(this.$store.getters.getStartDate);
      date.setDate(date.getDate() + index);
      console.log(`daily date ${date}`);

      this.$store.dispatch("changeDailyDate2", { dailyDate: date });
      this.$router.push("dailyappointments");
    },
  },
};
</script>

<style scoped>
.date {
  font-size: 14px;
  font-weight: bold;
  color: grey;
  text-align: center;
  font-family: sans-serif;
}
</style>
