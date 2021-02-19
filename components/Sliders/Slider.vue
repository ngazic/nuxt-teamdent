<template>
  <section class="slider mb-10">
    <client-only>
      <LightGallery
        :disable-scroll="true"
        :images="data.items"
        :index="index"
        @close="index = null"
      />
    </client-only>
    <div class="bg-blue-400">
      <h2
        class="container mx-auto text-center md:text-left text-3xl text-white font-sans font-bold p-5 md:pb-10 md:pt-10 md:pl-0"
      >
        {{ data.title }}
      </h2>
    </div>
    <div class="container mx-auto pt-20 md:pb-10 md:pt-28">
      <div ref="mySlider" class="swiper-container">
        <div class="swiper-wrapper gallery__items">
          <a
            v-for="(item, indx) in data.items"
            :key="indx"
            :href="item.video"
            class="swiper-slide text-white"
            @click="clickHandler(indx)"
          >
            <img
              v-if="item.video"
              class="w-full object-cover object-center h-72 md:h-96"
              :src="item.url"
              :alt="item.title"
              width="520"
              height="420"
            />
            <svg
              v-if="item.video"
              style="transform: translate(-50%, -50%)"
              class="w-16 h-16 absolute z-30 top-1/2 left-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <img
              v-else
              class="w-full object-cover object-center swiper-lazy h-72 md:h-96"
              :data-src="item.url"
              :alt="item.title"
              width="520"
              height="420"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper } from 'swiper/swiper-bundle.esm'

export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      index: null,
      slider: null,
      mySliderOptions: {
        slidesPerView: 1.2,
        preloadImages: false,
        centeredSlides: true,
        spaceBetween: 9,
        loop: true,
        autoplay: {
          delay: 1500,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 20,
          },
          1024: {
            normalizeSlideIndex: true,
            watchSlidesVisibility: true,
            initialSlide: 1,
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        lazy: {
          threshold: 50,
          sequential: false,
          observer: true,
          loadPrevNext: true,
          loadPrevNextAmount: 2,
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
  methods: {
    clickHandler(indx) {
      this.index = indx
    },
  },
}
</script>
