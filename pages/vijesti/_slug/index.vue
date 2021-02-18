<template>
  <main>
    <div class="container mx-auto">
      <h2
        class="container mx-auto text-center text-3xl text-blue-400 font-sans font-boldcp-5 md:pb-10 md:pt-10 md:pl-0"
      >
        {{ post.title }}
      </h2>
      <div v-if="post.image" class="max-w-4xl mb-10 mt-10 mx-auto">
        <img
          class="object-cover max-h-96 w-full"
          :src="post.image.src"
          :alt="post.image.alt"
          width=""
          height=""
        />
      </div>
      <div
        class="content md:px-14 px-4 py-4 md:py-10 font-sans text-xl text-black"
      >
        <nuxt-content :document="post" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    let vijesti
    try {
      post = await $content(`vijesti/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
      vijesti,
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    AOS.init({
      once: true,
    })
  },
}
</script>
