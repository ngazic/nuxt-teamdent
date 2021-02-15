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
    <section id="news">
      <NewsList :data="vijesti" :title="post.newsTitle" />
    </section>
    <section id="team-dent" class="overflow-x-hidden">
      <TeamMembers :team-dent="post.teamDent" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    let vijesti
    try {
      post = await $content(params.slug || 'index').fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
      // fetch only 5 articles
      vijesti = await $content('vijesti').limit(4).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
      vijesti,
    }
  },
}
</script>
<style>
p.content {
  white-space: pre-wrap;
}
</style>
