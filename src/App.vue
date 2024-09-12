<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Платформа Волонтеров</v-toolbar-title>
      <v-btn to="/" text>Главная</v-btn>
      <v-btn to="/events">Мероприятия</v-btn>
      <v-btn to="/user-profile">Профиль</v-btn>
      <v-btn v-if="!user" to="/login">Вход</v-btn>
      <v-btn v-if="user" @click="logout">Выйти</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from './stores/userStore';

const userStore = useUserStore();
const user = ref(userStore.user);
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push('/login');  // Перенаправление на страницу входа после выхода
};

</script>

<style>
.v-app-bar {
  padding-left: 40px;
  padding-right: 40px;
}
</style>