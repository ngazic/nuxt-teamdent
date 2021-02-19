<template>
  <main>
    <h2
      class="text-center text-3xl text-white font-sans font-bold pb-5 pt-5 md:pb-10 md:pt-10 bg-blue-500"
    >
      Vijesti
    </h2>
    <div class="container mx-auto mb-10">
      <div class="grid md:grid-cols-2 md:gap-6 my-10 md:my-10 px-4 sm:px-0">
        <NewsItem v-for="(item, index) in news" :key="index" :news="item" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let news
    try {
      // OR const article = await $content(`articles/${params.slug}`).fetch()
      news = await $content('vijesti').sortBy('date', 'desc').fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      news,
    }
  },
}
</script>
