<template>
  <div class="wrapper">
    <Header :loading="loading" />
    <Nuxt />
    <Footer :loading="loading" />
  </div>
</template>

<script>
import Header from "~/components/global/Header";
import Footer from "~/components/global/Footer";

export default {
  components: { Header, Footer },

  data() {
    return {
      loading: true
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 30 * 1000)

    let watchForHover = () => {
      let hasHoverClass = false;
      let container = document.body;
      let lastTouchTime = 0;

      let enableHover = () => {
        // discard emulated mouseMove events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.classList.remove("touch");
        hasHoverClass = true;
        this.$bus.isMobile = false;
      };

      let disableHover = () => {
        if (!hasHoverClass) return;

        container.classList.add("touch");
        hasHoverClass = false;
        this.$bus.isMobile = true;
      };

      let updateLastTouchTime = () => {
        lastTouchTime = new Date();
      };

      document.addEventListener("touchstart", updateLastTouchTime, true);
      document.addEventListener("touchstart", disableHover, true);
      document.addEventListener("mousemove", enableHover, true);

      enableHover();
    };

    watchForHover();
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/pages/common.scss';
</style>
