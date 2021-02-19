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
    <input id="menu-toggle" class="burger hidden" type="checkbox" />
    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div id="menu" class="hidden md:flex md:items-center md:w-auto w-full">
      <nav role="navigation" class="w-full h-screen md:h-auto">
        <ul
          class="md:flex items-center justify-between text-base text-gray-700 px-6 md:p-0 pt-16 md:pt-0"
        >
          <li>
            <nuxt-link
              class="md:p-4 py-3 px-2 block border-b md:border-none font-sans font-semibold text-black uppercase text-base tracking-wide"
              to="/"
              >Pocetna</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="md:p-4 py-3 px-2 block border-b md:border-none font-sans font-semibold text-black uppercase text-base tracking-wide"
              to="/vijesti"
              >Vijesti</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="md:p-4 py-3 px-2 block border-b md:border-none font-sans font-semibold text-black uppercase text-base tracking-wide"
              to="/galerija"
              >Galerija</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
  --header-height: 89px;
  --alert-height: 72px;

  @media only screen and (max-width: 767px) {
    --header-height: 73px;
  }
}

header {
  .logo {
    width: 180px;
    height: 57px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  label {
    display: block;
    position: absolute;
    right: 13px;
    height: 20px;
    width: 27px;
    cursor: pointer;
    text-indent: -9999px;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  span {
    overflow: hidden;
    position: absolute;
    display: block;
    background: #000;
    width: 27px;
    height: 0.1rem;
    border-radius: 0.1rem;
    left: 0;
    text-indent: 0;
    transition: all 0.6s cubic-bezier(0.5, 0.1, 0, 1.2);

    &:first-child {
      top: 0;
    }

    &:nth-child(2) {
      top: 8px;
    }

    &:nth-child(3) {
      top: 16px;
    }
  }

  input[type='checkbox'] {
    display: none;
    visibility: hidden;

    &:checked {
      ~ label span:first-child {
        height: 0.01rem;
        top: 0;
        width: 27px;
        transform: translateX(-8px) rotate(-45deg) translateY(12px);

        @supports (-webkit-touch-callout: none) {
          height: 1px;
        }
      }

      ~ label span:nth-child(2) {
        opacity: 0;
      }

      ~ label span:nth-child(3) {
        height: 0.01rem;
        top: 14px;
        width: 27px;
        transform: translateX(-5px) rotate(45deg) translateY(-8px);
      }

      ~ label {
        top: 21px;

        @media only screen and (max-width: 767px) {
          top: 21px;
        }
      }

      ~ #menu {
        display: flex;
      }
    }
  }

  nav {
    a.nuxt-link-active {
      font-weight: bold;
    }

    a.nuxt-link-exact-active {
      color: rgb(36, 127, 238);
      font-weight: bold;
    }
  }
}

.header-spacer {
  height: var(--header-height);
}

.alert-spacer {
  height: var(--alert-height);
}
</style>
