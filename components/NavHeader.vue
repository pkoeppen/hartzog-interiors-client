<template>
  <div class="relative">
    <nav
      class="w-full flex items-center px-7 h-16 z-30 relative overflow-x-hidden"
      :class="{ 'border-b': border }"
    >
      <!-- Logo -->
      <div class="flex-grow">
        <nuxt-link to="/">
          <img
            :src="`/logo-${light ? 'light' : 'dark'}.png`"
            alt="Hartzog Interiors"
            class="h-10"
          />
        </nuxt-link>
      </div>

      <!-- Mobile Nav -->
      <div
        class="inline-flex md:hidden cursor-pointer"
        :class="
          light
            ? 'text-gray-300 hover:text-white'
            : 'text-gray-600 hover:text-black'
        "
        @click="showMobileNav = !showMobileNav"
      >
        <i class="fas fa-bars" />
      </div>

      <!-- Desktop Nav -->
      <div
        class="hidden md:inline-flex space-x-7 tracking-widest"
        style="font-size: 11px"
      >
        <nuxt-link
          :class="
            light
              ? 'text-gray-300 hover:text-white focus:text-white'
              : 'text-gray-600 hover:text-black focus:text-black'
          "
          class="transition-colors uppercase"
          to="/about"
          >About</nuxt-link
        >
        <nuxt-link
          :class="
            light
              ? 'text-gray-300 hover:text-white focus:text-white'
              : 'text-gray-600 hover:text-black focus:text-black'
          "
          class="transition-colors uppercase"
          to="/portfolio"
          >Portfolio</nuxt-link
        >
        <nuxt-link
          :class="
            light
              ? 'text-gray-300 hover:text-white focus:text-white'
              : 'text-gray-600 hover:text-black focus:text-black'
          "
          class="transition-colors uppercase"
          to="/contact"
          >Contact</nuxt-link
        >
        <a
          :class="
            light
              ? 'text-gray-300 hover:text-white focus:text-white'
              : 'text-gray-600 hover:text-black focus:text-black'
          "
          class="transition-colors uppercase"
          href="https://hartzoginteriors.square.site"
          target="_blank"
          ><i class="fas fa-store"></i> Studio K</a
        >
        <a
          :class="
            light
              ? 'text-gray-300 hover:text-white focus:text-white'
              : 'text-gray-600 hover:text-black focus:text-black'
          "
          class="transition-colors uppercase"
          href="tel:+12604506460"
          ><i class="fas fa-phone"></i> 260 450 6460</a
        >
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      class="absolute z-50 w-full top-16 left-0 bg-gray-900 flex flex-col divide-y divide-gray-600 text-xs"
      :class="showMobileNav ? 'block' : 'hidden'"
    >
      <nuxt-link
        class="text-gray-400 hover:text-white focus:text-white transition-colors uppercase px-3 py-2"
        to="/about"
        >About</nuxt-link
      >
      <nuxt-link
        class="text-gray-400 hover:text-white focus:text-white transition-colors uppercase px-3 py-2"
        to="/portfolio"
        >Portfolio</nuxt-link
      >
      <nuxt-link
        class="text-gray-400 hover:text-white focus:text-white transition-colors uppercase px-3 py-2"
        to="/contact"
        >Contact</nuxt-link
      >
      <a
        class="text-gray-400 hover:text-white focus:text-white transition-colors uppercase px-3 py-2"
        href="https://hartzoginteriors.square.site"
        target="_blank"
        ><i class="fas fa-store mr-1"></i> Studio K</a
      >
      <a
        class="text-gray-400 hover:text-white focus:text-white transition-colors uppercase px-3 py-2"
        href="tel:+12604506460"
        ><i class="fas fa-phone mr-1"></i> 260 450 6460</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      required: false,
      default: false,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      showMobileNav: false,
    };
  },
};
</script>
