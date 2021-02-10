<template>
  <header
    class="container ml-auto mr-auto bg-white flex flex-wrap items-center py-4"
  >
    <div class="flex-1 flex justify-between items-center">
      <nuxt-link
        to="/"
        class="text-2xl ml-2 md:ml-0 font-bold italic font-mono tracking-normal uppercase text-black"
        >Team dent</nuxt-link
      >
    </div>
    <input class="burger hidden" type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav role="navigation" class="w-full h-screen md:h-auto">
        <ul
          class="md:flex items-center justify-between text-base text-gray-700 px-6 md:p-0 pt-16 md:pt-0"
        >
          <li>Home</li>
          <li>Vijesti</li>
          <li>Foto</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  background: red;
}
</style>
