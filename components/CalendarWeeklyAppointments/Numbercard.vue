<template>
  <div class="s" @click="Onclick">
    <b-card class="card1">
      <div class="cardBody">
        <div class="number">{{ number }}</div>
        <b-card-text style="color: #0b5efc">Duration</b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "NumberCard",

  props: {
    number: Number,
  },

  methods:{
    Onclick(){
      this.$emit("change-id")
    }
  }
};
</script>

<style scoped>
.s {
  display: flex;
  justify-content: center;
}
.card1 {
  width: 90%;
  height: 8rem;
  border-radius: 5px;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: 0.25rem;
}

.cardBody {
  display: flex;
  flex-direction: row;
  height: 100%;
  /* width: 100%; */
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.number {
  border-radius: 50%;
  background: #0b5efc;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  font-size: 18px;
  width: 30px;
  height: 30px;
  font-weight: bolder;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none !important;
}
</style>
