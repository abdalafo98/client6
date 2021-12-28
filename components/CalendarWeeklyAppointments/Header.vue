<template>
  <div class="header">
    <div class="left-header"></div>
    <div class="right-header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="30"
        height="30"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 28 28"
        style="margin-top: 11px; margin-bottom: 4px"
      >
        <g fill="none">
          <path
            d="M14 3a8.501 8.501 0 0 1 8.497 8.246l.004.255v4.612l1.414 3.644c.038.098.064.201.077.305l.01.158a1.28 1.28 0 0 1-1.15 1.273l-.13.007l-5.22.001a3.502 3.502 0 0 1-6.998.192l-.006-.194l-5.223.001a1.28 1.28 0 0 1-1.235-1.62l.042-.124l1.416-3.644v-4.61A8.501 8.501 0 0 1 14 3zm1.996 18.65L16 21.5l-4.002.002a2.001 2.001 0 0 0 3.998.15zM14 4.5a7.001 7.001 0 0 0-6.997 6.76l-.004.241v4.752a.75.75 0 0 1-.023.184l-.028.088L5.596 20H22.4l-1.348-3.474a.748.748 0 0 1-.045-.18L21 16.254v-4.752A7.001 7.001 0 0 0 14 4.5z"
            fill="#0B5EFC"
          ></path>
        </g>
      </svg>
      <b-nav-item-dropdown right>
        <template #button-content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
            xml:space="preserve"
          >
            <metadata>
              Svg Vector Icons : http://www.onlinewebfonts.com/icon
            </metadata>
            <g>
              <path
                d="M500,10C229.4,10,10,229.4,10,500c0,112.7,38.1,216.6,102.1,299.4v7.5c1.6-0.5,3.1-1,4.7-1.6C206.6,917.9,344.9,990,500,990c157.6,0,297.8-74.4,387.4-189.9c0.2,0.1,0.3,0.1,0.5,0.2v-0.8C951.9,716.6,990,612.7,990,500C990,229.4,770.6,10,500,10z M948.7,479.6H703.8c-1.3-57.1-8.1-115.1-20.8-174.1c70.1-8.9,136.9-23,199.2-41.6C921.3,327,945.2,400.7,948.7,479.6z M336.9,479.6c1.4-56.9,8.4-113.9,21.2-171.6c49.3,5.4,100.1,8.3,152.1,8.3c45,0,89.1-2.2,132.1-6.3c12.5,57.1,19.4,113.4,20.8,169.6H336.9z M663.1,520.4c-1.5,62.8-10,125.7-25.4,189.6c-41.5-3.8-84.1-5.8-127.5-5.8c-50.3,0-99.6,2.7-147.4,7.8c-15.7-64.6-24.3-128.1-25.9-191.5H663.1z M858.3,229c-57.9,16.4-119.9,28.8-184.7,36.6C656.2,199,631.3,131,598.1,61.6C703.6,85.1,795.1,145.7,858.3,229z M500,50.8c17.6,0,35,1,52.1,3c35.2,74.2,62,145.8,80.5,216.1c-39.9,3.6-80.8,5.4-122.4,5.4c-48.6,0-96.2-2.5-142.3-7.4c18.5-69.7,45.1-140.7,80-214.2C465,51.9,482.4,50.8,500,50.8z M401.9,61.6c-32.8,68.6-57.5,135.7-74.7,201.5c-63.9-8.7-124.8-21.9-181.6-39C208.5,143.3,298.5,84.6,401.9,61.6z M121.1,258.7c61.3,19.4,127.2,34.4,196.5,44.2c-13.1,59.9-20,118.8-21.4,176.7H51.3C54.9,398.5,80.1,323,121.1,258.7z M132.5,758.2c-47.8-67.9-77.2-149.5-81.2-237.8h244.9c1.5,66.7,10.4,132.2,25.8,196.5C255.4,726.2,191.8,740.1,132.5,758.2z M159,792.3c54.5-15.6,112.6-27.7,173.4-35.8c17.5,61.5,40.8,122.1,69.4,181.8C305.6,917,221,864.6,159,792.3z M447.9,946.2c-31.6-66.5-56.4-131-74.5-194.3c44.4-4.5,90.2-6.8,136.9-6.8c39.8,0,78.8,1.7,117,5C609,813.9,584,879,552.1,946.2c-17.1,2-34.5,3-52.1,3C482.4,949.2,465,948.1,447.9,946.2z M598.1,938.4c29-60.5,52.6-121.9,70.1-184.3c61.8,7.2,121.1,18.6,176.7,33.6C782.6,862.4,696.4,916.5,598.1,938.4z M871,753.3c-60.4-17.4-124.9-30.6-192.4-38.9c15.1-63.6,23.8-128.2,25.2-194h244.9C944.8,606.6,916.7,686.4,871,753.3z"
              />
            </g>
          </svg>
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
