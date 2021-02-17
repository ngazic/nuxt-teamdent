<template>
  <div>
    <Hero
      :slides="post.hero.items"
      :headline="post.hero.headline"
      :headline2="post.hero.headline2"
      :location="post.hero.location"
    />
    <div class="pin-sticky">
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
      <section id="photos">
        <Slider :data="post.slider" />
        <div class="container mx-auto mb-20 md:mb-28">
          <nuxt-link
            to="/"
            class="max-w-xs flex justify-center mx-auto text-white font-bold bg-blue-400 border-0 py-2 px-6 mb-10 md:mb-0 rounded text-lg uppercase hover:bg-blue-700 w-full button--submit transition duration-700 ease-in-out"
            >Pogledaj više</nuxt-link
          >
        </div>
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
    <section id="cta" class="pb-20 md:pb-28">
      <Box />
    </section>
    <section id="contact" class="pb-0 md:pb-28">
      <ContactUs />
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
  mounted() {
    // eslint-disable-next-line no-undef
    AOS.init({
      once: true,
    })
  },
}
</script>
<style>
p.content {
  white-space: pre-wrap;
}
</style>
