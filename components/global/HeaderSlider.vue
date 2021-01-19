<template>
  <div class="headerslider">
    <div class="headerslider-content">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in postsTop" :key="i">
            <pu-skeleton :duration="0" class="pu-headerSlider" rectangle width="228px" height="74px">
              <p class="headerslider-content__box1" :style="{ 'background-image': `url(${item.feature_image})` }" v-if="!loading">
                <span v-html="item.title"></span>
              </p>
            </pu-skeleton>
          </div>
        </div>
        <div class="headblock-content swiper-headblock-content">
          <div class="headerslider-img" @click="threeDotsPopupShown = true">
            <pu-skeleton :duration="0" class="pu-headerSlider-points" rectangle width="46px" height="46px">
              <img src="/images/points.svg" alt="three points" v-if="!loading" />
            </pu-skeleton>
          </div>
          <div class="swiper-button-prev">
            <pu-skeleton :duration="0" class="pu-headerSlider-left" circle width="46px" height="46px">
              <img src="/images/arr-left.svg" alt="left" v-if="!loading" />
            </pu-skeleton>
          </div>
          <div class="swiper-button-next">
            <pu-skeleton :duration="0" class="pu-headerSlider-left" circle width="46px" height="46px">
              <img src="/images/arr-right.svg" alt="right" v-if="!loading" />
            </pu-skeleton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      postsTop: [
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" },
        { feature_image: "/images/ilya.png" }
      ],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 8,
        init: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },

  async created() {
    // await this.$store.dispatch('posts/getPostsTop');
    // await this.$store.dispatch('posts/getPostsFeatured');
    // await this.$store.dispatch('posts/getPostsOpinion');
    // await this.$store.dispatch('posts/getPostsTech');
    // await this.$store.dispatch('posts/getPostsStrategy');
    // await this.$store.dispatch('posts/getTopBrokers');
  },

  mounted() {
    this.mySwiper.init(this.swiperOption);
  },

  computed: {
    ...mapState("posts", [
      "postsFeatured",
      "postsOpinion",
      "postsTech",
      "postsStrategy",
      "topBrokers"
    ])
  },

  methods: {
    shortName(fullName) {
      if (fullName && fullName.split) {
        let fullNameParts = fullName.split(" ");
        if (fullNameParts.length >= 2)
          return `${fullNameParts[1]} ${fullNameParts[0][0]}.`;
      }
      return "";
    },

    onFavClick() {
      this.$nuxt.$emit("showSmallRegistrationModal");
    }
  }
};

</script>
<style lang="scss">
@import "~/assets/scss/elements/headerSlider.scss";

</style>
