<template>
  <main>
    <page-header
      header="About Us"
      subheader="Exceptional interior design in Fort Wayne, Indiana"
      to="/about"
    />
    <section
      class="flex flex-wrap md:flex-nowrap container max-w-6xl pt-16 md:pt-32"
    >
      <div class="w-full md:w-1/4 md:mr-10 mb-14 md:mb-0 flex-shrink-0">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/portrait.jpg"
          alt="Katie Hartzog"
        />
        <div
          class="font-display uppercase tracking-header-sm text-gray-600 text-center mb-2"
        >
          Katie Hartzog
        </div>
        <div
          class="font-display uppercase tracking-header-sm text-gray-400 text-xs text-center"
        >
          Interior Designer
        </div>
      </div>
      <div class="flex-grow space-y-8 px-3 md:px-0">
        <div
          class="font-display uppercase text-gray-600 text-xl tracking-widest"
        >
          Who is Hartzog Interiors?
        </div>
        <p
          v-for="(paragraph, n) of paragraphs"
          :key="n"
          class="leading-loose text-gray-600 font-light text-sm"
          v-html="paragraph"
        />
      </div>
    </section>

    <section
      class="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-10 container max-w-6xl border-t pt-12 my-20 px-3 md:px-0"
    >
      <div>
        <div
          class="text-lg font-display uppercase tracking-widest text-gray-600 mb-5"
        >
          Work Process
        </div>
        <p
          class="leading-loose text-gray-600 font-light text-sm"
          v-html="workProcess"
        />
      </div>
      <!-- Consultation -->
      <div class="flex flex-col items-center justify-center space-y-6">
        <i class="icon-chat text-5xl" />
        <div class="uppercase font-display tracking-header-sm">
          1. Consultation
        </div>
      </div>
      <!-- Design -->
      <div class="flex flex-col items-center justify-center space-y-6">
        <i class="icon-browser text-5xl" />
        <div class="uppercase font-display tracking-header-sm">2. Design</div>
      </div>
      <!-- Installation -->
      <div class="flex flex-col items-center justify-center space-y-6">
        <i class="icon-heart text-5xl" />
        <div class="uppercase font-display tracking-header-sm">
          3. Installation
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section-testimonials />

    <!-- Why Choose Us? -->
    <section-why-choose-us />

    <!-- Let's Talk -->
    <section-lets-talk />
  </main>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      paragraphs: [
        `Hartzog Interiors, LLC was established in 2009. Owner and designer Katie Hartzog founded the company after obtaining a degree in interior design and working under a custom design studio for several years. Her extensive experience and rich knowledge of all aspects of interior design quickly grew Hartzog Interiors into a regional leader in the industry.`,
        `In 2014, the firm expanded as Katie’s husband, Mark Hartzog, sold his business to join forces in managing the burgeoning workload. This new partnership, greatly augmenting the company's creative capacity, enabled the duo to offer unprecedented quality in full-service home design like none in the region. Business was booming.`,
        `Today, Hartzog Interiors retains its status as head of the pack by bringing clients the <em>absolute best</em> in custom design for their interiors. Every facet of building new, custom homes, remodeling existing homes, and providing furnishings, window treatments, and the smallest finishing details comes as a standard feature in the Hartzog Interiors palette of expertise.`,
        `Hartzog Interiors is also actively involved in the local community and is a proud donor to local charities. As a token of gratitude, Hartzog Interiors contributes to the historical <a href="http://fwembassytheatre.org" target="_blank" class="underline text-gray-800 hover:text-gray-600 focus:text-gray-600">Embassy Theatre</a>, <a href="https://habitatgfw.com" target="_blank" class="underline text-gray-800 hover:text-gray-600 focus:text-gray-600">Habitat For Humanity</a>, and <a href="https://mustardseedfortwayne.com" target="_blank" class="underline text-gray-800 hover:text-gray-600 focus:text-gray-600">Mustard Seed Furniture Bank</a>. Giving back to both her clients and community is a remarkable source of inspiration for Katie and her company.`,
      ],
      workProcess: `At Hartzog Interiors, we keep the design process as painless as possible, allowing the client to sit back and relax while still retaining the final say. Simple!`,
    };
  },
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>
