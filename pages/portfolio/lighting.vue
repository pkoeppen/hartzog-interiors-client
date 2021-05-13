<template>
  <div>
    <nav-header light />
    <portfolio-page
      :text="text"
      :images="images"
      banner="'//data.hartzoginteriors.com/lighting-1-full.jpg'"
      class="-mt-16"
      previous="/portfolio/bathrooms"
      next="/portfolio/accessories"
    />
  </div>
</template>

<script>
export default {
  layout: 'portfolio',
  head: {
    title: 'Hartzog Interiors | Lighting',
  },
  computed: {
    text() {
      return {
        title: 'Lighting',
        introduction: `
        <em>Lights, camera...</em> Alright, no camera, but an expertly lit room certainly deserves one. Proper lighting is crucial to any interior and can completely alter the mood of a scene. Warm and welcome, or cool and moody—there's a rhythm to both, and an art to their application. Our designers are expert directors of light. <em>Action!</em>
        `,
        type: 'Lighting',
        designer: 'Katie Hartzog',
        location: 'Fort Wayne, Indiana',
        description1: `To light a room is to make a statement, just as the composition of a room is a message itself. Lighting determines how an area's character is presented, augmented, or diminished. It tells an emotional story and shows us how to feel when entering the room.`,
        description2: `There's a reason major films always have someone on set whose sole job is to take care of the lighting: It makes or breaks the shot. When it comes to lighting, we treat your home like a big budget studio. We take every precaution to light your life just right.`,
      };
    },
    images() {
      return [
        '//data.hartzoginteriors.com/lighting-2-full.jpg',
        '//data.hartzoginteriors.com/lighting-17-full.jpg',
        '//data.hartzoginteriors.com/lighting-15-full.jpg',
        '//data.hartzoginteriors.com/lighting-10-full.jpg',
        '//data.hartzoginteriors.com/lighting-8-full.jpg',
        '//data.hartzoginteriors.com/lighting-13-full.jpg',
        '//data.hartzoginteriors.com/lighting-11-full.jpg',
        '//data.hartzoginteriors.com/lighting-7-full.jpg',
        '//data.hartzoginteriors.com/lighting-14-full.jpg',
        '//data.hartzoginteriors.com/lighting-4-full.jpg',
      ];
    },
  },
};
</script>
