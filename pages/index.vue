<template>
  <div>
    <Hero
      :slides="post.hero.items"
      :headline="post.hero.headline"
      :headline2="post.hero.headline2"
      :location="post.hero.location"
    />
    <section id="about-us">
      <section class="container relative mx-auto px-4 md:px-0">
        <WorkingHours />
      </section>
      <AboutUs :data="post.aboutUs" />
    </section>
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
<style>
p.content {
  white-space: pre-wrap;
}
</style>
