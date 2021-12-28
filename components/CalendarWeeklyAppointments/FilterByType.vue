<template>
  <div class="right1">
    <div class="button-group">
      <div data-v-aa6a8aa0="">
        <div role="group" class="btn-group">
          <div @click="pushTo()">
            <NuxtLink class="route-to" to="/weeklyappointments">
              {{ $t("FilterByType.weekly") }}
            </NuxtLink>
          </div>
          <div @click="pushTo()">
            <NuxtLink class="route-to" to="/dailyappointments">
              {{ $t("FilterByType.daily") }}
            </NuxtLink>
          </div>

          <button type="button" class="btn btn-secondary">
            {{ $t("FilterByType.timeInterval") }}
          </button>
          <button type="button" class="btn btn-secondary">
            {{ $t("FilterByType.monthly") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pushTo() {
      this.$store.dispatch("changeDailyDate2", {
        dailyDate: new Date(),
      });
      this.$store.dispatch("changedailyUserName", {
        dailyUserName: "ALL",
      });
    },
  },
};
</script>

<style>
.nuxt-link-active:hover {
  background-color: blue;
}
.nuxt-link-active {
  font-weight: bold;
  /* background-color: blue; */

  color: black;
}
.route-to {
  background-color: #fff !important;
  color: #949191;
  border: 1px solid #6c757d;
  padding: 0.375rem 0.75rem;
  display: flex;
}
.route-to:active {
  background-color: darkcyan;
  color: white;
}

.route-to.nuxt-link-exact-active {
  background-color: darkcyan;
  color: black;
}
.button {
  border: #949191;
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
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.button-group {
  /* position: relative; */
  display: inline-flex;
  float: right;
  /* width: 170%; */
}

.btn-secondary:not([disabled]) {
  background-color: #fff !important;
  color: #949191;
}

.right-components {
  float: right;
  padding-top: 3.9%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 0.6%;
  position: fixed;
  right: 1px;
  height: 100%;
}
@media (max-width: 768px) {
  .button-group {
    position: relative;
    float: right;
    width: 170%;
  }
  .button-group {
    position: relative;
    display: inline-flex;
    float: right;
  }
  .buttons {
    display: flex;
    font-size: 13px;
    flex-direction: column;
  }
  .right1 {
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
  }
}
</style>
