<template>
  <div class="right1">
    <div class="button-group">
      <div data-v-aa6a8aa0="">
        <div role="group" class="btn-group">
          <button type="button" class="btn btn-secondary">{{$t("FilterByType.weekly")}} </button>
          <button type="button" class="btn btn-secondary">{{$t("FilterByType.daily")}}</button>
          <button type="button" class="btn btn-secondary">{{$t("FilterByType.timeInterval")}}</button>
          <button type="button" class="btn btn-secondary">{{$t("FilterByType.monthly")}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
