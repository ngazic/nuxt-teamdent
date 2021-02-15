<template>
  <div class="py-5 md:py-0">
    <article class="h-full mb-5 md:mb-0 border">
      <nuxt-link
        :to="news.path"
        class="news-item w-full h-full bg-white h-full"
      >
        <div class="h-64 overflow-hidden">
          <img
            class="lazyload object-cover object-center h-full w-full"
            :data-src="news.image.src"
            :src="news.image.src"
            alt="slika"
            width="250"
            height="250"
          />
        </div>
        <div class="py-4 pb-4 px-6">
          <div
            class="text-blue-400 inline-flex items-center leading-none text-sm pr-3 py-2 flex items-center"
          >
            <svg
              class="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span class="text-gray-400 font-mono">{{
              new Date(news.createdAt).toISOString().split('T')[0]
            }}</span>
          </div>
          <h4 class="text-2xl font-bold font-sans title-font text-blue-400">
            {{ news.title }}
          </h4>
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
    },
  },
}
</script>
