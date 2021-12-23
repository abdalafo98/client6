<template>
  <div class="listofdropdownel">
    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template #button-content>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="14.5"
          viewBox="0 0 8.29 35.98"
        >
          <g
            id="Group_6"
            data-name="Group 6"
            transform="translate(-643.667 -358)"
          >
            <g id="Group_5" data-name="Group 5">
              <g id="Group_4" data-name="Group 4">
                <g id="Group_3" data-name="Group 3">
                  <g id="Group_2" data-name="Group 2">
                    <g
                      id="noun-ellipses-menu-1407711"
                      transform="translate(310.469 150.801)"
                    >
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M341.488,211.351a4.145,4.145,0,1,1-4.145-4.152,4.149,4.149,0,0,1,4.145,4.152"
                        fill="#0b5efc"
                      />
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M341.488,267.351a4.145,4.145,0,1,1-4.145-4.152,4.149,4.149,0,0,1,4.145,4.152"
                        transform="translate(0 -42.162)"
                        fill="#0b5efc"
                      />
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M341.488,323.351a4.145,4.145,0,1,1-4.145-4.152,4.149,4.149,0,0,1,4.145,4.152"
                        transform="translate(0 -84.323)"
                        fill="#0b5efc"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </template>
      <b-dropdown-item href="#">Check in</b-dropdown-item>
      <b-dropdown-item href="#">Confirm</b-dropdown-item>
      <b-dropdown-item href="#">Update appointment</b-dropdown-item>
      <!-- <Deletewithpopup /> -->
    </b-dropdown>
  </div>
</template>

<script>
// import Deletewithpopup from "./Deletewithpopup.vue";

export default {
  components: {
    // Deletewithpopup,
  },
  props: {},
};
</script>

<style scoped>
.listofdropdownel {
  position: absolute;
  right: -10px;
  display: flex;
}

#__BVID__14 {
  float: right;
}

.dropdown-menu {
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 10px 0px !important;
  margin: 0.125rem 0 0;
  font-size: 15px;
  color: #111;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  font-family: Roboto, sans-serif;
  font-style: initial;
}
.dropdown-item {
  color: #949191 !important;
  text-decoration: none;
  padding: 8px 25px;
}
.dropdown-item:hover {
  color: #949191;
  text-decoration: none;
  background-color: #eceef8;
}
.dropdown-item:active {
  color: #949191;
  text-decoration: none;
  background-color: #eceef8;
}
.dropdown-menu.show {
  position: absolute;
  transform: translate3d(-173px, 9px, 0px) !important;
  top: 0px;
  left: 0px;
  will-change: transform;
}
#__BVID__11 {
  float: right;
}
</style>
