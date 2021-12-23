<template>
  <div>
    <label>
      <input
        type="checkbox"
        id="checkboxes"
        :value="day"
        @input="handleInputDay"
      />
      <span class="check-box-custom"></span>
      <label class="checkbox-label"> {{ day }} </label>
      <div class="from-to">
        <input class="time" type="time" name="time" v-model="value" />
        To
        <input class="time" type="time" name="time" v-model="unit" />
      </div>
    </label>
  </div>
</template>
<script>
export default {
    props: ['unit', 'value',"day"],
  watch: {
    value(v) { this.$emit('update:value', v); },
    unit(v) { this.$emit('update:unit', v); }
  },
  data() {
    return {
    
    }
    
  },
  methods: {
    handleInputDay(e) {
      this.$emit("input-Day", e.target.value);
    },
    handleInputFrom(e) {
      this.$emit("input-From", e.target.value);
    },
    handleInputTo(e) {
      this.$emit("input-To", e.target.value);
    },
  },
};
</script>
<style></style>