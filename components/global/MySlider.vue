<template>
  <section class="slider mb-10">
    <div class="bg-blue-400">
      <h2
        class="container mx-auto text-center md:text-left text-3xl text-white font-sans font-bold p-5 md:pb-10 md:pt-10 md:pl-0"
      >
        My Slider
      </h2>
    </div>
    <div class="container mx-auto pt-20 md:pb-10 md:pt-28">
      <div ref="mySlider" class="swiper-container">
        <div class="swiper-wrapper gallery__items">
          <a
            v-for="(item, indx) in items"
            :key="indx"
            :href="item.url"
            class="swiper-slide text-white"
            @click="clickHandler(indx)"
          >
            <img
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
    slides: {
      type: String,
    },
  },
  computed: {
    items() {
      const slides = this.slides.split(',')
      const items = []
      console.log(slides)
      slides.forEach((item) => {
        console.log(item)
        const temp = item.split('|')
        items.push({ url: temp[0], title: temp[1] })
      })
      return items
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
  methods: {
    clickHandler(indx) {
      console.log('clicked' + indx)
      this.index = indx
    },
  },
  mounted() {
    console.log(this.slides)
    this.slider = new Swiper(this.$refs.mySlider, this.mySliderOptions)
  },
  beforeDestroy() {
    this.slider.destroy(true, true)
  },
}
</script>
