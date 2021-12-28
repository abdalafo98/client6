<template>
  <div class="my-app" :style="CalenderLanguage">
    <div id="allTheNav">
      <SideBar />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/CalendarWeeklyAppointments/SideBar.vue";
export default {
  components: {
    SideBar,
  },
  created() {
    this.$store.commit("changeStartDate", {
      startDate: this.getStratDate(new Date(), 6),
    });
    this.$store.commit("filterUsers", {
      type: "doctor",
    });
    this.$store.dispatch("getFilters");
    this.$store.dispatch("getAppoinments");
  },
  updated() {},

  methods: {
    getStratDate(date, day) {
      var curr = new Date(date); // get current date
      // if day === 0 = sunday
      while (curr.getDay() != day) {
        curr.setDate(curr.getDate() - 1);
      }
      return curr;
    },
  },

  computed: {
    CalenderLanguage() {
      this.$store.dispatch("getFilters");
      this.$store.dispatch("getAppoinments");

      var direction = this.$store.getters.getDirection;
      var alignment = this.$store.getters.getAlignment;
      var position = this.$store.getters.getPosition;

      return {
        "--dir": direction,
        "--align": alignment,
        "--position": position,
      };
    },
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
}

@media (max-width: 460px) {
  .calendar-header {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .header-items {
    margin-right: 0%;
    margin-left: 0%;
  }
  .badge {
    position: absolute !important;
  }
}

@media (max-width: 768px) {
  .icon-bar {
    background-color: #fff;
    overflow: scroll;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0.428rem;
  }
  .icon-bar a {
    float: right;
    width: 9%;
    text-align: center;
    padding: 10% 10%;
    transition: all 0.3s ease;
    color: white;
    color: #949191;
    text-decoration: none;
  }
  .icon2 {
    font-style: inherit;
  }
  .icon2:hover {
    background-color: #fff;
  }

  .icon-bar a:hover {
    background-color: #eceef8;
  }

  .right-bar a:hover {
    background-color: #eceef8;
  }

  .active {
    background-color: #eceef8;
  }

  .dropdown:hover .dropdown-content {
    display: inline-grid;
    top: 75px;
    right: 2.5%;
    float: right;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 0px 9px 3px rgb(170 167 167 / 25%);
    z-index: 1;
  }
  .dropdown-content a {
    color: #949191;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    right: 0;
    font-size: 12px;
    font-family: sans-serif;
    width: auto;
  }
}
@media (max-width: 768px) {
  .calendar-wrapper {
    padding: 5%;
  }

  .filter {
    color: #949191;
    display: flex;
    flex-direction: column;
  }
}

.calendar-wrapper {
  padding: 5%;
  margin-right: 1%;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.center {
  padding-top: 25px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;
}

caption {
  text-align: center;
  grid-column: 1 / -1;
  font-size: 130%;
  padding: 10px 0;
  color: #949191;
  font-family: sans-serif;
  letter-spacing: 2px;
}

#calendar td,
#calendar th {
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ebe9f1;
  text-align: center;
  font-family: sans-serif;
}
#calendar td {
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
}

/* ============================
      Mobile Responsiveness
   ============================*/
@media (max-width: 768px) {
  #calendar .weekdays,
  #calendar .other-month {
    display: none;
  }
  #calendar li {
    height: auto !important;
    border: 1px solid #ededed;
    width: 100%;
    padding: 10px;
    margin-bottom: -1px;
  }
  #calendar,
  #calendar tr,
  #calendar tbody {
    grid-template-columns: 1fr;
  }
  #calendar tr {
    grid-column: 1 / 2;
  }
  #calendar .date {
    align-self: flex-start;
  }
}
.my-app {
  justify-content: var(--position);
  direction: var(--dir);
}
</style>
