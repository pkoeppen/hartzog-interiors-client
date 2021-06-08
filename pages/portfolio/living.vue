<template>
  <div>
    <nav-header light />
    <portfolio-page
      :text="text"
      :images="images"
      banner="//data.hartzoginteriors.com/living-15-full.jpg"
      class="-mt-16"
      previous="/portfolio/exteriors"
      next="/portfolio/kitchens"
    />
  </div>
</template>

<script>
export default {
  layout: 'portfolio',
  head: {
    title: 'Hartzog Interiors | Living Areas',
  },
  computed: {
    text() {
      return {
        title: 'Living Areas',
        introduction: `Living rooms and bedrooms are the lifeblood of any home. They're spaces
        for gathering and relaxation, and a comforting aesthetic is crucial to
        their success. With the right blend of color, shape, and placement, we
        can morph any combination into the perfect living area: We can make a
        room say <em>welcome home.</em>`,
        type: 'Living Areas',
        designer: 'Katie Hartzog',
        location: 'Fort Wayne, Indiana',
        description1: `Whether you call it a lounge, living room, or even parlor, it's the
          center of gravity for any residence, and it should draw its energy
          accordingly. The living room is the heart of the house, a space where
          it's equally appealing to hold a conversation or simply relax.`,
        description2: `Likewise, a bedroom ought to comfortably reflect the character of its
          owner, being the primary microcosm of any person's world; a bedroom is
          fertile ground for self-expression and solitude, as well as the best
          place in the house, of course, to catch some sleep.`,
      };
    },
    images() {
      return [
        '//data.hartzoginteriors.com/living-1-full.jpg',
        '//data.hartzoginteriors.com/living-14-full.jpg',
        '//data.hartzoginteriors.com/Forest Park-18.jpg',
        '//data.hartzoginteriors.com/Lily Revised (27 of 34).jpg',
        '//data.hartzoginteriors.com/Hazelett-32.jpg',
        '//data.hartzoginteriors.com/Forest Park-32.jpg',
        '//data.hartzoginteriors.com/Hazelett-50.jpg',
        '//data.hartzoginteriors.com/Hazelett-43.jpg',
        '//data.hartzoginteriors.com/living-18-full.jpg',
        '//data.hartzoginteriors.com/Hazelett-17.jpg',
      ];
    },
  },
};
</script>
