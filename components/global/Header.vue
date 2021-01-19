<template>
  <header class="header" :class="{ header__fixed: fixed }">
    <div class="header__bg" @click="onBgClick()" :class="{
        active:
          (menuActive && !searchActive) ||
          (searchInput && searchActive) ||
          (searchInnerActive && mobileSearch()) ||
          registrationSmallActive
      }" :style="{
        'z-index':
          searchActive && !mobileSearch() ? 1 : registrationSmallActive ? 9 : ''
      }"></div>
    <div class="header__content" :class="{ active: menuActive && !searchActive }">
      <div class="header__top" :class="{ 'not-loaded': loading }">
        <div class="header__top-inner container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="header__top-inner__item" :class="{ red: false }">
                  <span class="title">РТС</span>
                  <span class="price">{{ (1281.81).toFixed(2) }}</span>
                  <div class="header__top-inner__item__change green" v-if="true">
                    <span>+{{ (1.72).toFixed(2) }}%</span>
                  </div>
                  <div class="header__top-inner__item__change red" v-if="false">
                    <span>{{ (-1.72).toFixed(2) }}%</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="header__top-inner__item" :class="{ red: true }">
                  <span class="title">Инд.МосБиржи</span>
                  <span class="price">{{ (2966.98).toFixed(2) }}</span>
                  <div class="header__top-inner__item__change green" v-if="false">
                    <span>+{{ (1.72).toFixed(2) }}%</span>
                  </div>
                  <div class="header__top-inner__item__change red" v-if="true">
                    <span>{{ (-1.72).toFixed(2) }}%</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="header__top-inner__item" :class="{ red: false }">
                  <span class="title">MSCI Russia</span>
                  <span class="price">{{ (612.72).toFixed(2) }}</span>
                  <div class="header__top-inner__item__change green" v-if="true">
                    <span>+{{ (1.72).toFixed(2) }}%</span>
                  </div>
                  <div class="header__top-inner__item__change red" v-if="false">
                    <span>{{ (-1.72).toFixed(2) }}%</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="header__top-inner__item" :class="{ red: true }">
                  <span class="title">USD/RUB</span>
                  <span class="price">{{ (73.09).toFixed(4) }}</span>
                  <div class="header__top-inner__item__change green" v-if="false">
                    <span>+{{ (1.72).toFixed(2) }}%</span>
                  </div>
                  <div class="header__top-inner__item__change red" v-if="true">
                    <span>{{ (-1.72).toFixed(2) }}%</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="header__top-inner__item" :class="{ red: true }">
                  <span class="title">EUR/RUB</span>
                  <span class="price">{{ (86.52).toFixed(4) }}</span>
                  <div class="header__top-inner__item__change green" v-if="false">
                    <span>+{{ (1.72).toFixed(2) }}%</span>
                  </div>
                  <div class="header__top-inner__item__change red" v-if="true">
                    <span>{{ (-1.72).toFixed(2) }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="header__content__nav">
          <button class="header__content__gmb" @click="openMobileMenu()">
            <div class="header__content__gmb-line"></div>
            <div class="header__content__gmb-line"></div>
            <div class="header__content__gmb-line"></div>
          </button>
          <div class="header__content__nav__wrapper">
            <div class="header__content__nav-logo">
              <nuxt-link to="/">
                <img src="images/logo-dark.svg" alt />
              </nuxt-link>
            </div>
          </div>
          <div class="header__content__nav-menu">
            <button class="header__search" @click="toggleSearch()">
              <img src="/images/search-dark.svg" alt="Поиск" v-show="!searchInnerActive" />
              <img src="/pics/svg/cross-dark.svg" alt="Поиск" v-show="searchInnerActive" />
            </button>
            <button class="header__content__login" @click="showLogin()" v-if="!isLoggedIn">
              Войти
            </button>
            <button class="header__content__login" @click="logout()" v-else>
              Выйти
            </button>
          </div>
          <div class="header__search__wrapper" :class="{ active: searchActive, visible: searchWrapperOverflow }" v-click-outside="closeSearchDesktop">
            <div class="header__search__inner" :class="{ active: searchInnerActive }">
              <div class="header__search__inner__top" :class="{ active: searchInput }">
                <button class="header__search__inner__button">
                  <img src="/images/search-dark.svg" alt="Найти" />
                </button>
                <input class="header__search__inner__input" type="text" name="search" v-model="searchInput" placeholder="Поиск" />
                <div class="header__search__inner__cats">
                  <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 1 }" @click="searchActiveCat = 1">
                    <span>Везде</span>
                  </button>
                  <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 2 }" @click="searchActiveCat = 2">
                    <span>Статьи</span>
                  </button>
                  <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 3 }" @click="searchActiveCat = 3">
                    <span>Авторы</span>
                  </button>
                  <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 4 }" @click="searchActiveCat = 4">
                    <span>Тэги</span>
                  </button>
                  <button class="header__search__inner__cats__close-icon" @click="toggleSearch()">
                    <img src="/pics/svg/cross-dark.svg" alt="закрыть" />
                  </button>
                </div>
              </div>
              <div class="header__search__dropdown" v-show="searchInput">
                <div class="header__search__dropdown__inner">
                  <div class="header__search__dropdown__cats">
                    <div class="header__search__dropdown__cat">
                      <span class="header__search__dropdown__cat__title">авторы</span>
                      <div class="header__search__dropdown__cat__items">
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Вася Пупкин - эксперт Сбербанка</nuxt-link>
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Вася Пупкин - эксперт Сбербанка</nuxt-link>
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Вася Пупкин - эксперт Сбербанка</nuxt-link>
                      </div>
                    </div>
                    <div class="header__search__dropdown__cat">
                      <span class="header__search__dropdown__cat__title">статьи</span>
                      <div class="header__search__dropdown__cat__items">
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Как Сбербанк текст текст текст</nuxt-link>
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Как Сбербанк текст текст текст</nuxt-link>
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Как Сбербанк текст текст текст</nuxt-link>
                      </div>
                    </div>
                    <div class="header__search__dropdown__cat">
                      <span class="header__search__dropdown__cat__title">тэги</span>
                      <div class="header__search__dropdown__cat__items">
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Сбербанк инвестиции</nuxt-link>
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Сбербанк</nuxt-link>
                        <nuxt-link to="/" class="header__search__dropdown__cat__item">Сберонлайн</nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="header__search__dropdown__more">
                    <nuxt-link to="/">
                      <span>Посмотреть все результаты</span>
                      <img src="/pics/svg/arrow-right-dark.svg" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom" :class="{ active: menuActive && !searchActive }" @mouseenter="menuActive = true" @mouseleave="menuActive = false">
      <div class="header__bottom__content container">
        <div class="header__bottom__left">
          <template v-if="!isLoggedIn">
            <span class="text-thick register__title">Зарегистрируйтесь</span>
            <span class="text-thin register__text">Зарегистрируйтесь чтобы составить свой список бумаг и остлеживать
              малейшие изменения котировок</span>
            <button class="register__button button-green" @click="showRegistration()">
              <span>зарегистрироваться</span>
            </button>
            <div class="login" @click="showLogin()">
              <span class="text-thin">Уже есть аккаунт?</span>
              <span class="text-thin text-dark">Войти</span>
            </div>
          </template>
        </div>
        <div class="header__bottom__right">
          <div class="articles">
            <ul :class="{ active: activeCat == 1 }">
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="strategies">
            <ul :class="{ active: activeCat == 2 }">
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="services">
            <ul :class="{ active: activeCat == 3 }">
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="media">
            <ul :class="{ active: activeCat == 4 }">
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header__menu" :class="{ active: menuActive }">
      <div class="header__menu__top">
        <nuxt-link to="/" class="header__menu__top__logo">
          <img src="/images/logo-dark.svg" alt="Birja.rf" />
        </nuxt-link>
        <button @click="menuActive = false" class="header__menu__top__close">
          <img src="/pics/svg/cross-dark.svg" alt="Закрыть" />
        </button>
      </div>
      <nav class="header__menu__nav">
        <div class="header__menu__nav__item" :class="{ open: activeCat == 1 }">
          <div class="header__menu__nav__item__top">
            <nuxt-link to="/">Статьи</nuxt-link>
            <button @click="openMobileCat(1)">
              <img src="/pics/svg/arrow-down-dark.svg" alt="Переключить" />
            </button>
          </div>
          <div class="header__menu__nav__item__inner">
            <ul>
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__menu__nav__item" :class="{ open: activeCat == 2 }">
          <div class="header__menu__nav__item__top">
            <nuxt-link to="/">Стратегии</nuxt-link>
            <button @click="openMobileCat(2)">
              <img src="/pics/svg/arrow-down-dark.svg" alt="Переключить" />
            </button>
          </div>
          <div class="header__menu__nav__item__inner">
            <ul>
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__menu__nav__item" :class="{ open: activeCat == 3 }">
          <div class="header__menu__nav__item__top">
            <nuxt-link to="/">Сервисы</nuxt-link>
            <button @click="openMobileCat(3)">
              <img src="/pics/svg/arrow-down-dark.svg" alt="Переключить" />
            </button>
          </div>
          <div class="header__menu__nav__item__inner">
            <ul>
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__menu__nav__item" :class="{ open: activeCat == 4 }">
          <div class="header__menu__nav__item__top">
            <nuxt-link to="/">Медиа</nuxt-link>
            <button @click="openMobileCat(4)">
              <img src="/pics/svg/arrow-down-dark.svg" alt="Переключить" />
            </button>
          </div>
          <div class="header__menu__nav__item__inner">
            <ul>
              <li>
                <nuxt-link to="#">Europe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Asia</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Emerging</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Funds</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Technology</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="header__menu__bottom">
        <template v-if="!isLoggedIn">
          <button class="login__button button-light" @click="showLogin()" v-if="!isLoggedIn">
            <span>Войти</span>
          </button>
          <button class="login__button button-light" @click="logout()" v-else>
            <span>Выйти</span>
          </button>
          <span class="text-thick register__title">Зарегистрируйтесь</span>
          <span class="text-thin register__text">Зарегистрируйтесь чтобы составить свой список бумаг и остлеживать
            малейшие изменения котировок</span>
          <button class="register__button button-green" @click="showRegistration()">
            <span>зарегистрироваться</span>
          </button>
          <div class="login" @click="showLogin()">
            <span class="text-thin">Уже есть аккаунт?</span>
            <span class="text-thin text-dark">Войти</span>
          </div>
        </template>
      </div>
    </div>
    <div class="header__search__menu" :class="{ active: searchInnerActive }">
      <div class="header__search__menu__top">
        <span class="header__search__menu__top__title">Поиск</span>
        <button class="header__search__menu__top__close" @click="closeSearch()">
          <img src="/pics/svg/cross-dark.svg" alt="закрыть" />
        </button>
      </div>
      <div class="header__search__menu__search-area" :class="{ active: searchMobileFocused || searchInput }" v-click-outside="onMobileSearchUnfocus">
        <div class="header__search__menu__search-area__top">
          <button class="header__search__menu__search-area__top__left-search">
            <img src="/images/search-dark.svg" />
          </button>
          <input type="text" name="search" v-model="searchInput" placeholder="Поиск" @click="onMobileSearchFocus" />
        </div>
        <div class="header__search__inner__cats">
          <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 1 }" @click="searchActiveCat = 1">
            <span>Везде</span>
          </button>
          <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 2 }" @click="searchActiveCat = 2">
            <span>Статьи</span>
          </button>
          <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 3 }" @click="searchActiveCat = 3">
            <span>Авторы</span>
          </button>
          <button class="header__search__inner__cats__item" :class="{ active: searchActiveCat == 4 }" @click="searchActiveCat = 4">
            <span>Тэги</span>
          </button>
        </div>
        <div class="header__search__menu__search-area__dropdown" v-show="searchInput">
          <div class="header__search__dropdown__cats">
            <div class="header__search__dropdown__cat">
              <span class="header__search__dropdown__cat__title">авторы</span>
              <div class="header__search__dropdown__cat__items">
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Вася Пупкин - эксперт Сбербанка</nuxt-link>
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Вася Пупкин - эксперт Сбербанка</nuxt-link>
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Вася Пупкин - эксперт Сбербанка</nuxt-link>
              </div>
            </div>
            <div class="header__search__dropdown__cat">
              <span class="header__search__dropdown__cat__title">статьи</span>
              <div class="header__search__dropdown__cat__items">
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Как Сбербанк текст текст текст</nuxt-link>
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Как Сбербанк текст текст текст</nuxt-link>
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Как Сбербанк текст текст текст</nuxt-link>
              </div>
            </div>
            <div class="header__search__dropdown__cat">
              <span class="header__search__dropdown__cat__title">тэги</span>
              <div class="header__search__dropdown__cat__items">
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Сбербанк инвестиции</nuxt-link>
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Сбербанк</nuxt-link>
                <nuxt-link to="/" class="header__search__dropdown__cat__item">Сберонлайн</nuxt-link>
              </div>
            </div>
          </div>
          <div class="header__search__dropdown__more">
            <nuxt-link to="/">
              <span>Посмотреть все результаты</span>
              <img src="/pics/svg/arrow-right-dark.svg" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header__registration-small" :class="{ active: registrationSmallActive }">
      <img src="/images/logo.svg" class="header__registration-small__title" />
      <div v-swiper:registrationSmallSwiper="registrationSmallSwiperOption" class="header__registration-small__slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in 6" :key="i">
            Как работать с акциями в условиях экономического стресса. Советы от
            богов финансового мира
          </div>
        </div>
        <div class="swiper-pagination header__registration-small__pagination"></div>
      </div>
      <button class="header__registration-small__register" @click="
          registrationSmallActive = false;
          showRegistration();
        ">
        <span>зарегистрироваться</span>
      </button>
    </div>
    <div class="header__registration-login" :class="{ active: registrationLoginModalActive }">
      <div v-swiper:registrationLoginSwiper="registrationLoginSwiperOption" class="header__registration-login__slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in 5" :key="i">
            <img src="/pics/img/rlbg.png" />
          </div>
        </div>
        <div class="swiper-pagination header__registration-login__pagination"></div>
      </div>
      <div class="header__registration-login__container container">
        <button class="header__registration-login__close" @click="registrationLoginModalActive = false">
          <img src="/pics/svg/cross.svg" />
        </button>
        <button class="header__registration-login__close header__registration-login__close--mobile" @click="registrationLoginModalActive = false">
          <img src="/pics/svg/cross-dark.svg" />
        </button>
        <div class="header__registration-login__left">
          <img src="/images/logo.svg" />
          <span>Откройте доступ к уникальным стратегиям инвестирования.</span>
        </div>
        <form @submit.prevent="logIn()" class="header__registration-login__right" :class="{ active: registrationLoginShownWindow == 'login' }">
          <img class="header__registration-login__right__logo" src="/images/logo-dark.svg" />
          <h2 class="header__registration-login__right__title">
            Войти в биржа.рф
          </h2>
          <div class="header__registration-login__right__inputs">
            <div class="header__registration-login__right__input" :class="{ 'input-error': error }">
              <input type="text" name="login" placeholder="Логин" v-model="loginEmail" required @input="error = false" />
            </div>
            <div class="header__registration-login__right__input" :class="{ 'input-error': error }">
              <input :type="registrationLoginShowPassword ? 'text' : 'password'" name="password" placeholder="Пароль" v-model="loginPass" required @input="error = false" />
              <button type="button" @click="
                  registrationLoginShowPassword = !registrationLoginShowPassword
                ">
                <!-- <img src="/images/eye-dark.svg"> -->
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ 'icon-error': error }">
                  <path d="M11.25 9C11.25 10.2405 10.2405 11.25 9 11.25C7.7595 11.25 6.75 10.2405 6.75 9C6.75 7.7595 7.7595 6.75 9 6.75C10.2405 6.75 11.25 7.7595 11.25 9ZM18 8.66325C18 8.66325 14.811 14.25 9.01125 14.25C3.62625 14.25 0 8.66325 0 8.66325C0 8.66325 3.3345 3.75 9.01125 3.75C14.7817 3.75 18 8.66325 18 8.66325ZM12.75 9C12.75 6.92925 11.0715 5.25 9 5.25C6.92925 5.25 5.25 6.92925 5.25 9C5.25 11.0715 6.92925 12.75 9 12.75C11.0715 12.75 12.75 11.0715 12.75 9Z" fill="#8E8F8F" />
                </svg>
              </button>
            </div>
          </div>
          <div class="header__registration-login__right__forgot-pass">
            <nuxt-link to="#">Забыли пароль?</nuxt-link>
          </div>
          <button type="submit" class="header__registration-login__right__button">
            Войти
          </button>
          <span class="header__registration-login__right__or">Или</span>
          <div class="header__registration-login__right__social">
            <button class="header__registration-login__right__social__button">
              Facebook
            </button>
            <button class="header__registration-login__right__social__button">
              Вконтакте
            </button>
          </div>
          <button type="button" class="header__registration-login__right__bottom-text" @click="showRegistration()">
            <span>Нет аккаунта?</span>
            <span>Зарегистрироваться</span>
          </button>
        </form>
        <form @submit.prevent="register()" class="header__registration-login__right" :class="{ active: registrationLoginShownWindow == 'registration' }">
          <img class="header__registration-login__right__logo" src="/images/logo-dark.svg" />
          <h2 class="header__registration-login__right__title">
            Зарегистрироваться в биржа.рф
          </h2>
          <div class="header__registration-login__right__inputs">
            <div class="header__registration-login__right__input">
              <input type="text" name="name" placeholder="Имя" v-model="regName" required />
            </div>
            <div class="header__registration-login__right__input">
              <input type="text" name="surname" placeholder="Фамилия" v-model="regSurname" required />
            </div>
            <div class="header__registration-login__right__input">
              <input type="tel" name="phone" placeholder="Телефон" v-model="regPhone" required />
            </div>
            <div class="header__registration-login__right__input">
              <input type="email" name="email" placeholder="Электронная почта" v-model="regEmail" required />
            </div>
            <div class="header__registration-login__right__input">
              <input :type="registrationLoginShowPassword ? 'text' : 'password'" name="password" placeholder="Пароль" v-model="regPass" required />
              <button type="button" @click="
                  registrationLoginShowPassword = !registrationLoginShowPassword
                ">
                <img src="/images/eye-dark.svg" />
              </button>
            </div>
          </div>
          <button type="submit" class="header__registration-login__right__button header__registration-login__right__button--register">
            зарегистрироваться
          </button>
          <span class="header__registration-login__right__or">Или</span>
          <div class="header__registration-login__right__social">
            <button class="header__registration-login__right__social__button">
              Facebook
            </button>
            <button class="header__registration-login__right__social__button">
              Вконтакте
            </button>
          </div>
          <button type="button" class="header__registration-login__right__bottom-text" @click="showLogin()">
            <span>Уже есть аккаунт?</span>
            <span>Войти</span>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
