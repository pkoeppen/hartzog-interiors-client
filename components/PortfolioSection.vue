<template>
  <section class="relative" :class="{ lighten, darken }">
    <div
      class="flex flex-col items-center bg-fixed bg-center bg-cover py-56 space-y-12 text-center"
      :style="`background-image: url(${src})`"
    >
      <div
        class="uppercase font-display text-2xl sm:text-3xl md:text-5xl tracking-header-md sm:tracking-header-lg z-20"
        :class="{ 'text-black': lighten, 'text-white': darken }"
      >
        {{ title }}
      </div>
      <button-dark v-if="lighten" :to="to" class="z-20" transparent>
        <span>View Designs</span>
      </button-dark>
      <button-light v-else-if="darken" :to="to" class="z-20" transparent>
        <span>View Designs</span>
      </button-light>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    lighten: {
      type: Boolean,
      required: false,
      default: false,
    },
    darken: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
