<template>
  <div class="middle">
    <DocotorList />
    <HeaderCalendar />
  </div>
</template>

<script>
import DocotorList from "./DocotorList.vue";
import HeaderCalendar from "./HeaderCalendar.vue";
export default {
  components: { DocotorList, HeaderCalendar },
};
</script>

<style >
.middle {
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 1.8px;
  background-color: #fff;
  border-bottom-style: inset;
  border-radius: 10px;
  margin-bottom: 0.05%;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  display: flex;
  width: 90%;
  grid-template-columns: repeat(7, 12.2%);
  margin: auto;
  justify-content: space-between;
  align-items: center;
}
</style>
