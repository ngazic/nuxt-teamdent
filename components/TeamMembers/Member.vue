<template>
  <article class="flex flex-wrap py-10 md:py-10 border-b border-gray-200">
    <div
      class="w-full md:w-1/6 max-h-60 image-zoom"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <img
        class="object-contain md:object-cover object-center w-full h-full"
        alt=""
        :src="data.image"
        width="213"
        height="240"
      />
    </div>
    <div
      class="md:w-5/6 w-full flex items-start content-zoom"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div class="w-full md:px-8">
        <h4
          class="font-bold font-roboto text-blue-400 capitalize mb-4 mt-4 md:mt-0 text-center md:text-left text-2xl"
        >
          {{ data.employee }}
        </h4>
        <p
          class="text-lg md:text-xl leading-relaxed text-gray-400 text-center md:text-left"
        >
          {{ data.aboutEmployee }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
}
</script>
