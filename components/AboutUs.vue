<template>
  <section
    class="container mx-auto about-us text-lg md:text-xl leading-relaxed mb-10 text-gray-400 relative lg:pr-80 px-4 md:px-0 md:py-12"
  >
    <section class="my-10 md:my-10 md:mr-10">
      <div class="w-full">
        <img
          class="object-cover w-full"
          :src="data.banner"
          alt="slika"
          width="920"
          height="386"
        />
      </div>
    </section>
    <h2 class="text-xl text-3xl font-bold font-serif text-blue-400 mb-5">
      {{ data.title }}
    </h2>
    <p class="content">
      {{ data.content }}
    </p>
  </section>
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
