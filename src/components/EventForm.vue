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
  
        <v-textarea
          v-model="event.description"
          label="Описание"
          :rules="[rules.required]"
        ></v-textarea>
  
        <v-btn :disabled="!isValid" type="submit">
          {{ isEditMode ? 'Обновить' : 'Создать' }} мероприятие
        </v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { doc, getDoc, setDoc, updateDoc, collection } from 'firebase/firestore';
  import { db } from '../firebaseConfig';
  
  const router = useRouter();
  const route = useRoute();
  
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
    if (isEditMode.value) {
      await updateDoc(doc(db, 'events', route.params.id), event.value);
    } else {
      const eventRef = doc(collection(db, 'events'));
      await setDoc(eventRef, event.value);
    }
    router.push('/events');
  };
  
  onMounted(async () => {
    if (route.params.id) {
      isEditMode.value = true;
      const eventDoc = await getDoc(doc(db, 'events', route.params.id));
      if (eventDoc.exists()) {
        event.value = eventDoc.data();
      }
    }
  });
  </script>
  
  <style scoped>
  
  </style>
  