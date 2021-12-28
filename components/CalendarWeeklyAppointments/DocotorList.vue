<template>
  <nav role="navigation">
    <ul>
      <li class="list-b1">
        <a href="#" aria-haspopup="true">{{ userName }}</a>
        <div class="drop-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Group_1"
            data-name="Group 1"
            width="15"
            height="15"
            viewBox="0 0 45 45"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M32.71,18.446,22.3,29.129,12.29,18.446ZM6.79,0H38.214V.011a6.783,6.783,0,0,1,6.775,6.768H45V38.214h-.011a6.783,6.783,0,0,1-6.768,6.775V45H6.786v-.011A6.783,6.783,0,0,1,.011,38.221H0V6.786H.011A6.783,6.783,0,0,1,6.779.011V0ZM38.21,5.149H6.779V5.138A1.676,1.676,0,0,0,5.138,6.786h.011V38.221H5.138a1.676,1.676,0,0,0,1.648,1.641v-.011H38.221v.011a1.676,1.676,0,0,0,1.641-1.648h-.011V6.779h.011a1.676,1.676,0,0,0-1.648-1.641v.011Z"
              fill="#0B5EFC"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <ul class="dropdown1" aria-label="submenu">
          <li
            @click="showData(item.id, item.name)"
            :key="index"
            v-for="(item, index) in list"
          >
            {{ item.name }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    list() {
      return this.$store.getters.getAppoinment;
    },
    userName() {
      return this.$store.getters.getDailyUserName;
    },
  },
  methods: {
    showData(id, name) {
      if (this.$route.name === "weeklyappointments") {
        this.$store.dispatch("changedailyUserName", {
          dailyUserName: name,
        });

        this.$store.dispatch("changeUserId", {
          userId: id,
        });
        this.$router.push("weeklyCalendarById");
      } else if (this.$route.name === "dailyappointments") {
        this.$store.dispatch("changedailyUserName", {
          dailyUserName: name,
        });
        this.$store.dispatch("changeDailyUserId", { dailyUserId: id });
        this.$router.push("dailyappointmentsbyid");
      } else if (this.$route.name === "dailyappointmentsbyid") {
        this.$store.dispatch("changedailyUserName", {
          dailyUserName: name,
        });
      } else if (this.$route.name === "weeklyCalendarById") {
        this.$store.dispatch("changedailyUserName", {
          dailyUserName: name,
        });
      }
    },
  },
};
</script>
<style scoped>
.list-b1 {
  border-top-left-radius: 10px;
  background: #eceef8;
  font-size: 12px;
}
.list-b:hover {
  background-color: #ccd5ff;
}
ul li ul {
  background: #fff;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
  z-index: 1000;
}
li {
  color: #fff;
  background: #fff;
  display: block;
  float: left;
  padding: 18px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  width: 173px;
  border: 1px solid;
}
li {
  color: #6e6c6c;
}
li:hover,
li:focus-within {
  background: #eceef8;
  cursor: pointer;
}
li:focus-within {
  outline: none;
}
ul li ul {
  background: #fff;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul li:hover > ul,
ul li:focus-within > ul,
ul li ul:hover,
ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block;
}
ul li ul li {
  clear: both;
  width: 100%;
}
.drop-svg {
  float: right;
}
.drop-svg:hover {
  transform: rotate(180deg);
}
ul {
  background: #fff;
  list-style: none;
  margin: 0;
  padding-left: 0;
  width: 173px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* box-shadow: rgb(100 100 111 / 20%) 17px 15px 15px 5px; */
}
</style>
