<template>
  <div class="main_block_big-item col-2">
    <div class="line-wrapper col-5">
      <div class="main_block_big-item_wrapper">
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
                {{ shortenName("Илья Ноготков") }}
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
          class="main_block_big-item_text"
          :class="{ 'pu-bigTitle': loading }"
          :count="4"
        >
          <span v-if="!loading">
            Как университет креативных индустрий Universal University живет и
            работает онлайн
          </span>
        </pu-skeleton>
        <pu-skeleton :duration="0"
          class="main_block_big-item_subtext"
          :class="{ 'pu-bigText': loading }"
          :count="4"
        >
          <span v-if="!loading">
            Издание Financial Times опубликовало отличные новости для Huawei и
            поклонников смартфонов компании.
          </span>
        </pu-skeleton>
        <pu-skeleton :duration="0"
          class="item_category"
          :class="{ 'pu-bigcategory': loading }"
          :count="1"
        >
          <a class="item_category" v-if="!loading">
            Технологии • Нефть и газ
          </a>
        </pu-skeleton>
      </div>
      <img
        svg-inline
        class="icon line"
        src="../../assets/icons/line.svg"
        alt="example"
      />
    </div>
    <div class="main_block_big-item_image">
      <pu-skeleton :duration="0" :class="{ 'pu-bImage': loading }" rectangle>
        <img
          class="main_block_big-item_image_size"
          src="/images/ilya.png"
          v-if="!loading"
        />
      </pu-skeleton>
      <div class="big-item_image_wrapper">
        <div class="big-item_image_container">
          <div class="big-item_image_wrapper_seen" v-if="!loading">
            <img
              svg-inline
              class="icon big-item_image_wrapper_seen_svg"
              src="../../assets/icons/seen.svg"
              alt="example"
            />
            <span class="big-item_image_wrapper_seen_text"> 32,9тыс. </span>
          </div>
          <div class="big-item_image_wrapper_seen" v-if="!loading">
            <img
              svg-inline
              class="icon big-item_image_wrapper_seen_svg"
              src="../../assets/icons/likes.svg"
              alt="example"
            />
            <span class="big-item_image_wrapper_seen_text"> 2 тыс. </span>
          </div>
        </div>
        <div class="big-item_image_wrapper_saved" v-if="!loading">
          <img
            svg-inline
            class="icon"
            src="../../assets/icons/saved.svg"
            alt="example"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShortenName from "~/mixins/ShortenName";

export default {
  name: "BitItem",

  props: {
    loading: Boolean,
    shortenNames: Boolean
  },

  mixins: [ShortenName]
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/bigitem";
</style>
