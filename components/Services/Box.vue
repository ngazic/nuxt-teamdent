<template>
  <div
    class="container mx-auto px-4 md:px-0"
    data-aos="flip-left"
    data-aos-duration="2000"
  >
    <div class="md:flex justify-evenly mb-10">
      <div
        v-for="(item, indx) in items"
        :key="indx"
        class="w-full mb-2 md:mb-0 md:w-1/4 text-around border pt-5 pb-5"
      >
        <img
          class="w-auto h-14 object-cover m-auto mb-6"
          :src="item.icon"
          alt="slika"
          width="72"
          height="56"
        />
        <h5 class="text-center">{{ item.headline }}</h5>
        <p class="text-center p-4 pb-0">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ourServices } from '~/data/services.json'
export default {
  data() {
    return {
      items: ourServices.additionalItems,
    }
  },
}
</script>
