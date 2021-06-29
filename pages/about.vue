<template>
  <main>
    <page-header
      header="About Us"
      subheader="Exceptional interior design in Fort Wayne, Indiana"
      to="/about"
    />
    <section
      class="flex flex-wrap md:flex-nowrap container max-w-6xl pt-16 md:pt-32 px-0 md:px-3"
    >
      <div class="w-full md:w-1/4 md:mr-10 mb-14 md:mb-0 flex-shrink-0">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/katie-hartzog.jpg"
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
      class="flex flex-col container max-w-6xl px-3 md:px-0 border-t border-b pt-12 mt-12 pb-12 mb-12"
    >
      <img
        class="object-contain w-full"
        src="//data.hartzoginteriors.com/team.jpg"
        alt="Hartzog Interiors Team"
      />
    </section>

    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-10 container max-w-6xl px-3 md:px-0 mb-32"
    >
      <div class="w-full">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/addie-morris.jpg"
          alt="Addie Morris"
        />
        <div
          class="font-display uppercase tracking-header-sm text-gray-600 text-center mb-2"
        >
          Addie Morris
        </div>
        <div
          class="font-display uppercase tracking-header-sm text-gray-400 text-xs text-center"
        >
          Office Manager
        </div>
      </div>

      <div class="w-full">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/becky-johnson.jpg"
          alt="Becky Johnson"
        />
        <div
          class="font-display uppercase tracking-header-sm text-gray-600 text-center mb-2"
        >
          Becky Johnson
        </div>
        <div
          class="font-display uppercase tracking-header-sm text-gray-400 text-xs text-center"
        >
          Showroom Manager
        </div>
      </div>

      <div class="w-full">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/noelle-quinones.jpg"
          alt="Noelle Quinones"
        />
        <div
          class="font-display uppercase tracking-header-sm text-gray-600 text-center mb-2"
        >
          Noelle Quinones
        </div>
        <div
          class="font-display uppercase tracking-header-sm text-gray-400 text-xs text-center"
        >
          Design Intern
        </div>
      </div>

      <div class="w-full">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/janelle-cooks.jpg"
          alt="Janelle Cooks"
        />
        <div
          class="font-display uppercase tracking-header-sm text-gray-600 text-center mb-2"
        >
          Janelle Cooks
        </div>
        <div
          class="font-display uppercase tracking-header-sm text-gray-400 text-xs text-center"
        >
          Design Assistant, Project Coordinator
        </div>
      </div>

      <div class="w-full">
        <img
          class="object-contain w-full max-w-md mb-5 mx-auto"
          src="//data.hartzoginteriors.com/jen-lasley.jpg"
          alt="Jen Lasley"
        />
        <div
          class="font-display uppercase tracking-header-sm text-gray-600 text-center mb-2"
        >
          Jen Lasley
        </div>
        <div
          class="font-display uppercase tracking-header-sm text-gray-400 text-xs text-center"
        >
          Designer, Project Manager
        </div>
      </div>
    </section>

    <!-- Work Process -->
    <!-- <section-work-process /> -->

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
        `Katie Hartzog, owner of Hartzog Interiors and Studio K, graduated from IPFW with a degree in Interior Design. After interning through college she was hired buy a local custom home builder and design studio where she worked for years before branching out to open her own business, Hartzog Interiors, in 2009. Katie prides herself and her business on staying ahead of all design styles and trends creating one of a kind custom interiors and spaces for her clients. Katie has an extensive background in not only design but also contracting, offering clients full service design for all projects no matter how large or small the scope of work. Hartzog Interiors offers clients services from home additions and remodeling to custom furnishings and window treatments, and much, much more...`,
        `Katie decided to further grow her business in 2019 opening Studio K, a retail showroom for unique home goods. She wanted to offer the public a resource to access beautiful, one of a kind pieces she loves to use on her design projects. Katie strives to stock her studio storefront with all the unique statement pieces you will not find anywhere else in the area.`,
        `Katie is also active in her community volunteering her talents to the historical <a href="http://fwembassytheatre.org" target="_blank" class="underline text-gray-800 hover:text-gray-600 focus:text-gray-600">Embassy Theatre</a>, as well as always donating to the local Habitat For Humanity.`,
      ],
    };
  },
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>
