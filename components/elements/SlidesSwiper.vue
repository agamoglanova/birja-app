<template>
  <div v-swiper:mySwiperRight="swiperOptionRight">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, i) in postsByAuthors ? postsByAuthors : 0" :key="i">
        <a :href="`/posts/${item.slug}`" class="author_content_inner1">
          <pu-skeleton :duration="0" class="pu-sliderimg" rectangle>
            <img class="author_content_inner1_img" :src="
                item.feature_image
                  ? item.feature_image
                  : '/images/ilya.png'
              " v-if="!loading" />
          </pu-skeleton>
          <pu-skeleton :duration="0" class="pu-slidertitle" :count="2">
            <p class="author_content_content_card" v-if="!loading">
              Дарья Масленикова о когнитивной ...
            </p>
          </pu-skeleton>
        </a>
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
      postsByAuthors: [{
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        },
        {
          title: "Post 1",
          slug: "1"
        }
      ],

      swiperOptionRight: {
        slidesPerView: 3,
        spaceBetween: 10,
        observer: true,
        direction: 'vertical',
        observeParents: true,
        breakpoints: {
          960: {
            slidesPerView: 3,
            spaceBetween: 20,
            direction: 'horizontal'
          },
          601: {
            slidesPerView: 2,
            direction: 'horizontal'
          }
        }
      }
    }
  }
}

</script>
