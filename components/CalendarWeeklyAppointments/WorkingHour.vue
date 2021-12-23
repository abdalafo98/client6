<template>
  <div class="wokring-hours">
    <div class="title-working-hours">
      <h5>Select your working days</h5>
    </div>
    <div class="body-working-hours">
      <InputDay day="sun" :value.sync="fromSun" :unit.sync="toSun" />
      <InputDay day="mon" :value.sync="fromMon" :unit.sync="toMon" />
      <InputDay day="tue" :value.sync="fromTue" :unit.sync="toTue" />
      <InputDay day="wed" :value.sync="fromWed" :unit.sync="toWed" />
      <InputDay day="thu" :value.sync="fromThu" :unit.sync="toThu" />
      <InputDay day="fri" :value.sync="fromFri" :unit.sync="toFri" />
      <InputDay day="sat" :value.sync="fromSat" :unit.sync="toSat" />
    </div>
  </div>
</template>
<script>
import InputDay from "./InputDay.vue";
export default {
  components: {
    InputDay,
  },
  updated() {
    this.$store.dispatch("changeWorkingHours", {
      workingHours: {
        sun: { from: this.fromSun, to: this.toSun },
        mon: { from: this.fromMon, to: this.toMon },
        tue: { from: this.fromTue, to: this.toTue },
        wed: { from: this.fromWed, to: this.toWed },
        thu: { from: this.fromThu, to: this.toThu },
        fri: { from: this.fromFri, to: this.toFri },
        sat: { from: this.fromSat, to: this.toSat },
      },
    });
  },
  data() {
    return {
      fromSun: "",
      toSun: "",
      fromMon: "",
      toMon: "",
      fromTue: "",
      toTue: "",
      fromWed: "",
      toWed: "",
      fromThu: "",
      toThu: "",
      fromFri: "",
      toFri: "",
      fromSat: "",
      toSat: "",
    };
  },
};
</script>
<style>
.wokring-hours {
  display: flex;
  flex-direction: column;
}
.body-working-hours {
  margin: auto;
  border: solid 1px black;
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
body {
  font-family: "roboto", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  margin: 0 auto;
}
.header-cont {
  display: flex;
  justify-content: center;
}
.user-info {
  width: 55%;
  background: rgb(11, 94, 252);
  height: 35px;
  display: flex;
  border-radius: 5px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  color: #fff;
  justify-content: center;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 500;
}
.employee-details {
  display: flex;
  padding-left: 60px;
}
.second-list {
  display: flex;
  justify-content: center;
}
.days-list {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1% 10%;
  background-color: #fff;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  border-radius: 5px;
  color: #949191;
}
.working-days {
  padding-left: 25px;
  color: #949191;
}
.days-container input {
  cursor: pointer;
}
.time {
  width: 110;
  height: 25px;
  font-size: 14px;
  font-family: sans-serif;
  margin: 0px 20px;
  border: none !important;
  background: border-box;
}
.from-to {
  display: flex;
}
</style>
