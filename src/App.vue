<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Платформа Волонтеров</v-toolbar-title>
      <v-btn to="/" text>Главная</v-btn>
      <v-btn v-if="userStore.user" to="/events">Мероприятия</v-btn>
      <v-btn v-if="userStore.user" to="/user-profile">Профиль</v-btn>
      <v-btn v-if="!userStore.user" to="/login">Вход</v-btn>
      <v-btn v-else  @click="logout">Выйти</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from './stores/userStore.js';


const userStore = useUserStore();
const router = useRouter();
  onMounted (() => {
userStore.readUser()
  });

const logout = () => {
  userStore.logout();
  router.push('/login');
};

</script>

<style>
.v-app-bar {
  padding-left: 40px;
  padding-right: 40px;
}
</style>