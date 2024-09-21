import { defineStore } from 'pinia';
import { supabaseInstance } from '../supabaseConfig.js';

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [],
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

    
    
    }

      },
    
},
);

