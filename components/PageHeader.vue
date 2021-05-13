<template>
  <section class="py-20 bg-dark-pattern px-3 xl:px-0">
    <div class="flex flex-col md:flex-row justify-between max-w-6xl container">
      <div class="space-y-3 md:space-y-5 mb-8 md:mb-0">
        <div
          class="uppercase font-display text-white text-2xl md:text-3xl tracking-header-md"
        >
          {{ header }}
        </div>
        <div
          class="uppercase font-display text-sm md:text-base text-gray-300 tracking-widest"
        >
          {{ subheader }}
        </div>
      </div>
      <div
        class="uppercase font-display text-white text-xs tracking-header-sm space-x-2"
      >
        <nuxt-link to="/" class="text-gray-500 hover:text-white">Home</nuxt-link
        ><span>/</span><nuxt-link :to="to">{{ to.slice(1) }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    subheader: {
      type: String,
      required: true,
    },
  },
};
</script>
