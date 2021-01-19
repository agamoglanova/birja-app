<template>
  <main class="main">
    <HeaderSlider :loading="loading" />
    <div class="main_block container">
      <BigItem
        :shorten-names="smallerThan1280"
        :loading="loading"
        class="main_mb col-5"
      />
      <SmallItem
        :shorten-names="smallerThan1280"
        :loading="loading"
        class="main_mb col-5"
      />
      <SmallItem
        :shorten-names="smallerThan1280"
        v-for="i in 4"
        :key="i"
        :class="{ smallitem_wide: i == 2, 'pu-lily': loading }"
        :loading="loading"
        class="col-5"
      />
    </div>
    <div class="main_opinions container">
      <Title :loading="loading" title="Мнения" />
      <div class="row main_opinions_wrapper">
        <div class="main_opinions_wrapper_top col-2">
          <div class="main_opinions_wrapper_top_row">
            <SmallItem
              :shorten-names="smallerThan1280"
              v-for="i in 3"
              :key="i"
              :loading="loading"
              :withOutImage="true"
              class="col-5"
            />
          </div>
          <Wrapperbot :shorten-names="smallerThan1280" :loading="loading" />
        </div>
        <SmallItem
          :shorten-names="smallerThan1280"
          :loading="loading"
          class="smallitem_wide col-5"
          :wide="true"
        />
      </div>
      <Info :loading="loading" />
    </div>
    <Infobanner :loading="loading" />
    <div class="main_techno container">
      <Title :loading="loading" title="Технологии" />
      <div class="row">
        <BigItem :shorten-names="smallerThan1280" :loading="loading" />
        <SmallItem
          :shorten-names="smallerThan1280"
          :loading="loading"
          class="col-5 smallitem_wide"
        />
      </div>
      <div class="row">
        <SmallItem
          :shorten-names="smallerThan1280"
          :withOutImage="true"
          :loading="loading"
          class="col-5 main_techno_bottom_small-item"
        />
        <Wrapperbot
          :shorten-names="smallerThan1280"
          class="col-2 wrapper-bottom_margin"
          :loading="loading"
        />
      </div>
    </div>

    <Authors :loading="loading" />
    <div class="main_strategy container">
      <Title :loading="loading" title="Стратегии" />
      <div class="strategy-row" style="flex-wrap: wrap">
        <div class="main_strategy_big-item col-2-3">
          <pu-skeleton :duration="0" class="pu-img-info" rectangle height="260px">
            <img
              class="main_strategy_big-item_img"
              src="/images/people.png"
              v-if="!loading"
            />
          </pu-skeleton>
          <div
            class="main_strategy_big-item_card"
            :class="{ 'gray-bg': loading }"
          >
            <pu-skeleton :duration="0" class="pu-card-title" :count="2">
              <span class="main_strategy_big-item_card_title" v-if="!loading">
                Онлайн курс по нейромаркетинг
              </span>
            </pu-skeleton>
            <pu-skeleton :duration="0" class="pu-card-subtitle" :count="2">
              <span
                class="main_strategy_big-item_card_subtitle"
                v-if="!loading"
              >
                В банке объяснили, что в соответствии с законом кредитные
                каникулы...
              </span>
            </pu-skeleton>
            <div class="main_strategy_big-item_card_more">
              <pu-skeleton
                class="pu-img-margin"
                circle
                width="22px"
                height="22px"
              >
                <img
                  v-if="!loading"
                  svg-inline
                  class="icon main_strategy_big-item_card_more_margin"
                  src="../assets/icons/lock.svg"
                  alt="example"
                />
              </pu-skeleton>
              <pu-skeleton :duration="0" class="pu-card-subscribe" :count="1">
                <span v-if="!loading">По подписке</span>
              </pu-skeleton>
            </div>
          </div>
        </div>
        <MiniItem
          v-for="i in smallerThan1280 ? 6 : 14"
          :subscribe="i % 2 === 0 ? true : false"
          :key="i"
          :loading="loading"
        />
      </div>
    </div>
    <Adbanner :loading="loading" />
    <Table
      :loading="loading"
      class="table_media"
      :smallerThan1280="smallerThan1280"
    />
    <Mobiletable :loading="loading" class="table_media-mob" />
  </main>
</template>

<script>
import SmallItem from "@/components/global/SmallItem.vue";
import BigItem from "@/components/global/BigItem.vue";
import MiniItem from "../components/global/MiniItem.vue";
import Authors from "../components/pages/articles/Authors.vue";
import Table from "../components/global/Table.vue";
import Title from "../components/global/Title.vue";
import Info from "../components/global/Info.vue";
import Wrapperbot from "../components/global/Wrapperbot.vue";
import HeaderSlider from "../components/global/HeaderSlider.vue";
import Infobanner from "../components/global/Infobanner.vue";
import Adbanner from "../components/global/Adbanner.vue";
import Mobiletable from "../components/global/Mobiletable.vue";
import { mapState } from "vuex";

export default {
  components: {
    SmallItem,
    MiniItem,
    BigItem,
    Authors,
    Table,
    Title,
    Info,
    Wrapperbot,
    HeaderSlider,
    Infobanner,
    Adbanner,
    Mobiletable
  },
  data() {
    return {
      smallerThan1280: false,
      loading: true,
      subscribe: false,
      threeDotsPopupShown: false,
      mainOpinionsImg: undefined,
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
      ]
    };
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

  mounted() {
    window.addEventListener("resize", this.onResize, false);
    this.onResize();

    setTimeout(() => {
      this.loading = false;
    }, 30 * 1000)
  },

  methods: {
    onResize() {
      if (window.innerWidth <= 1280) {
        this.smallerThan1280 = true;
      } else {
        this.smallerThan1280 = false;
      }
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize, false);
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/pages/index";
</style>
