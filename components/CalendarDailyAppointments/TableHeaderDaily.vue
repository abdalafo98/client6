<template>
  <div>
    <tbody>
      <tr ref="header" class="weekdays">
        <th>&nbsp;</th>
        <th
          @click="pushTo(items.id, items.name)"
          v-for="(items, index) in list"
          :key="index"
          ref="header"
          scope="col"
        >
          {{ items.name }}
        </th>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.getters.getAppoinment;
    },
  },

  methods: {
    pushTo(id, name) {
      this.$store.dispatch("changeDailyUserId", {
        dailyUserId: id,
      });
      this.$store.dispatch("changedailyUserName", {
        dailyUserName: name,
      });
      this.$router.replace("dailyappointmentsbyid");
    },
  },
};
</script>

<style></style>
