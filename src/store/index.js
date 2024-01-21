import { createStore } from 'vuex'
import { loginRequest, logoutRequest, registerRequest } from '@/utils/api';

export default createStore({
  state: {
    token: localStorage.getItem('myAppToken') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = '';
    },
    CLEAR_TOKEN: (state) => {
      state.token = null;
    }
  },
  actions: {
    AUTH_REQUEST: ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        loginRequest(user).then((token) => {
          commit('AUTH_SUCCESS', token);
          localStorage.setItem('myAppToken', token);
          resolve();
        })
          .catch(() => {
            commit('AUTH_ERROR');
            localStorage.removeItem('myAppToken')
            reject();
          })
      })
    },
    AUTH_CREATE: ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        registerRequest(user).then((token) => {
          commit('AUTH_SUCCESS', token);
          localStorage.setItem('myAppToken', token);
          resolve();
        })
          .catch(() => {
            commit('AUTH_ERROR');
            localStorage.removeItem('myAppToken')
            reject();
          })
      })
    },
    AUTH_LOGOUT: ({ commit }) => {
      return new Promise((resolve, reject) => {
        logoutRequest().then((token) => {
          commit('CLEAR_TOKEN');
          localStorage.removeItem('myAppToken')
          resolve();
        })
        .catch((error) => {
          commit('AUTH_ERROR');
          localStorage.removeItem('myAppToken');
          reject(error);
        });
      })
    }
  },
  modules: {
  }
})
