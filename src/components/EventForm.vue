<template>
    <v-container>
      <v-form v-model="isValid" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="event.title"
          label="Название мероприятия"
          :rules="[rules.required]"
        ></v-text-field>
  
        <v-text-field
          v-model="event.date"
          label="Дата мероприятия"
          :rules="[rules.required]"
          type="date"
        ></v-text-field>
  
        <v-text-field
          v-model="event.description"
          label="Описание"
          :rules="[rules.required]"
        ></v-text-field>
  
        <v-btn :disabled="!isValid" type="submit">
          {{ isEditMode ? 'Обновить' : 'Создать' }} мероприятие
        </v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useEventStore } from '../stores/storeEvent.js';
  import { supabaseInstance } from '../supabaseConfig.js';
  
  const router = useRouter();
  const route = useRoute();
  const eventStore = useEventStore ();

  
  
  const event = ref({
    title: '',
    date: '',
    description: '',
  });
  
  const isEditMode = ref(false);
  const isValid = ref(false);
  const rules = {
    required: (value) => !!value || 'Обязательное поле.',
  };
  


  const handleSubmit = async () => {

    const createEvent = eventStore.createEvent( event.value.title, event.value.data, event.value.description);

  if (createEvent) {
    router.push('/events');
  } else {
    console.error('Ошибка при добавлении мероприятия:', error);
  }
};


</script>
  <style scoped>
  
  </style>
  