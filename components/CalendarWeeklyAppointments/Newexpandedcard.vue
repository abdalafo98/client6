<template>
  <div>
    <b-modal id="my-modal">
        <CardEvenetonClick/>
    </b-modal>
  </div>
</template>
<script>
import CardEvenetonClick from "./CardEvenetonClick.vue"
export default {
  components: {
    CardEvenetonClick
},
};
</script>

<style >

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0px !important;
}
.modal-header {
    display: none !important;
}
</style>
