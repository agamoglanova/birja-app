<template>
  <footer class="footer" :class="{ 'pu-color': loading }">
    <div class="footer_content container">
      <div class="footer_select-nav_wrapper" v-if="!loading">
        <select class="footer_select-nav" name="nav">
          <option value="anal">АНАЛИТИКА</option>
          <option value="techanal">Теханализ</option>
          <option value="ideas">Идеи</option>
          <option value="trends">Среднесрочные тренды</option>
          <option value="question">Вопрос аналитикам</option>
        </select>
      </div>
      <div class="footer_wrapper">
        <div class="footer_content_box1 footer-col1">
          <div class="footer_content_box1_logo">
            <a href=""><img src="images/logo.svg" alt="" /></a>
          </div>
          <div class="footer_content_box1_social">
            <a href="">
              <pu-skeleton :duration="0" class="pu-social" circle width="35px" height="35px">
                <img src="images/tw.svg" alt="" v-if="!loading" />
              </pu-skeleton>
            </a><a href="">
              <pu-skeleton :duration="0" class="pu-social" circle width="35px" height="35px">
                <img src="images/fb.svg" alt="" v-if="!loading" /> </pu-skeleton>
            </a><a href="">
              <pu-skeleton :duration="0" class="pu-social" circle width="35px" height="35px">
                <img src="images/tw.svg" alt="" v-if="!loading" /> </pu-skeleton>
            </a><a href="">
              <pu-skeleton :duration="0" class="pu-social" circle width="35px" height="35px">
                <img src="images/fb.svg" alt="" v-if="!loading" /> </pu-skeleton>
            </a>
          </div>
          <pu-skeleton :duration="0" class="pu-number">
            <div class="footer_content_box1_number" v-if="!loading">
              8 800 500 55 45
            </div>
          </pu-skeleton>
          <pu-skeleton :duration="0" class="pu-freecall">
            <div class="footer_content_box1_text" v-if="!loading">
              БЕСПЛАТНЫЙ ЗВОНОК ПО РОССИИ
            </div>
          </pu-skeleton>
        </div>
        <div class="footer_content_box2 footer-col2">
          <pu-skeleton :duration="0" :class="{'pu-anal': loading}">
            <a class="footer_content_box2_title" href="" v-if="!loading">АНАЛИТИКА</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-techanal': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Теханализ</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-idee': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Идеи</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-trend': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Среднесрочные тренды</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-ques': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Вопрос аналитикам</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-clientanal': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Аналитика для клиентов</a></pu-skeleton>
        </div>
        <div class="footer_content_box2 footer-col3">
          <pu-skeleton :duration="0" :class="{'pu-anal': loading}">
            <a class="footer_content_box2_title" href="" v-if="!loading">НОВОСТИ</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-techanal': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Все новости</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-idee': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Валютный рынок</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-trend': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Российский рынок</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-ques': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Мировые рынки</a>
          </pu-skeleton>
          <pu-skeleton :duration="0" :class="{'pu-clientanal': loading}">
            <a class="footer_content_box2_subtitle" href="" v-if="!loading">Рынок нефти</a>
          </pu-skeleton>
          <a class="footer_content_box2_subtitle" href="" v-if="!loading">Дивиденды
          </a>
        </div>
      </div>
      <img svg-inline class="icon footer_wrapper_svg" src="../../assets/icons/rectangle.svg" alt="example" />
      <pu-skeleton :duration="0" :class="{'pu-bigtext': loading}" :count="5">
        <div class="footer_content_box4 footer-col4" v-if="!loading">
          Данные являются биржевой информацией, обладателем (собственником)
          которой является ПАО Московская Биржа. Распространение, трансляция или
          иное предоставление биржевой информации третьим лицам возможно
          исключительно в порядке и на условиях, предусмотренных порядком
          использования биржевой информации, предоставляемой ОАО Московская
          Биржа. ООО «Компания Брокеркредитсервис», лицензия № 154-04434-100000
          от 10.01.2001 на осуществление брокерской деятельности. Выдана ФСФР.
          Без ограничения срока действия.
        </div>
      </pu-skeleton>
    </div>
  </footer>
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
@import "~/assets/scss/elements/footer.scss";
</style>
