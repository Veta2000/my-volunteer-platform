<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <h1 class="mb-5">Платформа для Организации Волонтерских Мероприятий</h1>
        <p class="mb-5">
          Добро пожаловать на платформу! Здесь вы можете найти интересные волонтерские мероприятия, присоединиться к ним и внести свой вклад в важные дела!
        </p>
      </v-col>
    </v-row>

    <!-- Интеграция EventList с кастомным слотом -->
    <EventList>
      <template #event-details="{ event }">
        <v-list-item-title>{{ event.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ event.date }} (дата)</v-list-item-subtitle>
      </template>
    </EventList>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import EventList from '../components/EventList.vue'; 

const router = useRouter();

function goToEvents() {
  router.push('/events');
}
</script>

<style scoped>
</style>
