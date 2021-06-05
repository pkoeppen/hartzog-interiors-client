<template>
  <div>
    <nav-header light />
    <portfolio-page
      :text="text"
      :images="images"
      banner="'//data.hartzoginteriors.com/exteriors-1-full.jpg'"
      class="-mt-16"
      previous="/portfolio/accessories"
      next="/portfolio/living"
    />
  </div>
</template>

<script>
export default {
  layout: 'portfolio',
  head: {
    title: 'Hartzog Interiors | Exteriors',
  },
  computed: {
    text() {
      return {
        title: 'Exteriors',
        introduction: `
        We may be an <em>interior</em> design firm, but we believe outward appearances are just as important as the aesthetic of the core. The exterior hints at the contents of the interior. If your home is like a book, it's our job to furnish the best possible cover. Go ahead, let them judge it; they'll be dying to have a look inside.
        `,
        type: 'Exteriors',
        designer: 'Katie Hartzog',
        location: 'Fort Wayne, Indiana',
        description1: `The exterior of any structure follows the same principles of design as the interior. The proper balance of shapes, textures, colors, lighting, and landscaping can transform an otherwise flawed domicile into an architectural beauty.`,
        description2: `We want you to be as emotionally engaged with the exterior of your home as you are with the interior. After all, exterior design is half the battle, and we vow to treat the façade of your residence with the same diligence and aesthetic appeal as the inner.`,
      };
    },
    images() {
      return [
        '//data.hartzoginteriors.com/exteriors-2-full.jpg',
        '//data.hartzoginteriors.com/Hazelett-6.jpg',
        '//data.hartzoginteriors.com/exteriors-9-full.jpg',
        '//data.hartzoginteriors.com/exteriors-6-full.jpg',
        '//data.hartzoginteriors.com/exteriors-7-full.jpg',
        '//data.hartzoginteriors.com/Hazelett-1-portrait.jpg',
        '//data.hartzoginteriors.com/exteriors-3-full.jpg',
      ];
    },
  },
};
</script>
