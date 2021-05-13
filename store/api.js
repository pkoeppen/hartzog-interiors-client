// import * as querystring from 'querystring';

export const state = () => ({
  authenticating: false,
  admin: null,
});

export const actions = {
  /*
   * Log in.
   */
  logIn(context, params) {
    context.commit('setAuthenticating', true);
    return this.$axios
      .post(`/admin/login`, params)
      .then(({ data }) => {
        context.commit('setAdmin', data);
        return true;
      })
      .catch(this.$catch)
      .finally(() => context.commit('setAuthenticating', false));
  },

  /*
   * Log out.
   */
  logOut(context) {
    return this.$axios
      .post(`/admin/logout`)
      .then(() => {
        context.commit('setAdmin', null);
        return true;
      })
      .catch(this.$catch);
  },
};

export const mutations = {
  setAuthenticating(_state, authenticating) {
    _state.authenticating = authenticating;
  },
  setAdmin(_state, admin) {
    _state.admin = admin;
    if (process.browser && !admin) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++)
        clearCookie(cookies[i].split('=')[0]);
    }
  },
};

/*
 * Does something. I forget what.
 */
function clearCookie(name, domain = document.domain, path = '/') {
  document.cookie = `${name}=; expires=${+new Date()}; domain=${domain}; path=${path}`;
}
