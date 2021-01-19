<template>
  <div class="main_advertising" :class="{ 'not-loaded': loading }">
    <div class="main_advertising_container">
      <img src="/images/banner2.png" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    loading: Boolean
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/adbanner.scss";
</style>