import vClickOutside from "v-click-outside";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    loading: Boolean
  },

  data() {
    return {
      fixed: false,
      error: false,
      searchInput: "",
      searchActiveCat: 1,
      searchActive: false,
      searchInnerActive: false,
      searchWrapperOverflow: false,
      searchMobileFocused: false,
      menuActive: false,
      registrationSmallActive: false,
      registrationLoginModalActive: false,
      registrationLoginShowPassword: false,
      registrationLoginShownWindow: "login",

      loginEmail: "",
      loginPass: "",

      regName: "",
      regSurname: "",
      regEmail: "",
      regPass: "",
      regPhone: "",

      activeCat: 1,
      swiperOption: {
        spaceBetween: 50,
        slidesPerView: "auto",
        freeMode: true
      },
      registrationSmallSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".header__registration-small__pagination",
          type: "bullets",
          clickable: true
        }
      },
      registrationLoginSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".header__registration-login__pagination",
          type: "bullets"
        }
      }
    };
  },

  directives: {
    clickOutside: vClickOutside.directive
  },

  mounted() {
    this.$nuxt.$on("showSmallRegistrationModal", () => {
      this.registrationSmallActive = true;
    });
    this.$nuxt.$on("setHeaderFixed", v => {
      this.fixed = v;
      console.log("this.fixed", this.fixed);
    });
  },

  computed: {
    ...mapState("auth", ["user"]),

    isLoggedIn() {
      return this.user != null;
    }
  },

  methods: {
    search() {},

    mobileSearch() {
      if (window && window.innerWidth <= 700) return true;
      return false;
    },

    ...mapActions("auth", ["LogIn"]),
    logIn() {
      this.$store
        .dispatch("auth/login", {
          email: this.loginEmail,
          password: this.loginPass
        })
        .then(() => {
          this.$toast.success("Успешно");
          this.registrationLoginModalActive = false;
        })
        .catch(() => {
          this.error = true;
          this.$toast.error("Не получилось войти");
        });
    },

    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(() => {
          this.$toast.success("Успешно");
        })
        .catch(() => {
          this.$toast.success("Не получилось выйти");
        });
    },

    register() {
      this.$store
        .dispatch("auth/register", {
          name: this.regName,
          surname: this.regSurname,
          phone: this.regPhone,
          email: this.regEmail,
          password: this.regPass
        })
        .then(() => {
          this.$toast.success("Успешно");
          this.registrationLoginModalActive = false;
        })
        .catch(e => {
          if (e.statusCode == 409)
            this.$toasted.error("Пользователь с таким email уже существует");
          else this.$toast.error("Не получилось зарегистрироваться");
        });
    },

    onBgClick() {
      this.menuActive = false;
      this.registrationSmallActive = false;
      this.closeSearch();
    },

    openMobileMenu() {
      this.menuActive = true;
    },

    closeMobileMenu() {
      this.menuActive = false;
    },

    openMobileCat(i) {
      if (this.activeCat == i) this.activeCat = -1;
      else this.activeCat = i;
    },

    openSearch() {
      setTimeout(() => {
        this.searchActive = true;
        this.searchInnerActive = true;
        setTimeout(() => {
          if (this.searchActive) this.searchWrapperOverflow = true;
        }, 251);
      }, 1);
    },

    closeSearch() {
      this.searchInnerActive = false;
      this.searchWrapperOverflow = false;
      setTimeout(() => {
        if (!this.searchInnerActive) this.searchActive = false;
      }, 250);
    },

    closeSearchDesktop() {
      if (!this.mobileSearch) {
        this.closeSearch();
        console.log("wjat");
      }
    },

    toggleSearch() {
      if (this.searchActive) this.closeSearch();
      else this.openSearch();
    },

    onMobileSearchFocus() {
      this.searchMobileFocused = true;
    },

    onMobileSearchUnfocus() {
      this.searchMobileFocused = false;
    },

    showLogin() {
      this.registrationLoginShownWindow = "login";
      this.registrationLoginModalActive = true;
    },

    showRegistration() {
      this.registrationLoginShownWindow = "registration";
      this.registrationLoginModalActive = true;
    }
  }
};

</script>

<style lang="scss">
@import "~/assets/scss/elements/header.scss";
</style>
