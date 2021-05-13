<template>
  <div
    v-show="visible"
    class="fixed inset-0 overflow-auto bg-black bg-opacity-80 z-40"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 z-40" @click="hideModal({ modal: 'auth' })" />

    <div class="h-full w-full flex flex-col items-center p-10">
      <div
        class="relative z-50 w-full max-w-sm p-6 bg-white rounded"
        style="margin: auto 0"
      >
        <!-- Close Modal -->
        <div
          class="absolute top-0 -right-9 h-8 w-8 rounded bg-white bg-opacity-0 hover:bg-opacity-20 cursor-pointer"
          @click="hideModal({ modal: 'auth' })"
        >
          <div class="flex items-center justify-center p-2 text-white">
            <i class="fas fa-times" />
          </div>
        </div>

        <!-- Header -->
        <div class="flex items-center justify-center">
          <img class="h-10 mr-2" src="~/assets/svg/maus-logo-glyph-only.svg" />
          <h2 class="text-xl font-bold">{{ headerText }}</h2>
        </div>

        <!-- Tabs -->
        <div class="flex text-center font-bold my-6">
          <div
            :class="{ 'text-blue-500 border-blue-500': data.tab === 0 }"
            class="w-1/2 pb-1 border-b-2 cursor-pointer"
            @click="setModalData({ modal: 'auth', data: { tab: 0 } })"
          >
            Log In
          </div>
          <div
            :class="{ 'text-blue-500 border-blue-500': data.tab === 1 }"
            class="w-1/2 pb-1 border-b-2 cursor-pointer"
            @click="setModalData({ modal: 'auth', data: { tab: 1 } })"
          >
            Sign Up
          </div>
        </div>

        <!-- Log In -->
        <div v-if="data.tab === 0">
          <form
            class="flex flex-col text-sm"
            spellcheck="false"
            @submit.prevent="logIn()"
          >
            <!-- Email -->
            <div class="mb-4">
              <div class="font-bold mb-1">
                <label for="email">Email</label>
              </div>
              <input
                :value="data.email"
                class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                type="email"
                name="email"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'auth',
                      data: { email: e.target.value },
                    })
                "
              />
            </div>

            <!-- Password -->
            <div class="mb-3">
              <div class="font-bold mb-1">
                <label for="password">Password</label>
              </div>
              <input
                :value="data.password"
                class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                type="password"
                name="password"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'auth',
                      data: { password: e.target.value },
                    })
                "
              />
            </div>

            <!-- Recovery -->
            <nuxt-link
              to="/recover"
              class="text-xs text-blue-500 hover:underline mb-6"
              >Trouble logging in?</nuxt-link
            >

            <!-- Submit -->
            <button
              :class="
                data.loading ? 'bg-blue-200 pointer-events-none' : 'bg-blue-400'
              "
              class="w-full text-white hover:bg-blue-500 rounded px-3 py-2 font-bold"
              type="submit"
            >
              <i v-if="data.loading" class="fas fa-asterisk animate-spin" />
              <span v-else>Log In</span>
            </button>
          </form>

          <!-- or -->
          <div class="relative h-8 flex justify-center items-center my-3">
            <span class="relative px-3 bg-white z-50 text-sm">or</span>
            <div class="absolute inset-0 flex justify-center items-center">
              <hr class="w-full" />
            </div>
          </div>

          <!-- Creator Auth -->
          <button
            class="block mx-auto bg-green-500 text-white rounded px-3 py-2 text-xs"
            @click="
              showModal({ modal: 'creatorAuth', data });
              hideModal({ modal: 'auth' });
            "
          >
            <i class="fas fa-camera-retro mr-2" />
            <span>Log in as a Creator</span>
          </button>
        </div>

        <!-- Sign Up -->
        <div v-if="data.tab === 1">
          <form
            class="flex flex-col text-sm"
            spellcheck="false"
            @submit.prevent="signUp()"
          >
            <!-- Email -->
            <div class="mb-4">
              <div class="font-bold mb-1">
                <label for="email">Email</label>
              </div>
              <input
                :value="data.email"
                class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                type="email"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'auth',
                      data: { email: e.target.value },
                    })
                "
              />
            </div>

            <!-- Date of Birth -->
            <div class="mb-4">
              <div class="font-bold mb-1">
                <label for="email">Date of Birth</label>
              </div>
              <div class="flex gap-2">
                <input
                  :value="data.dobMonth"
                  class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                  type="text"
                  placeholder="Month"
                  @input="
                    (e) =>
                      setModalData({
                        modal: 'auth',
                        data: { dobMonth: e.target.value },
                      })
                  "
                />
                <input
                  :value="data.dobDay"
                  class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                  type="text"
                  placeholder="Day"
                  @input="
                    (e) =>
                      setModalData({
                        modal: 'auth',
                        data: { dobDay: e.target.value },
                      })
                  "
                />
                <input
                  :value="data.dobYear"
                  class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                  type="text"
                  placeholder="Year"
                  @input="
                    (e) =>
                      setModalData({
                        modal: 'auth',
                        data: { dobYear: e.target.value },
                      })
                  "
                />
              </div>
            </div>

            <!-- Password -->
            <div class="mb-4">
              <div class="font-bold mb-1">
                <label for="password">Password</label>
              </div>
              <input
                :value="data.password"
                class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                type="password"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'auth',
                      data: { password: e.target.value },
                    })
                "
              />
            </div>

            <!-- Confirm Password -->
            <div class="mb-4">
              <div class="font-bold mb-1">
                <label for="password">Confirm Password</label>
              </div>
              <input
                :value="data.confirmPassword"
                class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
                type="password"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'auth',
                      data: { confirmPassword: e.target.value },
                    })
                "
              />
            </div>

            <!-- Agreement -->
            <div class="text-xs text-gray-600 mb-6 text-center">
              By clicking Sign Up, you are indicating that you have read and
              acknowledge the
              <nuxt-link to="/terms" class="text-blue-500 hover:underline"
                >Terms of Service</nuxt-link
              >
              and
              <nuxt-link to="/privacy" class="text-blue-500 hover:underline"
                >Privacy Notice</nuxt-link
              >.
            </div>

            <!-- Submit -->
            <button
              :class="
                data.loading ? 'bg-blue-200 pointer-events-none' : 'bg-blue-400'
              "
              class="w-full text-white hover:bg-blue-500 rounded px-3 py-2 font-bold"
              type="submit"
            >
              <i v-if="data.loading" class="fas fa-asterisk animate-spin" />
              <span v-else>Sign Up</span>
            </button>
          </form>

          <!-- or -->
          <div class="relative h-8 flex justify-center items-center my-3">
            <span class="relative px-3 bg-white z-50 text-sm">or</span>
            <div class="absolute inset-0 flex justify-center items-center">
              <hr class="w-full" />
            </div>
          </div>

          <!-- Creator Auth -->
          <button
            class="block mx-auto bg-green-500 text-white rounded px-3 py-2 text-xs"
            @click="
              showModal({ modal: 'creatorAuth', data });
              hideModal({ modal: 'auth' });
            "
          >
            <i class="fas fa-camera-retro mr-2" />
            <span>Sign up as a Creator</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState({
      visible: (state) => state.modals.auth.visible,
      data: (state) => state.modals.auth.data,
    }),
    headerText() {
      switch (this.data.tab) {
        case 0:
          return 'Log in to Maus';
        case 1:
          return 'Join Maus today';
        default:
          return '';
      }
    },
  },
  methods: {
    ...mapMutations(['setModalData', 'showModal', 'hideModal']),

    /*
     * Call the API to login.
     */
    async logIn() {
      if (this.data.loading) return;
      this.setModalData({ modal: 'auth', data: { loading: true } });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      this.hideModal({ modal: 'auth' });
    },

    /*
     * Call the API to login.
     */
    async signUp() {
      if (this.data.loading) return;
      this.setModalData({ modal: 'auth', data: { loading: true } });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      this.hideModal({ modal: 'auth' });
    },
  },
};
</script>
