<template>
  <footer class="bg-blue-500 pt-10 pt-16">
    <div class="container m-auto text-gray-800 flex flex-wrap justify-left">
      <div
        class="p-5 pb-0 pt-0 w-full sm:w-full md:w-4/12 mb-12 md:mb-0 text-center md:text-left"
      >
        <p
          class="uppercase text-white font-bold font-sans text-xl md:text-2xl mb-3 md:mb-6 tracking-wide"
        >
          {{ data.aboutUs.headline }}
        </p>
        <p class="text-xs text-white font-normal font-sans text-base text-base">
          {{ data.aboutUs.text }}
        </p>
      </div>

      <div
        class="p-5 pb-0 pt-0 w-1/2 w-full mb-12 md:mb-0 sm:w-6/12 md:w-4/12 text-center md:text-left"
      >
        <p
          class="uppercase text-white font-bold font-sans text-xl md:text-2xl mb-3 md:mb-6 tracking-wide"
        >
          {{ data.ourLocation.text }}
        </p>
        <ul>
          <li
            class="text-white font-normal text-base flex items-center flex-wrap justify-center md:justify-start"
          >
            <svg
              class="w-7 h-7 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
            <span class="font-bold text-lg inline-block tracking-wide">{{
              data.address.headline
            }}</span>
            <p class="w-full mt-2 text-base">
              {{ data.address.text }} <br />{{ data.address.text2 }}
            </p>
          </li>
        </ul>
      </div>

      <div
        class="p-5 pb-0 pt-0 w-full mb-12 md:mb-0 sm:w-6/12 md:w-4/12 text-center md:text-left text-white"
      >
        <p
          class="uppercase text-white font-bold font-sans text-xl md:text-2xl mb-3 md:mb-6 tracking-wide"
        >
          {{ data.followUs.text }}
        </p>
        <ul class="flex flex-wrap">
          <li
            class="w-full flex flex-wrap items-center justify-center md:justify-start"
          >
            <svg
              class="w-6 h-6 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              ></path>
            </svg>
            <span
              class="font-bold text-white text-lg block tracking-wide inline-block"
              >{{ data.email.text }}</span
            >
            <a
              :href="'mailto:' + data.email.email"
              class="text-base text-white font-normal ml-2"
              >{{ data.email.email }}</a
            >
          </li>
          <li
            class="w-full mt-4 flex items-center justify-center md:justify-start"
          >
            <svg
              class="w-6 h-6 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              ></path>
            </svg>
            <span class="font-bold inline-block text-lg block tracking-wide">{{
              data.telephone.text
            }}</span>
            <a :href="'tel:' + data.telephone.number" class="text-base ml-2">{{
              data.telephone.number
            }}</a>
          </li>
        </ul>

        <div
          class="flex flex-row text-black justify-center md:justify-start mt-4"
        >
          <a
            :href="data.socialShare.facebook"
            target="_blank"
            class="mt-4 mr-4 bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center scale-100 hover:scale-105 transition-all duration-500"
          >
            <svg
              class="text-white w-6 h-6"
              fill="bg-gray-200"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div
      class="flex pb-8 px-3 m-auto pt-8 text-center justify-center text-gray-300 text-sm flex-col md:flex-row max-w-6xl"
    >
      <div class="mt-2">© Copyright MTHIT 2021. Sva prava zadržana.</div>
    </div>
  </footer>
</template>

<script>
import footer from '~/data/footer.json'
export default {
  data() {
    return {
      data: footer,
    }
  },
}
</script>
