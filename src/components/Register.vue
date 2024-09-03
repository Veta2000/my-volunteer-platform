<template>
    <v-container>
      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Имя"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          type="email"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Пароль"
          type="password"
          required
        ></v-text-field>
  
        <v-btn :disabled="!valid" color="primary" @click="registerUser">Зарегистрироваться</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/userStore';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const valid = ref(false);
  const userStore = useUserStore();
  
  const nameRules = [
    v => !!v || 'Имя обязательно',
    v => (v && v.length <= 10) || 'Имя не должно превышать 10 символов',
  ];
  
  const emailRules = [
    v => !!v || 'Email обязателен',
    v => /.+@.+\..+/.test(v) || 'Email должен быть корректным',
  ];
  
  const passwordRules = [
    v => !!v || 'Пароль обязателен',
    v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов',
  ];
  
  const registerUser = () => {
    if (valid.value) {
      userStore.register(name.value, email.value, password.value);
      console.log('Регистрация выполнена:', userStore.user);
    }
  };
  </script>
  