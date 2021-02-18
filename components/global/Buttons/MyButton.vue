<template>
  <a :href="href" :target="target" :class="extraClass" class="button"
    ><slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: '',
    },
    extraClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  background: blue;
  padding: 10px;
}
</style>
