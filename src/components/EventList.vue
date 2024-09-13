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

const events = ref([
  { id: 1, title: 'Субботник в парке', date: '2024-09-01' },
  { id: 2, title: 'Помощь приюту', date: '2024-09-15' }
]);

// Вызов API для добавления данных мероприятий
onMounted(() => {
  axios.get('https://api.publicapis.org/entries')
    .then(response => {
      const apiEvents = response.data.entries.slice(0, 2).map((entry, index) => ({
        id: events.value.length + index + 1, 
        title: entry.API,
        date: '2024-10-01'
      }));
      events.value = [...events.value, ...apiEvents]; 
    })
    .catch(error => {
      console.error('Ошибка при загрузке мероприятий:', error);
    });
});
</script>
