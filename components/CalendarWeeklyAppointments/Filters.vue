<template>
  <div id="main">
    <span class="open-slide"> </span>
    <div class="calndar-wrapper">
      <div class="calendar-container">
        <div
          id="calendar1"
          styles=""
          class="first-container"
          data-v-aa6a8aa0=""
        >
          <div class="calendar-header">
            <FilterByUser />
            <FilterByType />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterByType from "./FilterByType.vue";
import FilterByUser from "./FilterByUser.vue";
export default {
  components: { FilterByType, FilterByUser },
};
</script>

<style>
.side-nav a {
  font-size: 12px;
}

.side-nav:hover {
  height: 100%;
  width: 20%;
  position: fixed;
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
.side-nav {
  height: 100%;
  width: 3%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.sidenavopen {
  height: 100%;
  width: 18%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
}
.side-nav:hover {
  height: 100%;
  width: 18%;
  position: fixed;
}

.side-nav a {
  padding: 10px 10px 20px 20px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10%;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}
.side-nav a:focus {
  color: #0b5efc;
}

.side-nav a:hover {
  color: #0b5efc;
}

.open-slide {
  float: left;
  margin-left: 30px;
}
@media (max-width: 768px) {
  .calendar-header {
    display: flex;
    flex-direction: column;
  }
}

.calndar-wrapper {
  padding: 5%;
  margin-right: 1%;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .open-slide {
    float: left;
    margin-left: 10px;
  }
  #main {
    transition: margin-left 0.5s;
    overflow: hidden;
  }
}
</style>
