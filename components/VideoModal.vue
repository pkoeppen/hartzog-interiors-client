<template>
  <div
    v-show="visible"
    class="fixed inset-0 overflow-auto bg-black bg-opacity-80 z-30"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 z-30"
      @click="
        hideModal({ modal: 'video' });
        destroyVideo();
      "
    />

    <!-- Video Viewer -->
    <div class="absolute flex inset-0">
      <div
        ref="videoContainer"
        class="relative mx-auto inline-flex flex-col items-stretch justify-center"
      >
        <!-- Close Modal -->
        <div
          class="flex items-center justify-end z-40"
          style="height: 30px"
          :class="controlsClass"
        >
          <i
            class="fas fa-times cursor-pointer text-gray-300 hover:text-white"
            @click="
              hideModal({ modal: 'video' });
              destroyVideo();
            "
          />
        </div>
        <!-- Video -->
        <video
          ref="video"
          class="z-50"
          :src="videoSource"
          :style="videoStyle"
          autoplay
          controls
        ></video>
        <!-- Video Title -->
        <div
          class="flex items-center justify-end z-40 text-xs text-gray-300 italic"
          style="height: 30px"
          :class="controlsClass"
        >
          <span>Hartzog Interiors Video Showcase</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      videoStyle: '',
      controlsClass: '',
    };
  },
  computed: {
    ...mapState({
      visible: (state) => state.modals.video.visible,
      data: (state) => state.modals.video.data,
    }),
    videoSource() {
      return this.data.src;
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
    this.onResize(); // Adjust video container size on page load.
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    ...mapMutations(['setModalData', 'showModal', 'hideModal']),
    onResize() {
      const aspectRatioViewport = window.innerWidth / window.innerHeight;
      const aspectRatioVideo =
        this.$refs.video.clientWidth / (this.$refs.video.clientHeight + 60);

      if (aspectRatioViewport > aspectRatioVideo) {
        this.videoStyle = 'height: calc(100vh - 60px)';
        this.controlsClass = '';
      } else {
        this.videoStyle = 'width: 100vw';
        this.controlsClass = 'pr-2';
      }
    },
    destroyVideo() {
      this.$refs.video.pause();
      this.$refs.video.currentTime = 0;
    },
  },
};
</script>
