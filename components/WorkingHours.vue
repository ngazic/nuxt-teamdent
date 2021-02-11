<template>
  <div
    class="container mx-auto md:relative lg:absolute p-4 md:w-80 lg:-top-52 lg:right-0 z-10 mb-4 mt-10 bg-white lg:border px-4"
  >
    <h4
      class="text-left pt-4 pb-4 text-2xl font-bold font-roboto flex items-center text-gray-400"
    >
      <svg
        class="w-8 h-8 mr-2 inline-block"
        fill="none"
        stroke="#1FBAEC"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
      {{ title }}
    </h4>
    <table
      class="table w-full lg:w-auto font-normal text-gray-400 md:text-center"
    >
      <thead>
        <tr
          v-for="(day, index) in workHours"
          :key="index"
          class="border lg:border-none"
        >
          <th
            class="text-xl text-left tracking-wide py-2 md:py-4 px-2 lg:px-0 font-sans font-normal w-1/2 sm:text-left lg:text-left"
          >
            <svg
              class="w-6 h-6 inline-block"
              fill="none"
              stroke="#1FBAEC"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {{ day.day }}
          </th>
          <th
            class="text-xl text-left tracking-wide py-2 md:py-4 px-2 lg:px-0 font-sans font-normal w-1/2 text-right lg:text-left"
          >
            {{ day.time }}
          </th>
        </tr>
      </thead>
    </table>
    <h4
      class="text-left pt-4 pb-4 text-2xl font-bold font-roboto flex items-center italic text-gray-400"
    >
      <svg
        class="w-8 h-8 inline-block mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#1FBAEC"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        /></svg
      ><a href="tel:+38730251231">{{ number }}</a>
    </h4>
  </div>
</template>

<script>
import workingHours from '~/data/workingHours.json'
export default {
  data() {
    return {
      workHours: workingHours.days,
      number: workingHours.workingTime.number,
      title: workingHours.workingTime.title,
    }
  },
}
</script>
