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

      <div class="register-buttons">
        <v-btn :disabled="!valid" color="primary" @click="register('Волонтер')">
          Зарегистрироваться как волонтер
        </v-btn>
        <v-btn :disabled="!valid" color="primary" @click="register('Организация')">
          Зарегистрироваться как организация
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const valid = ref(false);
const userStore = useUserStore();
const router = useRouter();

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

const register = async (role) => {
  if (valid.value) {
    await userStore.register(name.value, email.value, password.value, role);
    router.push('/user-profile'); 
  }
};


</script>

<style scoped>
.register-buttons {
  display: flex;
  gap: 20px;
}
</style>
