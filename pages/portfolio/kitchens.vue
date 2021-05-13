<template>
  <div>
    <nav-header light />
    <portfolio-page
      :text="text"
      :images="images"
      banner="'//data.hartzoginteriors.com/kitchens-14-full.jpg'"
      class="-mt-16"
      previous="/portfolio/living"
      next="/portfolio/bathrooms"
    />
  </div>
</template>

<script>
export default {
  layout: 'portfolio',
  head: {
    title: 'Hartzog Interiors | Kitchens & Dining',
  },
  computed: {
    text() {
      return {
        title: 'Kitchens & Dining',
        introduction: `A good kitchen should not only stimulate our savory faculties—it should also accommodate its occupants through ease of use and functional design. We believe the best place to cook and eat should be simultaneously conducive to cooking and eating, as well as aesthetically attractive. These qualities are often one and the same.`,
        type: 'Kitchens',
        designer: 'Katie Hartzog',
        location: 'Fort Wayne, Indiana',
        description1: `There's a lot that goes into designing a kitchen. An L-shaped, U-shaped, or galley-style cookery may flow differently with different appliances, which ultimately determines the placement of cabinets and countertops. We ask: What's your kitchen routine?`,
        description2: `Bandwidth in kitchen and dining spaces is allocated according to the amount of traffic a particular station receives. We know exactly how to balance efficiency, practicality, and style to best optimize your daily cooking and dining rituals. Bon appétit!`,
      };
    },
    images() {
      return [
        '//data.hartzoginteriors.com/kitchens-full.jpg',
        '//data.hartzoginteriors.com/kitchens-2-full.jpg',
        '//data.hartzoginteriors.com/kitchens-4-full.jpg',
        '//data.hartzoginteriors.com/kitchens-15-full.jpg',
        '//data.hartzoginteriors.com/Hazelett-27.jpg',
        '//data.hartzoginteriors.com/kitchens-18-full.jpg',
        '//data.hartzoginteriors.com/Forest Park-25.jpg',
        '//data.hartzoginteriors.com/kitchens-13-full.jpg',
        '//data.hartzoginteriors.com/kitchens-16-full.jpg',
        '//data.hartzoginteriors.com/kitchens-9-full.jpg',
      ];
    },
  },
};
</script>
