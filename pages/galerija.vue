<template>
  <main class="relative foto-layout">
    <client-only>
      <LightGallery
        :disable-scroll="true"
        :images="gallery.images"
        :index="index"
        @close="index = null"
      />
    </client-only>
    <div class="bg-layer">
      <div class="layer top-left"></div>
      <div class="layer bottom-right"></div>
    </div>

    <h2
      class="text-center text-3xl text-white font-sans font-bold pb-5 pt-5 md:pb-10 md:pt-10 bg-blue-400"
    >
      {{ gallery.headline }}
    </h2>

    <div class="container mx-auto overflow-hidden">
      <div class="flex flex-wrap gallery__items my-8 md:-mx-4 load-more">
        <a
          v-for="(image, i) in gallery.images"
          :key="i"
          :href="image.url"
          class="w-full md:w-6/12 text-white bg-hover"
          @click.prevent="index = i"
        >
          <img
            class="w-full object-cover object-center lazyload p-4"
            :src="image.url + '?nf_resize=fit&h=430'"
            :alt="image.title"
            width="520"
            height="430"
          />
        </a>
      </div>
      >
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let gallery
    try {
      gallery = await $content('galerija').fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
      // fetch only 5 articles
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      gallery,
    }
  },
  data() {
    return {
      index: null,
    }
  },
}
</script>
