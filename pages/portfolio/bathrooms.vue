<template>
  <div>
    <nav-header light />
    <portfolio-page
      :text="text"
      :images="images"
      banner="'//data.hartzoginteriors.com/bathrooms-17-full.jpg'"
      class="-mt-16"
      previous="/portfolio/kitchens"
      next="/portfolio/lighting"
    />
  </div>
</template>

<script>
export default {
  layout: 'portfolio',
  head: {
    title: 'Hartzog Interiors | Bathrooms',
  },
  computed: {
    text() {
      return {
        title: 'Bathrooms',
        introduction: `
Comfortable and elegant—that's what a bathroom should be. Time spent in a well-designed bathroom is simultaneously relaxing, invigorating, and luxurious, a small homage to the little temple of cleanliness. Here, repose is refreshing; we write the expectation of <em>clean</em> into every seam of our bathroom aesthetic.
`,
        type: 'Bathrooms',
        designer: 'Katie Hartzog',
        location: 'Fort Wayne, Indiana',
        description1: `Bathrooms are absolute gems of design potential. They can be patches of unexpected color and vibrancy, tucked away behind a stairwell or an inconspicuous en suite door. Such hiddenness can strengthen a bathroom's innate feeling of privacy.`,
        description2: `Our approach to bathroom design brings you the perfect mix of comfort and functionality. Whether you're prone to quick showers or long, indulgent dips in the tub, we can sculpt your bathroom to the tune of your personality and hygienic routine. Heavenly.`,
      };
    },
    images() {
      return [
        '//data.hartzoginteriors.com/bathrooms-2-full.jpg',
        '//data.hartzoginteriors.com/Lily Revised (22 of 34).jpg',
        '//data.hartzoginteriors.com/bathrooms-18-full.jpg',
        '//data.hartzoginteriors.com/bathrooms-16-full.jpg',
        '//data.hartzoginteriors.com/bathrooms-19-full.jpg',
        '//data.hartzoginteriors.com/bathrooms-20-full.jpg',
        '//data.hartzoginteriors.com/Lily Revised (24 of 34).jpg',
        '//data.hartzoginteriors.com/bathrooms-15-full.jpg',
        '//data.hartzoginteriors.com/Hazelett-54.jpg',
        '//data.hartzoginteriors.com/bathrooms-14-full.jpg',
      ];
    },
  },
};
</script>
