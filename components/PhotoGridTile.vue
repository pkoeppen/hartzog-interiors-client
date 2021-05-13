<template>
  <nuxt-link :to="to">
    <div
      class="relative bg-gray-300 aspect-ratio-3/2 cursor-pointer overflow-hidden group"
    >
      <div
        class="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 z-10 transition-all"
      />
      <div
        class="absolute inset-0 transform scale-100 group-hover:scale-102 transition-transform"
      >
        <img :src="src" class="object-cover w-full" />
      </div>
      <div
        class="transform translate-y-20 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 absolute w-full bottom-0 text-center text-black space-y-1 py-8 uppercase font-display tracking-widest z-20 transition-all"
      >
        <div class="text-sm">{{ title }}</div>
        <div class="text-xs">View Designs</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
