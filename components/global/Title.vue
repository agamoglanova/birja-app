<template>
  <div class="main_techno_title bigtitle-style">
    <div class="bigtitle-style_mrg">
      <pu-skeleton :duration="0" class="pu-titleTitle">
        <a v-if="!loading"> {{ title }} </a>
      </pu-skeleton>
    </div>
    <a class="title_btn">
      <pu-skeleton :duration="0" class="pu-titleButton" rectangle>
        <img
          svg-inline
          class="icon"
          src="~/assets/icons/rightsquare.svg"
          alt="example"
          v-if="!loading"
        />
      </pu-skeleton>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    loading: Boolean
  },

  name: "Title"
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/title.scss";
</style>
