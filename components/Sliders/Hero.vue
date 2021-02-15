<template>
  <div class="hero w-full mb-10 md:mb-0 bg-transparent relative">
    <div
      class="pl-10 md:pl-0 text-white absolute z-10 md:ml-64 top-1/4 md:top-1/2"
    >
      <h3 class="text-3xl md:text-4xl leading-tight font-sans font-bold">
        {{ headline }}
      </h3>
      <h3
        class="text-4xl md:text-5xl leading-tight pb-2 md:pb-8 uppercase font-bold font-sans"
      >
        {{ headline2 }}
      </h3>
      <div class="md:text-2xl font-sans flex items-center">
        <span class="mr-2 w-6 h-10"
          ><svg
            class="inline-block w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path></svg></span
        >{{ location }}
      </div>
    </div>

    <div ref="mySlider" class="hero swiper-container w-full">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="swiper-slide bg-cover bg-center"
          style="height: 65vh"
        >
          <img
            class="w-full h-full object-cover"
            :src="slide.image"
            alt="slide.alt"
            width="1600"
            height="500"
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper } from 'swiper/swiper-bundle.esm'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
export default {
  props: {
    headline: String,
    headline2: String,
    location: String,
    slides: Array,
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
  },
  beforeDestroy() {
    this.slider.destroy(true, true)
  },
}
</script>
