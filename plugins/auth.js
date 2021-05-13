export default function ({ $axios, store, route, redirect }) {
  $axios.interceptors.request.use((config) => {
    const admin = store.state.api.admin;
    if (admin) {
      const token = admin.token;
      if (process.client && admin.expires) {
        // If token is expired, remove user payload.
        if (!admin.expires || admin.expires < Date.now()) {
          store.commit('api/setAdmin', null);
        }
      }
      config.headers.common.jwt = token;
    }
    return config;
  });
}
