<template>
  <div class="author" v-if="postAuthors && postAuthors.length > 0">
    <div class="container author_content">
      <pu-skeleton :duration="0" :class="{'pu-title': loading}">
        <h4 class="author_content_title" v-if="!loading">ТОП АВТОРОВ</h4>
      </pu-skeleton>
      <div class="author_content_content">
        <div v-swiper:mySwiperLeft="swiperOptionLeft" class="left-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, i) in postAuthors ? postAuthors : 0"
              :key="i"
            >
              <div class="author_content_content_item">
                <pu-skeleton :duration="0" class="pu-img" circle width="80px" height="80px">
                  <img
                    src="/images/ilya.png"
                    class="author_content_content_item_img"
                    v-if="!loading"
                    @click="mySwiperLeft.slideTo(i)"
                  />
                </pu-skeleton>
                <div class="author_content_content_item_wrapper">
                  <pu-skeleton :duration="0" :class="{'pu-name': loading}" class="name">
                    <a
                      class="author_content_content_item_wrapper_title"
                      v-if="!loading"
                    >
                      Илья Ноготков
                    </a>
                  </pu-skeleton>
                  <pu-skeleton :duration="0" :class="{'pu-city': loading}">
                    <span
                      class="author_content_content_item_wrapper_subtitle"
                      v-if="!loading"
                    >
                      Madrid, Spain
                    </span>
                    <br />
                  </pu-skeleton>
                  <pu-skeleton :duration="0" class="category" :class="{'pu-category': loading}">
                    <span v-if="!loading">Illustration, Motion Graphics, Art Direction</span>
                  </pu-skeleton>
                  <div
                    class="author_content_content_item_wrapper_reviews"
                    v-if="!loading"
                  >
                    <div class="author_content_content_item_wrapper_reviews_item">
                      <img
                        svg-inline
                        class="icon"
                        src="~/assets/icons/authorsaved.svg"
                        alt="example"
                      />
                      <span> 2 тыс. </span>
                    </div>
                    <div class="author_content_content_item_wrapper_reviews_item">
                      <img
                        svg-inline
                        class="icon"
                        src="~/assets/icons/authorseen.svg"
                        alt="example"
                      />
                      <span> 32,9тыс. </span>
                    </div>
                    <div class="author_content_content_item_wrapper_reviews_item">
                      <img
                        svg-inline
                        class="icon"
                        src="~/assets/icons/authorlikes.svg"
                        alt="example"
                      />
                      <span> 2 тыс. </span>
                    </div>
                  </div>
                  <pu-skeleton :duration="0" class="pu-btn" rectangle width="106px" height="27px">
                    <a
                      class="author_content_content_item_wrapper_button"
                      v-if="!loading"
                    >
                      Следить
                    </a>
                  </pu-skeleton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="author_content_content_slider">
          <div v-swiper:mySwiperRightWrapper="swiperOptionRightWrapper">
            <div class="swiper-wrapper right-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, i) in postAuthors ? postAuthors : 0"
                :key="i"
              >
                <SlidesSwiper :loading="loading" />
              </div>
            </div>
            <div
              class="swiper-pagination-2"
              :class="{ 'pu-bullet': loading }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  },

  data() {
    return {
      data: {
        title: undefined,
        img: undefined,
        name: undefined,
        city: undefined,
        btn: undefined,
        sliderimg: undefined,
        loaded: undefined
      },
      postAuthors: [
        {
          slug: "1",
          location: "Madrid, Spain",
          name: "Илья Ноготков"
        },
        {
          slug: "2",
          location: "Madrid, NeSpain",
          name: "Не Илья Ноготков"
        }
      ],

      swiperOptionLeft: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      swiperOptionRightWrapper: {
        slidesPerView: 1,
        spaceBetween: 20,
        simulateTouch: false,
        pagination: {
          el: ".swiper-pagination-2",
          type: "bullets",
          clickable: true
        }
      },
    };
  },

  async created() {
    // await this.$store.dispatch('posts/getPostAuthors');
    // if (this.$store.state.posts.postAuthors && this.$store.state.posts.postAuthors[0]) {
    // 	await this.$store.dispatch('posts/getPostsByAuthor', this.$store.state.posts.postAuthors[0].slug);
    // }
  },

  mounted() {
    if (this.mySwiper) {
      this.mySwiper.on("slideChange", async () => {
        // await this.$store.dispatch('posts/getPostsByAuthor', this.$store.state.posts.postAuthors[this.mySwiper.activeIndex].slug);
      });
    }

    this.mySwiperRightWrapper.controller.control = this.mySwiperLeft;
    this.mySwiperLeft.controller.control = this.mySwiperRightWrapper;
  }

  // computed: {
  // 	...mapState('posts', ['postAuthors', 'postsByAuthors'])
  // }
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/authors";
</style>
