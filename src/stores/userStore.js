import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(email, password) {
    
      this.user = { email, name: 'Пользователь' }; 
    },
    logout() {
      this.user = null;
    },
    register(name, email, password) {
      this.user = { name, email };
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});