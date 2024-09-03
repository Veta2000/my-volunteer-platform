<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Платформа Волонтеров</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Главная</v-btn>
      <v-btn to="/events" text>Мероприятия</v-btn>
      <v-btn to="/profile" text>Профиль</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
</script>

<style>
</style>
