<template>
  <div class="arrow2" @click.prevent="decreaseDate">
    <a href="#"
      ><i class="arrow-icon-2"></i
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#949191"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        /></svg
    ></a>
  </div>
</template>

<script>
export default {
  methods: {
    decreaseDate() {
      this.$emit("decrease-date");
    },
  },
};
</script>

<style></style>
