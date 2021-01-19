<template>
  <div class="row info">
    <a class="item-info col-4" v-for="i in 3" :key="i">
      <div class="item-info_wrapper_more" v-if="!loading">
        <span class="item-info_wrapper_more_text"> Узнать подробности </span>
        <img
          svg-inline
          class="icon"
          src="~/assets/icons/rightrund.svg"
          alt="example"
        />
      </div>
      <div class="item-info_wrapper">
        <pu-skeleton :duration="0" class="pu-infoTitle">
          <span class="item-info_wrapper_title" v-if="!loading">
            Инфографика
          </span>
        </pu-skeleton>
        <pu-skeleton :duration="0" class="pu-infoSubitle" :count="3">
          <span class="item-info_wrapper_subtitle" v-if="!loading">
            Как работать с акциями в условиях экономического стресса
          </span>
        </pu-skeleton>
      </div>
      <img
        class="item-info_img"
        src="/images/infographics.png"
        v-if="!loading"
      />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    loading: Boolean
  },

  name: "Info"
};
</script>
<style lang="scss">
@import "~/assets/scss/elements/info.scss";
</style>
