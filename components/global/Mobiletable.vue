<template>
  <div class="mobile-table container">
    <div class="mobile-table_title">
      <pu-skeleton :duration="0" :class="{ 'pu-toptitle': loading }" :count="1">
        <p v-if="!loading">
          Топ брокерских компаний
        </p>
      </pu-skeleton>
    </div>
    <div class="mobile-table_item" v-for="i in 4" :key="i">
      <div class="mobile-table_item_row1">
        <pu-skeleton :duration="0"
          :class="{ 'pu-profile': loading }"
          circle
          width="27px"
          height="27px"
        >
          <img src="/images/ilya.png" v-if="!loading" />
        </pu-skeleton>
        <pu-skeleton :duration="0" :class="{ 'pu-title': loading }" :count="2">
          <p v-if="!loading">Газпромбанк — Управление активами</p>
        </pu-skeleton>
      </div>

      <div class="mobile-table_item_row2">
        <div class="mobile-table_item_row2_wrapper">
          <div class="mobile-table_item_row2_wrapper_dep">
            <pu-skeleton :duration="0" :class="{ 'pu-dep': loading }">
              <p class="mobile-table_item_row2_wrapper_dep_min" v-if="!loading">
                Мин. депозит
              </p>
            </pu-skeleton>
            <pu-skeleton :duration="0" :class="{ 'pu-mini': loading }">
              <p
                class="mobile-table_item_row2_wrapper_dep_number"
                v-if="!loading"
              >
                $ 100000
              </p>
            </pu-skeleton>
          </div>
          <div class="mobile-table_item_row2_wrapper_dep">
            <pu-skeleton :duration="0" :class="{ 'pu-com': loading }">
              <p
                class="mobile-table_item_row2_wrapper_dep_min com-margin"
                v-if="!loading"
              >
                Комиссия
              </p>
            </pu-skeleton>
            <pu-skeleton :duration="0" :class="{ 'pu-mini': loading }">
              <p
                class="mobile-table_item_row2_wrapper_dep_number"
                v-if="!loading"
              >
                3.89%
              </p>
            </pu-skeleton>
          </div>
        </div>
        <div
          class="mobile-table_item_row2_right"
          :class="{ 'pu-topmr': loading }"
        >
          <pu-skeleton :duration="0" class="p-order" :class="{ 'pu-dep': loading }">
            <p
              class="mobile-table_item_row2_wrapper_dep_min no-mrgbot"
              v-if="!loading"
            >
              Позиция
            </p>
          </pu-skeleton>

          <div class="mobile-table_item_row2_right_arrow">
            <pu-skeleton :duration="0" rectangle>
              <img
                svg-inline
                class="icon"
                src="~/assets/icons/greenline.svg"
                alt="example"
                v-if="!loading"
              />
            </pu-skeleton>
            <pu-skeleton :duration="0">
              <p v-if="!loading" class="margin-arrow">3</p>
            </pu-skeleton>
          </div>
          <template v-for="i in 5">
            <pu-skeleton :duration="0"
              class="img-order"
              :class="{ 'pu-star': loading }"
              :key="i"
            >
              <svg
                :class="{ rating_active: i < 3 }"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="!loading"
              >
                <path
                  d="M13.0939 5.50464L8.60622 5.00559L6.7691 0.666626L4.93199 5.00559L0.444336 5.50464L3.79629 8.68582L2.8605 13.3333L6.7691 10.9597L10.6777 13.3333L9.74192 8.68582L13.0939 5.50464Z"
                  fill="#DDE1E4"
                />
              </svg>
            </pu-skeleton>
          </template>
        </div>
      </div>
      <div class="mobile-table_item_row2_wrapper"></div>
    </div>
    <div class="mobile-table_button">
      <div class="mobile-table_button_style">
        <pu-skeleton :duration="0"
          :class="{ 'pu-btn': loading }"
          rectangle
          width="184px"
          height="55px"
        >
          <p v-if="!loading">Посмотреть все</p>
        </pu-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    loading: Boolean
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/elements/mobiletable.scss";
</style>
