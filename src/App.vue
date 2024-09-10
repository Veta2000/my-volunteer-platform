<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Платформа Волонтеров</v-toolbar-title>
      <v-btn to="/" text>Главная</v-btn>
      <v-btn to="/events" text>Мероприятия</v-btn>
      <v-btn to="/profile" text>Профиль</v-btn>
      <v-btn to="/login">Вход</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
</script>

<style>
.v-app-bar {
  padding-left: 40px;
  padding-right: 40px;
}
</style>