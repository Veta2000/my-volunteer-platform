import { defineStore } from 'pinia';
import { supabaseInstance } from '../supabaseConfig.js';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
    joinedEvents: []
  }),
  actions: {
    async register(name, email, password, role) {
      try {
        const { data, error } = await supabaseInstance.auth.signUp(
          {
            email,
            password,
            options: {
              data: {
                name,
                role,
              },
            },
          }
        );
        this.user = {
          name,
          email,
          role,
          id: data.id,
        };
        const userJson = JSON.stringify(this.user);
        localStorage.setItem("user", userJson);
        
      } catch (error) {
        console.error("Ошибка при регистрации:", error.message);
      }
    },
    readUser() {
      const userJson = localStorage.getItem("user");
      if(userJson ) {
          this.user = JSON.parse(userJson);
      };
    },
    async login(email, password) {
      try {
        const { data, error } = await supabaseInstance.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        } else {
          const authUser = data.user.user_metadata;
          this.user = {
            email: authUser.email,
            role: authUser.role,
            name: authUser.name,
            id: authUser.sub,
          };
          const userJson = JSON.stringify(this.user);
          localStorage.setItem("user", userJson);
          return this.user; 
        }
      } catch (error) {
        console.error("Ошибка при входе:", error.message);
        return null;
      }
    },

  
    logout() {
      this.user = null;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userStore',
        storage: localStorage,
      },
    ],
  },
});
