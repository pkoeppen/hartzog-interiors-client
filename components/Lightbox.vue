<template>
  <div
    v-show="visible"
    class="fixed inset-0 overflow-auto bg-black bg-opacity-80 z-30"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 z-30"
      @click="hideModal({ modal: 'lightbox' })"
    />

    <!-- Image Viewer -->
    <div class="absolute flex inset-0">
      <div
        ref="imageContainer"
        class="relative mx-auto inline-flex flex-col items-stretch justify-center"
      >
        <!-- Close Modal -->
        <div
          class="flex items-center justify-end z-40 mr-1 lg:mr-0"
          style="height: 30px"
          :class="controlsClass"
        >
          <i
            class="fas fa-times cursor-pointer text-gray-300 hover:text-white"
            @click="hideModal({ modal: 'lightbox' })"
          />
        </div>
        <!-- Image -->
        <img
          ref="image"
          :src="imageSource"
          :style="imageStyle"
          class="object-contain"
        />
        <!-- Location -->
        <div
          class="flex items-center justify-end z-40 text-xs text-gray-300 mr-1 lg:mr-0"
          style="height: 30px"
          :class="controlsClass"
        >
          <span>{{ selected + 1 }} / {{ images.length }}</span>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="absolute inset-0 flex justify-between items-center">
      <div
        class="p-10 cursor-pointer text-gray-300 hover:text-white z-50"
        @click="previous()"
      >
        <i class="fas fa-caret-left fa-4x" />
      </div>
      <div
        class="p-10 cursor-pointer text-gray-300 hover:text-white z-50"
        @click="next()"
      >
        <i class="fas fa-caret-right fa-4x" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      imageStyle: '',
      controlsClass: '',
    };
  },
  computed: {
    ...mapState({
      visible: (state) => state.modals.lightbox.visible,
      data: (state) => state.modals.lightbox.data,
    }),
    images() {
      return this.data.images || [];
    },
    selected() {
      return this.data.selected || 0;
    },
    imageSource() {
      return this.images[this.selected];
    },
  },
  watch: {
    visible() {
      if (this.visible) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    },
  },
  mounted() {
    this.onResize(); // Adjust image container size on page load.
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    ...mapMutations(['setModalData', 'showModal', 'hideModal']),
    onResize() {
      const aspectRatioViewport = window.innerWidth / window.innerHeight;
      const aspectRatioImage =
        this.$refs.image.clientWidth / (this.$refs.image.clientHeight + 60);

      if (aspectRatioViewport > aspectRatioImage) {
        this.imageStyle = 'height: calc(100vh - 60px)';
        this.controlsClass = '';
      } else {
        this.imageStyle = 'width: 100vw';
        this.controlsClass = 'pr-2';
      }
    },
    next() {
      const selected =
        this.selected === this.images.length - 1 ? 0 : this.selected + 1;
      this.setModalData({
        modal: 'lightbox',
        data: { selected },
      });
    },
    previous() {
      const selected =
        this.selected === 0 ? this.images.length - 1 : this.selected - 1;
      this.setModalData({
        modal: 'lightbox',
        data: { selected },
      });
    },
  },
};
</script>
