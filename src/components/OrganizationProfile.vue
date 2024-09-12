<template>
    <v-container>
      <h2>Профиль Организации</h2>
  
      <v-btn color="primary" @click="goToEventForm">Добавить новое мероприятие</v-btn>
  
        <v-list>
        <v-list-item v-for="(event, index) in organizationEvents" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ event.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ event.date }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '../stores/userStore';
  
  const userStore = useUserStore();
  const router = useRouter();
  
  const organizationEvents = ref([
    { name: 'Мероприятие 1', date: '2023-10-10' },
    { name: 'Мероприятие 2', date: '2023-11-05' },
  ]);
  
  
  const goToEventForm = () => {
    router.push('/event-form');
  };
  </script>
  