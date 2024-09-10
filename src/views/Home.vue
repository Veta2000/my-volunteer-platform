<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h1 class="mb-5">Платформа для Организации Волонтерских Мероприятий</h1>
          <p class="mb-5">
            Добро пожаловать на платформу! Здесь вы можете найти интересные волонтерские мероприятия, присоединиться к ним и внести свой вклад в важные дела!
          </p>
          <v-btn color="primary" @click="goToEvents">
            Перейти к мероприятиям
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  function goToEvents() {
    router.push('/events');
  }
  </script>
  
  <style scoped>
  
  </style>
  