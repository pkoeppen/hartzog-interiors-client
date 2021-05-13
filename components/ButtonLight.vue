<template>
  <nuxt-link v-if="to" :to="to" :class="buttonClass">
    <slot></slot>
  </nuxt-link>
  <a v-else-if="external" :href="external" target="_blank" :class="buttonClass">
    <slot></slot>
  </a>
  <button v-else :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: '',
    },
    external: {
      type: String,
      required: false,
      default: '',
    },
    transparent: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      const classes = [
        'inline-flex',
        'items-center',
        'border-2',
        'border-white',
        'rounded-sm',
        'px-10',
        'py-2',
        'text-xs',
        'uppercase',
        'tracking-widest',
        'space-x-1',
        'hover:bg-white',
        'hover:text-black',
        'hover:border-white',
        'focus:bg-white',
        'focus:text-black',
        'focus:border-white',
        'transition-colors',
      ];
      if (this.transparent) {
        classes.push('text-white');
      } else {
        classes.push('bg-gray-300', 'border-gray-300', 'text-black');
      }
      return classes.join(' ');
    },
  },
};
</script>
