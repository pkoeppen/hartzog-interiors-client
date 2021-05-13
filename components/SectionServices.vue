<template>
  <section
    class="flex flex-col items-center py-32 px-3 xl:px-0 mx-auto max-w-6xl"
  >
    <div class="font-display uppercase tracking-header-md text-lg mb-10">
      <span>Services</span>
    </div>

    <!-- Tabs -->
    <div class="flex flex-wrap mb-4 justify-center w-full">
      <!-- Consultation -->
      <div class="w-44 lg:w-56">
        <div class="aspect-ratio-square relative">
          <div
            class="absolute h-full w-full flex flex-col justify-center items-center space-y-5 group cursor-pointer"
            :class="{ 'text-black': tab === 0, 'text-gray-600': tab !== 0 }"
            @click="tab = 0"
          >
            <i
              class="icon-strategy text-5xl group-hover:text-black transition-colors"
            />
            <div
              class="uppercase text-sm lg:text-base font-display tracking-header-sm group-hover:text-black transition-colors"
            >
              Consultation
            </div>
          </div>
        </div>
      </div>

      <!-- Planning -->
      <div class="w-44 lg:w-56">
        <div class="aspect-ratio-square relative">
          <div
            class="absolute h-full w-full flex flex-col justify-center items-center space-y-5 group cursor-pointer"
            :class="{ 'text-black': tab === 1, 'text-gray-600': tab !== 1 }"
            @click="tab = 1"
          >
            <i
              class="icon-desktop text-5xl group-hover:text-black transition-colors"
            />
            <div
              class="uppercase text-sm lg:text-base font-display tracking-header-sm group-hover:text-black transition-colors"
            >
              Planning
            </div>
          </div>
        </div>
      </div>

      <!-- Procurement -->
      <div class="w-44 lg:w-56">
        <div class="aspect-ratio-square relative">
          <div
            class="absolute h-full w-full flex flex-col justify-center items-center space-y-5 group cursor-pointer"
            :class="{ 'text-black': tab === 2, 'text-gray-600': tab !== 2 }"
            @click="tab = 2"
          >
            <i
              class="icon-tools text-5xl group-hover:text-black transition-colors"
            />
            <div
              class="uppercase text-sm lg:text-base font-display tracking-header-sm group-hover:text-black transition-colors"
            >
              Procurement
            </div>
          </div>
        </div>
      </div>

      <!-- Installation -->
      <div class="w-44 lg:w-56">
        <div class="aspect-ratio-square relative">
          <div
            class="absolute h-full w-full flex flex-col justify-center items-center space-y-5 group cursor-pointer"
            :class="{ 'text-black': tab === 3, 'text-gray-600': tab !== 3 }"
            @click="tab = 3"
          >
            <i
              class="icon-gears text-5xl group-hover:text-black transition-colors"
            />
            <div
              class="uppercase text-sm lg:text-base font-display tracking-header-sm group-hover:text-black transition-colors"
            >
              Installation
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Content -->
    <div v-show="tab === 0" class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="space-y-6">
        <p class="text-xl md:text-2xl leading-relaxed text-gray-600 font-light">
          The essence of interior design will always be about people and how
          they live. It's not an easy job.
        </p>
        <div class="uppercase text-xs text-gray-600 tracking-widest">
          &mdash; Albert Hadley
        </div>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          The design process always begins with exploring your own preferences,
          likes, and dislikes. Knowing your taste hones our understanding of
          your vision and helps us narrow our search so you have fewer choices
          to make. It helps us learn how to help you.
        </p>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          As interior design requires a great deal of trust, the initial
          consultation serves to determine whether the relationship feels right
          to you. It establishes your specific design goals, a tentative
          remodeling timeline, as well as the estimated cost of the project.
        </p>
      </div>
    </div>

    <div v-show="tab === 1" class="grid grid-cols-3 gap-10">
      <div class="space-y-6">
        <p class="text-2xl leading-relaxed text-gray-600 font-light">
          When you’re building a room, you’re building character: The strength
          and wisdom of a home.
        </p>
        <div class="uppercase text-xs text-gray-600 tracking-widest">
          &mdash; Rose Tarlow
        </div>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          The planning phase lays the groundwork for the timely execution of
          your design vision. You will be presented an itemized list of each
          service you requested; upon approval, a contract reflecting your
          express priorities is signed, and the process begins.
        </p>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          We do everything in our power to uphold our end of the deal and stay
          within the proposed deadlines. However, sometimes a client grows
          passionate about the design process and wishes to extend or add
          services. Of course, we're always happy to oblige.
        </p>
      </div>
    </div>

    <div v-show="tab === 2" class="grid grid-cols-3 gap-10">
      <div class="space-y-6">
        <p class="text-2xl leading-relaxed text-gray-600 font-light">
          When it comes to art, buy with your eyes, not your ears. Art should
          reflect the personality.
        </p>
        <div class="uppercase text-xs text-gray-600 tracking-widest">
          &mdash; Hotelier Jason Pomeranc
        </div>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          Next comes the exciting part: Purchasing and shipping your requested
          list of materials and furnishings. We can adapt to your preference to
          choose everything personally, or you can take our recommendation to
          best accommodate your needs.
        </p>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          We work closely with manufacturing and distributing contacts to find
          the best solutions for your project, selecting only items that meet
          your budget, timeline, and functional requirements. All you have to do
          is pick and approve. We'll take it from there.
        </p>
      </div>
    </div>

    <div v-show="tab === 3" class="grid grid-cols-3 gap-10">
      <div class="space-y-6">
        <p class="text-2xl leading-relaxed text-gray-600 font-light">
          Creativity is allowing yourself to make mistakes. Design is knowing
          which ones to keep.
        </p>
        <div class="uppercase text-xs text-gray-600 tracking-widest">
          &mdash; Scott Adams
        </div>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          Finally, when your purchases have arrived, we'll get busy implementing
          them into your new interior. We will be on-site during installation to
          confirm all furnishings are received in good condition, installed
          correctly, and correspond to your design documents.
        </p>
      </div>
      <div>
        <p class="text-sm leading-loose text-gray-600 font-light">
          This is where your vision is brought to life. Before we conclude our
          contract, we will discuss the care and maintenance of your new home
          and do a final walk-through to ensure all expectations have been met.
          Your dream has been made—and you get to live in it.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>
