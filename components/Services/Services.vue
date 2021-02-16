<template>
  <div>
    <div class="bg-blue-400">
      <h2
        class="container mx-auto text-center md:text-left text-3xl text-white font-sans font-bold p-5 md:pb-10 md:pt-10 md:pl-0"
      >
        {{ data.title }}
      </h2>
    </div>
    <div class="container mx-auto py-20 md:py-28">
      <div class="grid md:grid-cols-3 md:gap-6 px-4 md:px-0">
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="text-center pt-0 pb-10 md:pd-0"
          data-aos="zoom"
          data-aos-duration="2000"
        >
          <img
            class="w-auto h-14 object-cover m-auto mb-6"
            :src="item.icon"
            alt="slika"
            width="56"
            height="56"
          />
          <h5
            class="text-lg md:text-xl text-gray-800 font-sans leading-relaxed mb-2"
          >
            {{ item.headline }}
          </h5>
          <p
            class="text-base text-centar font-normal font-sans leading-relaxed text-gray-400"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ourServices } from '~/data/services.json'

export default {
  data() {
    return {
      data: ourServices,
    }
  },
}
</script>
