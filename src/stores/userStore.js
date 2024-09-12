import { defineStore } from 'pinia';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),
  actions: {
    async register(name, email, password, role) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = {
          name,
          email: userCredential.user.email,
          role,
        };
      } catch (error) {
        console.error("Ошибка при регистрации:", error.message);
      }
    },

    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = {
          email: userCredential.user.email,
          role: 'Волонтер',
        };
      } catch (error) {
        console.error("Ошибка при входе:", error.message);
      }
    },

    logout() {
      auth.signOut()
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          console.error("Ошибка при выходе:", error.message);
        });
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
