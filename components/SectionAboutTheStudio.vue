<template>
  <section class="py-32 px-3 xl:px-0 container max-w-6xl">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
    >
      <div
        class="font-display uppercase tracking-header-md text-lg pb-3 md:pb-0"
      >
        <span>About the Studio</span>
      </div>
      <nuxt-link
        to="/about"
        class="text-gray-600 hover:text-black focus:text-black font-display tracking-header-sm text-xs"
      >
        <span class="mr-1 uppercase">More About Us</span>
        <i class="fas fa-angle-right" />
      </nuxt-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="space-y-14 py-3">
        <!-- Service -->
        <div class="relative w-full bg-gray-200" style="height: 2px">
          <div class="absolute left-0 h-full bg-gray-900" style="width: 95%">
            <div class="absolute w-full top-2 uppercase text-xs">
              <div class="flex justify-between items-center">
                <span>Service, %</span><span>95</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Design -->
        <div class="relative w-full bg-gray-200" style="height: 2px">
          <div class="absolute left-0 h-full bg-gray-900" style="width: 90%">
            <div class="absolute w-full top-2 uppercase text-xs">
              <div class="flex justify-between items-center">
                <span>Design, %</span><span>90</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Innovation -->
        <div class="relative w-full bg-gray-200" style="height: 2px">
          <div class="absolute left-0 h-full bg-gray-900" style="width: 85%">
            <div class="absolute w-full top-2 uppercase text-xs">
              <div class="flex justify-between items-center">
                <span>Innovation, %</span><span>85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-sm leading-loose text-gray-600 font-light">
        Hartzog Interiors prides itself on its unrivaled approach to design,
        service, and innovation in interior planning. Serving northeast Indiana
        for nearly ten years, the studio is now a trusted name in interior
        design for Fort Wayne and the surrounding area.
      </p>
      <p class="text-sm leading-loose text-gray-600 font-light">
        Hartzog Interiors was founded in 2009 by local interior designer Katie
        Hartzog. A graduate of IPFW, Katie built and expanded the studio on the
        principles of modern design, growing the business into the region's
        premiere full-service interior powerhouse.
      </p>
    </div>
  </section>
</template>
