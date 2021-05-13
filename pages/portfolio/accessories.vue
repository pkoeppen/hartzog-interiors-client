<template>
  <div>
    <nav-header light />
    <portfolio-page
      :text="text"
      :images="images"
      banner="'//data.hartzoginteriors.com/accessories-full.jpg'"
      class="-mt-16"
      previous="/portfolio/lighting"
      next="/portfolio/exteriors"
    />
  </div>
</template>

<script>
export default {
  layout: 'portfolio',
  head: {
    title: 'Hartzog Interiors | Furniture & Accessories',
  },
  computed: {
    text() {
      return {
        title: 'Furniture & Accessories',
        introduction: `
        The things in a home are reflections of its owner. They are parts of a whole, and they work in harmony to paint a greater work of art; they are components of the overall design, and their orchestration is key to bringing a space together. From furniture and finishes to drapery and decor, we'll guide you to visual perfection.
        `,
        type: 'Accessories',
        designer: 'Katie Hartzog',
        location: 'Fort Wayne, Indiana',
        description1: `The final step in finishing a room is supplying it with the items—artwork, pillows, throws, candles, vases, glassware, and furnishings, to name a few—that mirror your taste and add punch to the space. Furniture and accessories exude your personality.`,
        description2: `Nothing says "good taste" like skillful accessorizing. It's the difference between a bare, cavernous chamber and a living, expressive room. With us, you can rest assured of a makeover that'll turn heads—we're experts in taking spaces from flat to fabulous.`,
      };
    },
    images() {
      return [
        '//data.hartzoginteriors.com/accessories-11-full.jpg',
        '//data.hartzoginteriors.com/accessories-23-full.jpg',
        '//data.hartzoginteriors.com/Hazelett-21.jpg',
        '//data.hartzoginteriors.com/accessories-4-full.jpg',
        '//data.hartzoginteriors.com/accessories-21-full.jpg',
        '//data.hartzoginteriors.com/accessories-22-full.jpg',
        '//data.hartzoginteriors.com/accessories-17-full.jpg',
        '//data.hartzoginteriors.com/accessories-20-full.jpg',
        '//data.hartzoginteriors.com/accessories-16-full.jpg',
        '//data.hartzoginteriors.com/accessories-19-full.jpg',
      ];
    },
  },
};
</script>
