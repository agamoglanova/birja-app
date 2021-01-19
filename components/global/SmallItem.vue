<template>
  <div class="small-item" :class="{ 'no-image': withOutImage, 'pu-wide': wide && loading }">
    <div class="small-item_wrapper">
      <div class="small-item_img" v-if="!withOutImage">
        <pu-skeleton :duration="0" class="pu-bsImg" rectangle>
          <img
            class="small-item_img_size"
            src="/images/man.png"
            v-if="!loading"
          />
        </pu-skeleton>
      </div>
      <div class="small-item_text">
        <div class="item_profile">
          <div class="item_avatar">
            <pu-skeleton :duration="0"
              :class="{ 'pu-avatarImg': loading }"
              circle
              width="22px"
              height="22px"
            >
              <img src="/images/ilya.png" v-if="!loading" />
            </pu-skeleton>
            <pu-skeleton :duration="0" :class="{ 'pu-authorName': loading }" :count="1">
              <a v-if="!loading">
                {{ shortenName('Илья Ноготков') }}
              </a>
            </pu-skeleton>
          </div>
          <div class="item_date">
            <pu-skeleton :duration="0" :class="{ 'pu-date': loading }" :count="1">
              <p v-if="!loading">22 апреля</p>
            </pu-skeleton>
          </div>
        </div>
        <pu-skeleton :duration="0"
          class="small-item_title"
          :class="{ 'pu-smalltitle': loading }"
          :count="2"
        >
          <a v-if="!loading">Онлайн курс по нейромаркетингу Нейротренд</a>
        </pu-skeleton>
        <pu-skeleton :duration="0"
          class="item_category"
          :class="{ 'pu-scategory': loading }"
          :count="1"
        >
          <a v-if="!loading">
            Технологии • Нефть и газ
          </a>
        </pu-skeleton>
      </div>
    </div>
    <img
      v-if="lineBottom"
      svg-inline
      class="icon line-bottom"
      src="../../assets/icons/line.svg"
      alt="example"
    />
  </div>
</template>

<script>
import ShortenName from '~/mixins/ShortenName'

export default {
  name: "SmallItem",

  props: {
    withOutImage: {
      type: Boolean,
      default: false
    },
    lineBottom: {
      type: Boolean,
      default: true
    },
    loading: Boolean,
    shortenNames: Boolean,
    wide: Boolean
  },

  mixins: [ShortenName]
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/smallitem";
</style>
