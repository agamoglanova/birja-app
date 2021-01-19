<template>
  <div class="main_broker container">
    <div class="main_broker_wrapper">
      <pu-skeleton :duration="0" :class="{'pu-maintitle': loading}" :count="1">
        <p class="main_broker_wrapper_title" v-if="!loading">
          Топ брокерских компаний
        </p>
      </pu-skeleton>
    </div>
    <div class="main_broker_table">
      <div class="main_broker_table_top">
        <pu-skeleton :duration="0" :class="{ 'pu-mindep table-col2': loading }" :count="1">
          <p class="main_broker_table_top_text table-col2" v-if="!loading && !smallerThan1280">
            Минимальный депозит
          </p>
          <p class="main_broker_table_top_text table-col2" v-else-if="!loading && smallerThan1280">
            Мин. депозит
          </p>
        </pu-skeleton>
        <pu-skeleton :duration="0" :class="{ 'pu-comission table-col3': loading }" :count="1">
          <p class="main_broker_table_top_text table-col3" v-if="!loading">
            Комиссия
          </p>
        </pu-skeleton>
        <pu-skeleton :duration="0" :class="{ 'pu-position table-col4': loading }" :count="1">
          <p class="main_broker_table_top_text table-col4" v-if="!loading">
            Позиция
          </p>
        </pu-skeleton>
        <pu-skeleton :duration="0" :class="{ 'pu-rate table-col5': loading }" :count="1">
          <p class="main_broker_table_top_text table-col5" v-if="!loading">
            Рейтинг биржи.рф
          </p>
        </pu-skeleton>
      </div>
      <div class="main_broker_table_container">
        <div class="main_broker_table_container_item" v-for="i in 6" :key="i">
          <div class="main_broker_table_container_item_title table-col1">
            <pu-skeleton :duration="0" class="pu-img" circle width="51px" height="54px">
              <img
                src="/images/ilya.png"
                class="main_broker_table_container_item_title_img"
                v-if="!loading"
              />
            </pu-skeleton>
            <pu-skeleton :duration="0" class="pu-title" :count="2">
              <p
                class="main_broker_table_container_item_title_text"
                v-if="!loading"
              >
                Газпромбанк — Управление активами
              </p>
            </pu-skeleton>
          </div>
          <pu-skeleton :duration="0" class="pu-usd table-col2">
            <p
              class="main_broker_table_container_item_dep table-col2"
              v-if="!loading"
            >
              $ 100000
            </p>
          </pu-skeleton>
          <pu-skeleton :duration="0" class="pu-percent table-col3">
            <p
              class="main_broker_table_container_item_comission table-col3"
              v-if="!loading"
            >
              3.89%
            </p>
          </pu-skeleton>
          <div class="main_broker_table_container_item_position table-col4">
            <img
              svg-inline
              class="icon"
              src="~/assets/icons/greenline.svg"
              alt="example"
              v-if="!loading"
            />
            <pu-skeleton :duration="0" class="pu-arrow table-col4">
              <p
                class="main_broker_table_container_item_comission"
                v-if="!loading"
              >
                3
              </p>
            </pu-skeleton>
          </div>
          <div class="main_broker_table_container_item_rating table-col5">
            <pu-skeleton :duration="0" class="pu-star" rectangle width="84px" height="15px">
              <template v-if="!loading">
                <svg
                  v-for="i in 5"
                  :key="i"
                  :class="{ rating_active: i < 3 }"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0939 5.50464L8.60622 5.00559L6.7691 0.666626L4.93199 5.00559L0.444336 5.50464L3.79629 8.68582L2.8605 13.3333L6.7691 10.9597L10.6777 13.3333L9.74192 8.68582L13.0939 5.50464Z"
                    fill="#DDE1E4"
                  />
                </svg>
              </template>
            </pu-skeleton>
          </div>
        </div>
      </div>
    </div>
    <div class="main_broker_button">
      <pu-skeleton :duration="0"
        :class="{ 'pu-btn': loading }"
        rectangle
        width="184px"
        height="51px"
      >
        <p class="main_broker_button_text" v-if="!loading">Посмотреть все</p>
      </pu-skeleton>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    loading: Boolean,
    smallerThan1280: Boolean
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/elements/table.scss";
</style>
