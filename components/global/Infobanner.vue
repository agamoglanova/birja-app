<template>
  <div class="main_banner-block" :class="{ 'not-loaded': loading }">
    <div class="main_banner-block_container">
      <img class="main_banner-block_img" src="/images/432.png" />
      <div class="main_banner-block_container_text">
        <span class="main_banner-block_container_text_title">
          Дивидендный календарь
        </span>
        <span class="main_banner-block_container_text_subtitle">
          Как работать с акциями в условиях экономического стресса
        </span>
        <div class="main_banner-block_container_text_more">
          <span> Узнать подробности </span>
          <img
            svg-inline
            class="icon"
            src="../../assets/icons/rightrund.svg"
            alt="example"
          />
        </div>
      </div>
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
@import "~/assets/scss/elements/infobanner.scss";
</style>
