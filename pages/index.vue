<template>
  <div>
    <h1>Fetching content from the md files</h1>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
    <Hero
      :slides="post.hero.items"
      :headline="post.hero.headline"
      :headline2="post.hero.headline2"
      :location="post.hero.location"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content(params.slug || 'index').fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
}
</script>
