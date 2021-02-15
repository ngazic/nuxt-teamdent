<template>
  <div>
    <div class="bg-blue-400 text-center">
      <h2
        class="container mx-auto md:text-left text-3xl text-white font-sans font-bold p-5 md:pb-10 md:pt-10 md:pl-0"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="container mx-auto grid md:grid-cols-2 md:gap-6 px-4 md:px-0 pt-12 md:pt-28"
    >
      <NewsItem v-for="(news, index) in data" :key="index" :news="news" />
    </div>
    <div class="container my-8 md:my-16 mx-auto">
      <nuxt-link
        to="vijesti"
        class="max-w-xs flex justify-center mx-auto text-white font-bold bg-blue-400 border-0 py-2 px-6 mb-10 md:mb-0 rounded text-lg uppercase hover:bg-blue-700 w-full transition duration-700 ease-in-out"
        >Pogledaj više</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
}
</script>
