<template>
  <v-container>
    <v-form v-model="valid" ref="form">
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

      <v-btn :disabled="!valid" color="primary" @click="loginUser">Войти</v-btn>
      <v-btn to="/register">Зарегистрироваться</v-btn>
      <v-alert
        v-if="loginError"
        type="error"
        dismissible
      >
        {{ loginError }}
      </v-alert>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';

const email = ref('');
const password = ref('');
const valid = ref(false);
const userStore = useUserStore();
const router = useRouter();
const loginError = ref('');

const emailRules = [
  v => !!v || 'Email обязателен',
  v => /.+@.+\..+/.test(v) || 'Email должен быть корректным',
];

const passwordRules = [
  v => !!v || 'Пароль обязателен',
];

const loginUser = async () => {
  if (valid.value) {
    loginError.value = '';

    const user = await userStore.login(email.value, password.value);
    console.log(user)

      if (user) {

        if (user.role === 'Организация') {
        router.push({ name: 'OrganizationProfile' });
      } else {
        router.push({ name: 'UserProfile' });
      }

    } else {
          loginError.value = 'Не удалось войти.';
    }
  }
};
</script>