<template>
    <v-container>
      <h1>{{ event.title }}</h1>
      <p>{{ event.description }}</p>
      <v-btn color="primary">Присоединиться</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const eventId = route.params.id;
  
  const event = ref({
    id: eventId,
    title: 'Субботник в парке',
    description: 'Уборка и благоустройство парка',
      });
  </script>
  