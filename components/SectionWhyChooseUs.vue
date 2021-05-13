<template>
  <section
    class="flex flex-col items-center py-32 px-3 xl:px-0 mx-auto max-w-6xl"
  >
    <div class="font-display uppercase tracking-header-md text-lg mb-24">
      <span>Why Choose Us?</span>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-20 text-center sm:text-left"
    >
      <div class="flex flex-col items-center space-y-5">
        <i
          class="icon-trophy text-5xl text-black group-hover:text-black transition-colors"
        />
        <div
          class="uppercase font-display tracking-header-sm text-black group-hover:text-black transition-colors"
        >
          We're Experienced
        </div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          Hartzog Interiors commands over twelve years of experience, our proven
          guarantee to deliver the best possible results. Trust us&mdash;we know
          what we're doing.
        </p>
      </div>

      <div class="flex flex-col items-center space-y-5">
        <i
          class="icon-clock text-5xl text-black group-hover:text-black transition-colors"
        />
        <div
          class="uppercase font-display tracking-header-sm text-black group-hover:text-black transition-colors"
        >
          We're Punctual
        </div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          When you sign a contract with us, we are bound to deliver on time and
          within budget. We create the best possible designs without sacrificing
          time or quality.
        </p>
      </div>

      <div class="flex flex-col items-center space-y-5">
        <i
          class="icon-lightbulb text-5xl text-black group-hover:text-black transition-colors"
        />
        <div
          class="uppercase font-display tracking-header-sm text-black group-hover:text-black transition-colors"
        >
          We're Creative
        </div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          We produce more creative horsepower than your average design shop, and
          it shows. Just check out
          <nuxt-link to="/portfolio" class="text-black underline"
            >our portfolio</nuxt-link
          >&mdash;our creative muscle speaks for itself.
        </p>
      </div>

      <div class="flex flex-col items-center space-y-5">
        <i
          class="icon-chat text-5xl text-black group-hover:text-black transition-colors"
        />
        <div
          class="uppercase font-display tracking-header-sm text-black group-hover:text-black transition-colors"
        >
          We're Friendly
        </div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          Our doors are always open to new clients, and we're always happy to
          discuss your ideas. Customer service is as integral to our business
          model as interior design itself.
        </p>
      </div>

      <div class="flex flex-col items-center space-y-5">
        <i
          class="icon-map-pin text-5xl text-black group-hover:text-black transition-colors"
        />
        <div
          class="uppercase font-display tracking-header-sm text-black group-hover:text-black transition-colors"
        >
          We're Local
        </div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          Fort Wayne has been our stomping ground from the very beginning. We're
          proud to serve our local community and contribute to its burgeoning
          entrepreneurial scene.
        </p>
      </div>

      <div class="flex flex-col items-center space-y-5">
        <i
          class="icon-heart text-5xl text-black group-hover:text-black transition-colors"
        />
        <div
          class="uppercase font-display tracking-header-sm text-black group-hover:text-black transition-colors"
        >
          We're Responsible
        </div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          Our clients place a great deal of trust in us to design their homes as
          effectively as possible. We know this, and we act accordingly. Your
          project is always in good hands.
        </p>
      </div>
    </div>
  </section>
</template>
