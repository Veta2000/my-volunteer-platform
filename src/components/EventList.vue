<template>
  <v-container>
    <h1>Мероприятия</h1>
    <v-list>
      <v-list-item v-for="event in events" :key="event.id">
        <v-list-item-content>
          <slot name="event-details" :event="event">
            <v-list-item-title>{{ event.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ event.date }}</v-list-item-subtitle>
          </slot>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn :to="`/events/${event.id}`">Подробнее</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { supabaseInstance } from '../supabaseConfig';
import { useEventStore } from '../stores/storeEvent.js';

const events = ref([
]);

const eventStore = useEventStore();


const getEvents = ( async() => {

  const eventsList =  await eventStore.getEvents() 
   
  if (eventsList) {
    events.value = eventsList;
  } else {
    console.error('Ошибка при загрузке мероприятий:', error);
  }
})

 onMounted( async() => {
  
  await getEvents()
});
</script>
