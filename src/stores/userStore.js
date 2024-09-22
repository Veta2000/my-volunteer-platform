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
        });

        if (error) {
          throw error;
        } else {
          const authUser = data.user.user_metadata;
          this.user = {
            email: authUser.email,
            role: authUser.role,
            name: authUser.name,
          };
          return this.user; 
        }
      } catch (error) {
        console.error("Ошибка при входе:", error.message);
        return null;
      }
    },

    async joinEvent(eventId) { 
      const { error } = await supabaseInstance
        .from('user_events')
        .insert({ user_id: this.user.id, event_id: eventId }); 

      if (!error) {
        this.joinedEvents.push(eventId);
      } else {
        console.error('Ошибка при добавлении мероприятия в профиль:', error.message);
      }
    },

    async fetchJoinedEvents() { 
      const { data, error } = await supabaseInstance
        .from('user_events')
        .select('event_id')
        .eq('user_id', this.user.id);

      if (!error) {
        this.joinedEvents = data.map(event => event.event_id);
      } else {
        console.error('Ошибка при получении мероприятий:', error.message);
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
