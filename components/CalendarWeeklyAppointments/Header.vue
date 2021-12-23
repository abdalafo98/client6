<template>
  <div class="header">
    <div class="left-header"></div>
    <div class="right-header">
      <b-nav-item-dropdown right>
        <template #button-content>
          <a href="#"
            ><i class="icon"></i>
            <lord-icon
              src="https://cdn.lordicon.com/gqzfzudq.json"
              trigger="hover"
              colors="primary:#121331,secondary:#0b5efc"
              stroke="33"
              scale="36"
              style="width: 46px; height: 46px"
            >
            </lord-icon
          ></a>
        </template>
        <b-dropdown-item @click="onChange('en')">EN</b-dropdown-item>
        <b-dropdown-item @click="onChange('ar')">AR</b-dropdown-item>
      </b-nav-item-dropdown>
      <div class="notification-icon">
        <div class="icon-badge"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 14.8 14.8"
        >
          <g
            id="Group_17"
            data-name="Group 17"
            transform="translate(-365.6 -480.1)"
          >
            <g id="notification-svgrepo-com" transform="translate(365.5 479)">
              <path
                id="Path_2"
                data-name="Path 2"
                d="M14.5,6.5v7a2,2,0,0,1-2,2H2.543a2,2,0,0,1-2-1.991L.5,3.509A2,2,0,0,1,2.491,1.5H9.5"
                fill="none"
                stroke="#0b5efc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.8"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </svg>
      </div>
      <b-nav-item-dropdown right>
        <template #button-content>
          <a href="#"
            ><i class="icon"></i
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="40"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
                fill="#0b5efc"
              /></svg
          ></a>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(lang) {
      this.$cookies.set("lang", lang);

      if (lang === "ar") {
        this.$store.dispatch("setDirection", {
          direction: "rtl",
        });
        this.$store.dispatch("setAlignment", {
          alignment: "right",
        });
        this.$store.dispatch("setLanguage", {
          language: lang,
        });
        this.$store.dispatch("setPosition", {
          position: "end",
        });
      } else if (lang === "en") {
        this.$store.dispatch("setDirection", {
          direction: "ltr",
        });
        this.$store.dispatch("setAlignment", {
          alignment: "left",
        });
        this.$store.dispatch("setLanguage", {
          language: lang,
        });
        this.$store.dispatch("setPosition", {
          position: "start",
        });
      }
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.left-header {
  display: flex;
  align-items: center;
}
.right-header {
  display: flex;
  align-items: center;
}
.header {
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 60px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  border-radius: 0.428rem;
  width: 90%;
  justify-content: space-between;
  margin: auto;
  list-style: none;
  position: relative;
  align-items: center;
}
</style>
