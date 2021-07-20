<template>
  <main>
    <section class="flex flex-col items-center py-32">
      <div class="subheader text-sm sm:text-base tracking-header-sm">
        Remodeling / Renovation / Transformation
      </div>
      <div class="my-10"><img src="/logo-glyph-only.png" class="w-32" /></div>
      <div
        class="mb-16 header text-2xl sm:text-5xl tracking-header-md sm:tracking-header-lg"
      >
        Hartzog Interiors
      </div>
      <div class="space-x-2">
        <button-dark
          transparent
          @click.native="
            showModal({
              modal: 'player',
              data: {
                videos: [
                  '//data.hartzoginteriors.com/Hartzog-Facebook.mp4',
                  '//data.hartzoginteriors.com/Hartzog Interiors - Hazelett Road.mp4',
                ],
              },
            })
          "
        >
          <span>Watch Videos</span>
        </button-dark>
        <button-dark
          external="https://hartzoginteriors.square.site"
          transparent
        >
          <span class="mr-1">Studio K</span
          ><i
            class="fas fa-external-link-alt"
            style="font-size: 9px; padding-bottom: 1px"
          />
        </button-dark>
      </div>
    </section>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
      <photo-grid-tile
        title="Living Areas"
        to="/portfolio/living"
        src="//data.hartzoginteriors.com/Forest Park-8.jpg"
      />
      <photo-grid-tile
        title="Kitchen &amp; Dining"
        to="/portfolio/kitchens"
        src="//data.hartzoginteriors.com/kitchens.jpg"
      />
      <photo-grid-tile
        title="Bathrooms"
        to="/portfolio/bathrooms"
        src="//data.hartzoginteriors.com/bathrooms.jpg"
      />
      <photo-grid-tile
        title="Lighting"
        to="/portfolio/lighting"
        src="//data.hartzoginteriors.com/Lily Rd-99.jpg"
      />
      <photo-grid-tile
        title="Furniture &amp; Accessories"
        to="/portfolio/accessories"
        src="//data.hartzoginteriors.com/accessories.jpg"
      />
      <photo-grid-tile
        title="Exteriors"
        to="/portfolio/exteriors"
        src="//data.hartzoginteriors.com/Lily Revised (19 of 34).jpg"
      />
    </section>

    <!-- Like Our Work? -->
    <section-like-our-work />

    <!-- About the Studio -->
    <section-about-the-studio />

    <hr />

    <!-- Services -->
    <section-services />

    <!-- Show Your Support -->
    <section-show-your-support />

    <!-- Why Choose Us -->
    <section-why-choose-us />

    <!-- Testimonials -->
    <section-testimonials />

    <!-- Contact Us -->
    <section-contact-us />

    <!-- Let's Talk -->
    <section-lets-talk />
  </main>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>

<style scoped>
.header {
  @apply font-display uppercase leading-snug text-center;
}
.subheader {
  @apply font-display uppercase text-center;
}
</style>
