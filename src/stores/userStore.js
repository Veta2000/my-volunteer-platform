import { defineStore } from 'pinia';
// import { auth } from '../firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { supabaseInstance } from '../supabaseConfig.js';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
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
                }
              }
            }
        )
        this.user = {
          name,
          email,
          role,
        };
      } catch (error) {
        console.error("Ошибка при регистрации:", error.message);
      }
    },

    async login(email, password) {
      try {
        const { data, error } = await supabaseInstance.auth.signInWithPassword({
            email,
            password,
        })

        if (error){
            throw error
        } else {

            const authUser = data.user.user_metadata
            this.user = {
                email: authUser.email,
                role: authUser.role,
                name: authUser.name
            };
            return this.user; // No error
        }

    } catch (error) {
      console.error("Ошибка при входе:", error.message);
      return null; // Return error to be displayed
    }
    },

    logout() {
      this.user = null
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
