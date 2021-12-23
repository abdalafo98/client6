<template>
  <div class="filter-radio-button">
    <input
      class="radio-button"
      :id="title"
      type="radio"
      name="lang"
      :value="title"
      @change="filterData"
      checked
    />
    <label for="En">{{ title }}</label>
    <span class="checkmark"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
  },

  methods: {
    filterData() {
      this.$emit("filter-data");
    },
  },
};
</script>

<style scoped>
.radio-button {
  transform: scale(1.7);
  margin: 10px;
}
.filter-radio-button {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: auto 5px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 13px;
  -ms-user-select: none;
  user-select: none;
  float: left;
  margin-left: 20px;
  font-family: sans-serif;
  margin-bottom: 40px;
  margin-right: 0px;
}
.container input {
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}
.container input:checked ~ .checkmark {
  background-color: #0b5efc;
  box-shadow: 0px 0px 15px 2px rgb(170 167 167 / 25%);
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
