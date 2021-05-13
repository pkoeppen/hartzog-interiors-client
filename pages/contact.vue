<template>
  <main>
    <page-header
      header="Contact Us"
      subheader="Say hello! Give us a call (or write us a letter)"
      to="/contact"
    />

    <section class="py-32 container max-w-3xl px-3 xl:px-0">
      <p
        class="font-light leading-loose text-center text-gray-700 mb-20"
        v-html="paragraph"
      />
      <div class="grid grid-cols-1 pl-10 sm:pl-0 sm:grid-cols-3 gap-10">
        <!-- Phone -->
        <div class="flex items-center space-x-3">
          <div
            class="flex-shrink-0 w-6 h-6 bg-black transform rotate-45 rounded flex items-center justify-center"
          >
            <i class="text-xs fas fa-phone text-white transform -rotate-45" />
          </div>
          <div>
            <div
              class="uppercase text-gray-600 tracking-header-sm font-light text-xs font-display"
            >
              Call Us
            </div>
            <div class="font-light text-gray-800">+1 260 450 6460</div>
          </div>
        </div>

        <!-- Address -->
        <div class="flex items-center space-x-3">
          <div
            class="flex-shrink-0 w-6 h-6 bg-black transform rotate-45 rounded flex items-center justify-center"
          >
            <i
              class="text-xs fas fa-map-marker-alt text-white transform -rotate-45"
            />
          </div>
          <div>
            <div
              class="uppercase text-gray-600 tracking-header-sm font-light text-xs font-display"
            >
              Address
            </div>
            <div class="font-light text-gray-800">1720 Forest Park Blvd</div>
          </div>
        </div>

        <!-- Email -->
        <div class="flex items-center space-x-3">
          <div
            class="flex-shrink-0 w-6 h-6 bg-black transform rotate-45 rounded flex items-center justify-center"
          >
            <i
              class="text-xs fas fa-envelope text-white transform -rotate-45"
            />
          </div>
          <div>
            <div
              class="uppercase text-gray-600 tracking-header-sm font-light text-xs font-display"
            >
              Email
            </div>
            <a
              href="mailto:katie@hartzoginteriors.com"
              class="font-light text-gray-800"
              >katie@hartzoginteriors.com</a
            >
          </div>
        </div>
      </div>
    </section>

    <section>
      <iframe
        class="w-full h-96"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_zRjLG3lFYgRDzf67pY-sqg&key=AIzaSyCnE-4gw10r6VynA5T9f2E8aCFEFGQ5uQg"
      ></iframe>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      paragraph: `Go ahead and drop us a line, any time. If we're out of the office, we'll get back in touch as soon as we can. Leave us your contact information and any details pertaining to your project. Here's to your future interior!`,
    };
  },
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>
