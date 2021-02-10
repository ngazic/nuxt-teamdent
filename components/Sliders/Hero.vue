<template>
  <div ref="mySlider" class="hero swiper-container w-full">
    <div class="swiper-wrapper">
      {{ 'range.items' }}
      <div class="swiper-slide bg-cover bg-center" style="height: 65vh">
        <img
          class="w-full h-full object-cover"
          :src="img"
          alt=".alt"
          width="1600"
          height="500"
        />
        <h1 class="text-black">This is cool slide</h1>
      </div>
      {{ 'end' }}
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper } from 'swiper/swiper-bundle.esm'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
export default {
  props: {
    img: String,
  },
  data() {
    return {
      slider: null,
      mySliderOptions: {
        slidesPerView: 1,
        effect: 'slidein',
        spaceBetween: 9,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        preloadImages: false,
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: {
          delay: 2000,
        },
      },
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs.mySlider, this.mySliderOptions)
    console.log(this.img)
  },
  beforeDestroy() {
    this.slider.destroy(true, true)
  },
}
</script>

<style lang="scss">
.swiper-container {
  .swiper-slide {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: 2;
    }
  }

  .swiper-pagination-bullets {
    bottom: 10px;

    @media only screen and (max-width: 767px) {
      bottom: 6px;
    }

    .swiper-pagination-bullet {
      width: 18px;
      height: 18px;

      @media only screen and (max-width: 767px) {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
