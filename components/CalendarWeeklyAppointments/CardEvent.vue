<template>
  <div class="">
    <b-card class="card">
      <div class="card-Header">
        <div class="left">
          <i
            class="fas fa-exclamation-triangle"
            style="font-size: 14px; color: orange; margin-top: 3px"
          ></i>
          <span class="name">{{ patientName }}</span>
        </div>
        <Ellipses />
        <!-- <i
          @click="value = !value"
          class="fas fa-compress-alt"
          id="icon"
          style="color: #0b5efc"
        >
          <Ellipses />
        </i> -->
        <i class="fas fa-expand-alt"></i>
      </div>
      <div class="cardBody">
        <span class="card-text">{{ doctorName }} </span><br />
        <span class="card-text">{{ timeFrom }} - {{ timeTo }}</span
        ><br />
        <span class="card-text">{{ procedure }}</span>
      </div>
      <span v-b-modal="'my-modal'">
        <svg
          @click="value = !value"
          id="icon"
          style="color: #0b5efc; position: absolute; right: 5px; bottom: 4px"
          width="15"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="expand-alt"
          class="svg-inline--fa fa-expand-alt fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
          ></path>
        </svg>
      </span>
    </b-card>
    <!-- <CardEvenetonClick v-if="value == true" /> -->
    <CardEvenetonClick
      :patient="patient"
      :nameUser="nameUser"
      :time="time"
      :procedure="procedure"
      :Assistant="Assistant"
      :RoomNo="RoomNo"
      :Insurance="Insurance"
      v-if="value == true"
    />
  </div>
</template>

<script>
import CardEvenetonClick from "./CardEvenetonClick.vue";
import Ellipses from "./Ellipses.vue";
import Newexpandedcard from "./Newexpandedcard.vue";
export default {
  name: "CardEvent",
  components: { CardEvenetonClick, Ellipses, Newexpandedcard },
  data() {
    return {
      value: false,
    };
  },
  props: {
    patientName: String,
    doctorName: String,
    timeFrom: String,
    timeTo: String,
    procedure: String,

    patient: String,
    nameUser: String,
    time: String,
    Assistant: String,
    RoomNo: String,
    Insurance: String,
    Priority: String,
  },
  methods: {},
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
#__BVID__45__BV_toggle_ {
  padding: 0.5rem 1rem;
  font-size: inherit !important;
  line-height: 1.5;
  border-radius: 0.3rem;
}
.a {
  margin: 100px 0 100px 200px;
  display: flex;
  width: 100%;
}
.card {
  width: 100%;
  height: 160px;
  border-radius: 5px;
}
.card-Header {
  display: flex;
  flex-direction: row;
  background-color: #eceef85e;
  justify-content: space-between;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #0b5efc;
  padding-right: 5px;
  font-size: 12px;
  align-items: center;
  width: 100%;
  gap: 72px;
}

.card-body {
  padding: 0;
  background-color: #eceef85e;
}
.cardBody {
  padding-top: 2%;
  color: #949191;
}
#icon {
  float: right;
}
.fa-compress-alt {
  margin: 10px 10px 0 0;
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
