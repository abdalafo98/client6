<template>
  <b-modal id="my-modal">
    <b-card class="card">
      <div class="card-Header">
        <div class="left">
          <i
            class="fas fa-exclamation-triangle"
            style="font-size: 14px; color: orange; margin-top: 3px"
          ></i>
          <h6 class="name">{{ patient }}</h6>
        </div>
        <i
          class="fas fa-compress-alt"
          id="icon"
          style="color: #0b5efc; margin-bottom: 3px"
        >
          <Ellipses />
        </i>
      </div>
      <div class="cardBody">
        <b-card-text>{{ nameUser }}</b-card-text>
        <b-card-text>{{ time }}</b-card-text>
        <b-card-text>{{ procedure }}</b-card-text>
        <b-card-text>{{ Assistant }}</b-card-text>
        <b-card-text>{{ RoomNo }}</b-card-text>
        <b-card-text>{{ Insurance }}</b-card-text>
        <b-card-text>{{ Priority }}</b-card-text>
      </div>
    </b-card>
  </b-modal>
</template>
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>

<script>
import Ellipses from "./Ellipses.vue";
export default {
  name: "Card",
  components: {
    Ellipses,
  },
  props: {
    patient: String,
    nameUser: String,
    time: String,
    procedure: String,
    Assistant: String,
    RoomNo: String,
    Insurance: String,
    Priority: String,
  },

  created() {
    this.$store.dispatch("setCardInfo", {
      cardInfo: [
        {
          patient: this.patient,
          nameUser: this.nameUser,
          time: this.time,
          procedure: this.procedure,
          Assistant: this.Assistant,
          RoomNo: this.RoomNo,
          Insurance: this.Insurance,
          Priority: this.Priority,
        },
      ],
    });
  },
};
</script>

<style scoped>
.fa-compress-alt {
  color: #0b5efc;
  display: flex;
  align-items: center !important;
  flex-flow: row-reverse !important;
  margin: 0px 10px 0 0 !important;
}

.card {
  height: 375px;
}
.card-Header {
  display: flex;
  flex-direction: row;
  background-color: #eceef85e;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #0b5efc;
}
.card-body {
  padding: 0;
  background-color: #eceef85e;
}
.cardBody {
  padding-left: 4%;
  padding-top: 2%;
  color: #949191;
}
#icon {
  float: right;
}

.name {
  margin-left: 10px;
  color: #0b5efc;
}
.left {
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 10px;
}
</style>
