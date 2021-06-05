<template>
  <main>
    <section class="relative darken">
      <div class="absolute inset-0 z-10 opacity-30 bg-black" />
      <div
        class="flex flex-col items-center bg-fixed bg-center bg-cover py-56 space-y-12 text-center"
        :style="`background-image: url(${banner});`"
      >
        <div
          class="text-white uppercase font-display text-sm sm:text-base tracking-header-sm z-20"
        >
          Hartzog Design Spotlight
        </div>
        <div
          class="text-white uppercase font-display text-2xl sm:text-3xl md:text-5xl max-w-4xl leading-snug text-center tracking-header-md sm:tracking-header-lg z-20"
        >
          {{ text.title }}
        </div>
      </div>
    </section>

    <section class="py-32 container max-w-3xl px-3 md:px-0">
      <p
        class="font-light leading-loose text-center text-gray-700"
        v-html="text.introduction"
      />
    </section>

    <section class="container max-w-6xl">
      <!-- Featured Image -->
      <div class="mb-8">
        <img
          :src="images[0]"
          class="w-full cursor-pointer hover:opacity-90 transition-opacity"
          @click="
            showModal({ modal: 'lightbox', data: { images, selected: 0 } })
          "
        />
      </div>

      <!-- Gallery -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          v-for="(src, index) of images.slice(1)"
          :key="index"
          :src="src"
          class="w-full cursor-pointer hover:opacity-90 transition-opacity"
          @click="
            showModal({
              modal: 'lightbox',
              data: { images, selected: index + 1 },
            })
          "
        />
      </div>
    </section>

    <section class="container max-w-6xl pt-12 pb-32 px-3 xl:px-0">
      <!-- Description -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-gray-700 uppercase">
          <div class="font-display font-light text-sm tracking-widest mb-4">
            Design Spotlight
          </div>
          <div class="flex items-center border-t py-2">
            <div class="w-24 font-bold text-xs">Type:</div>
            <div class="text-xs">{{ text.type }}</div>
          </div>
          <div class="flex items-center border-t py-2">
            <div class="w-24 font-bold text-xs">Designer:</div>
            <div class="text-xs">{{ text.designer }}</div>
          </div>
          <div class="flex items-center border-t border-b py-2">
            <div class="w-24 font-bold text-xs">Location:</div>
            <div class="text-xs">{{ text.location }}</div>
          </div>
        </div>
        <p
          class="font-light leading-loose text-sm text-gray-700"
          v-html="text.description1"
        />
        <p
          class="font-light leading-loose text-sm text-gray-700"
          v-html="text.description2"
        />
      </div>
    </section>

    <nav class="w-full flex items-center border-t uppercase text-xs">
      <div class="w-1/3 inline-flex items-center justify-start">
        <nuxt-link
          :to="previous"
          class="px-5 py-5 tracking-widest transition-all text-gray-700 hover:text-black focus:text-black hover:bg-gray-100 focus:bg-gray-100"
          ><i class="fas fa-chevron-left mr-1" /> Previous</nuxt-link
        >
      </div>
      <div class="w-1/3 inline-flex items-center justify-center">
        <nuxt-link
          to="/portfolio"
          class="px-5 py-5 tracking-widest transition-all text-gray-700 hover:text-black focus:text-black hover:bg-gray-100 focus:bg-gray-100"
          ><i class="fas fa-asterisk mr-1" /> All Designs</nuxt-link
        >
      </div>
      <div class="w-1/3 inline-flex items-center justify-end">
        <nuxt-link
          :to="next"
          class="px-5 py-5 tracking-widest transition-all text-gray-700 hover:text-black focus:text-black hover:bg-gray-100 focus:bg-gray-100"
          >Next <i class="fas fa-chevron-right ml-1" />
        </nuxt-link>
      </div>
    </nav>

    <section-lets-talk />
  </main>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    text: {
      type: Object,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    previous: {
      type: String,
      required: true,
    },
    next: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>
