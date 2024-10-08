import { defineStore } from 'pinia';
import { supabaseInstance } from '../supabaseConfig.js';

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [],
    joinEvents: [],
  }),
  actions: {
      async  createEvent (title, date, description){
        try {
            const {  data, error  } = await supabaseInstance
    .from('events')
    .insert([{ title, date, description}]);
    if (error){
        throw error
    }
    return data;
        } catch {error} {
            return false;
            console.error ('Ошибка создания', error)
        }

      },
      async getEvents() {
        try{
            const { data, error } = await supabaseInstance
            .from('events')
            .select('*');
            if (error){
                throw error
            }
            this.events = data;
            return data;

        } catch {error}{
            return false;
            console.error ('Ошибка получения', error)

        }
    },
    async getEvent(id) {
        try{
            const { data, error } = await supabaseInstance
            .from('events')
            .select('*')
            .eq('id', id)
            .limit(1)
            .single();
            if (error){
                throw error
            }
            
            return data;

        } catch {error}{
            return false;


        }

    
    
    },
    async joinEvent(eventId, userId) { 
        const { data, error } = await supabaseInstance
          .from('user_events')
          .insert({ user_id: userId, event_id: eventId }); 
  
        if (!error) {
          return true;
        } else {
          console.error('Ошибка при добавлении мероприятия в профиль:', error.message);
        }
      },
  
      async fetchJoinedEvents(userId) { 
        const { data, error } = await supabaseInstance
          .from('user_events')
          .select('events(*)')
          .eq('user_id', userId);
  
        if (!error) {
          this.joinEvents = data;
          return data
          
        } else {
          console.error('Ошибка при получении мероприятий:', error.message);
        }
      },
  

      },
    
},

);

