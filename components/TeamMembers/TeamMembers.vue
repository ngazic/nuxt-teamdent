<template>
  <div>
    <div class="bg-blue-400">
      <h2
        class="container mx-auto text-center md:text-left text-3xl text-white font-sans font-bold p-5 md:pb-10 md:pt-10 md:pl-0"
      >
        {{ teamDent.title }}
      </h2>
    </div>
    <section class="container mx-auto px-4 md:px-0">
      <Member
        v-for="(member, index) in teamDent.items"
        :key="index"
        :data="member"
      />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    teamDent: {
      type: Object,
    },
  },
}
</script>
