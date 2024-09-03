<template>
    <v-container>
      <h1>Мероприятия</h1>
      <v-list>
        <v-list-item v-for="event in events" :key="event.id">
          <v-list-item-content>
            <v-list-item-title>{{ event.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ event.date }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn :to="`/events/${event.id}`">Подробнее</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const events = ref([
    { id: 1, title: 'Субботник в парке', date: '2024-09-01' },
    { id: 2, title: 'Помощь приюту', date: '2024-09-15' },
  ]);
  </script>
  