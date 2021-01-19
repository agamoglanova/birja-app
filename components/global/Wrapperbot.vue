<template>
  <div class="main_opinions_wrapper_bottom">
    <pu-skeleton :duration="0" class="pu-wrapperbotimg" rectangle>
      <img
        class="main_opinions_wrapper_bottom_img"
        src="/images/ilya.png"
        v-if="!loading"
      />
    </pu-skeleton>
    <div class="main_opinions_card" :class="{ 'pu-wrapperbot-color': loading }">
      <SmallItem
        :shorten-names="shortenNames"
        :lineBottom="false"
        :withOutImage="true"
        :loading="loading"
        class="wrapperbot-small"
      />
    </div>
  </div>
</template>

<script>
import SmallItem from "@/components/global/SmallItem.vue";

export default {
  name: "Wrapperbot",

  components: {
    SmallItem
  },

  props: {
    loading: Boolean,
    title: String,
    wrapperbotImage: { type: String, default: "" },
    shortenNames: Boolean
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/wrapperbot.scss";
</style>
