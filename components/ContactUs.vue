<template>
  <div class="container mx-auto body-font relative">
    <div class="pb-0 md:pb-10 flex flex-wrap">
      <div
        class="w-full lg:w-2/3 rounded-l-sm overflow-hidden flex items-end justify-start relative md:order-first order-last"
      >
        <iframe
          width="100%"
          height="100%"
          title="map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=team%20dent&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          class="h-80 md:h-full"
        >
        </iframe>
      </div>
      <p class="is-invisible text-red-600"></p>
      <div
        class="w-full lg:w-1/3 bg-white rounded-sm flex flex-col p-8 pt-0 pb-0"
      >
        <div class="flex items-center">
          <div
            class="contact-form__success hidden font-medium text-2xl md:text-3xl p-12 pl-0 pr-0 md:h-96"
          >
            Vaša poruka je uspješno poslana! Odgovoriti ćemo vam u najkraćem
            mogućem roku.
          </div>
          <div
            class="contact-form__error hidden font-medium text-2xl md:text-3xl p-12 md:h-96"
          >
            Nešto je pošlo po zlu. Molimo pokušajte ponovo kasnije.
          </div>
        </div>
        <form
          name="Kontakt forma"
          action="/kontakt"
          class="js-form"
          method="post"
          novalidate
          data-netlify="true"
        >
          <div class="relative mb-4 form-field required">
            <label
              for="name"
              class="text-md md:text-sm leading-relaxed text-gray-400 md:text-base text-black font-bold"
              >Ime i prezime</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white border-b border-gray-600 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4 form-field required">
            <label
              for="email"
              class="text-md md:text-sm leading-relaxed text-gray-400 md:text-base text-black font-bold"
              >E-mail</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white border-b border-gray-600 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-8 form-field required">
            <label
              for="message"
              class="text-md md:text-sm leading-relaxed text-gray-400 md:text-base text-black font-bold"
              >Poruka</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full bg-white border-b border-gray-600 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            disabled
            type="submit"
            class="text-white font-bold bg-blue-400 border-0 py-2 px-6 mb-10 md:mb-0 rounded text-lg uppercase hover:bg-blue-700 w-full button--submit transition duration-700 ease-in-out"
          >
            Pošalji
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
