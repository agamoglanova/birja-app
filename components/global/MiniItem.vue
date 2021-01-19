<template>
  <div class="mini-item col-6">
    <div class="mini-item_mrg-img">
      <pu-skeleton :duration="0" class="pu-miniImg" rectangle height="170px">
        <img class="mini-item_image" src="/images/man.png" v-if="!loading" />
      </pu-skeleton>
    </div>
    <pu-skeleton :duration="0" class="pu-miniText" :count="3">
      <span class="mini-item_text" v-if="!loading">
        Конкурс международной пре...
      </span>
    </pu-skeleton>
    <div class="mini-item_subscribe" v-if="subscribe && !loading">
      <img
        svg-inline
        class="icon mini-item_subscribe_icon"
        src="../../assets/icons/lockyellow.svg"
        alt="example"
      />
      <span> По подписке </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subscribe: {
      type: Boolean,
      default: false
    },
    loading: Boolean
  },

  name: "MiniItem"
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/miniitem.scss";
</style>
