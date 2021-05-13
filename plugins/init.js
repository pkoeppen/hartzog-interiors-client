import Vue from 'vue';
import Simplebar from 'simplebar-vue';

Vue.component('simplebar', Simplebar);

export default async function ({ store }) {
  if (process.browser) {
    await store.dispatch('nuxtClientInit');
  }
}
