<template>
  <v-container>
    <h2>Профиль пользователя</h2>
    <p>Email: {{ user?.email }}</p>

    <!-- Кнопка для создания мероприятия, если роль - Организация -->
    <v-btn v-if="user?.role === 'Организация'" color="primary" @click="createEvent">
      Создать мероприятие
    </v-btn>

    <!-- Перечень ивентов -->
    <v-list>
      <v-list-item v-for="(event, index) in events" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ event.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ event.date }}</v-list-item-subtitle>
        </v-list-item-content>
        <!-- Кнопка для генерации сертификата для конкретного ивента -->
        <v-btn color="primary" @click="generateCertificate(event.name, event.date)">Сгенерировать сертификат</v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { jsPDF } from 'jspdf';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const user = ref(userStore.user);
const router = useRouter();

const events = ref([
  { name: 'Ивент 1', date: '2023-10-01' },
  { name: 'Ивент 2', date: '2023-10-15' },
  { name: 'Ивент 3', date: '2023-11-01' }
]);

const generateCertificate = (eventName, eventDate) => {
  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text('СЕРТИФИКАТ', 105, 40, null, null, 'center');

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Подтверждаем, что`, 105, 60, null, null, 'center');

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(user.value.name, 105, 80, null, null, 'center');

  doc.setFontSize(12);
  doc.text(`успешно принял(а) участие в мероприятии`, 105, 100, null, null, 'center');
  doc.setFontSize(14);
  doc.text(eventName, 105, 120, null, null, 'center');

  doc.setFontSize(12);
  doc.text(`Дата мероприятия: ${eventDate}`, 105, 140, null, null, 'center');

  doc.setFontSize(10);
  doc.text(`Подпись`, 20, 200);
  doc.text(`Печать`, 180, 200);

  doc.save(`certificate_${eventName}.pdf`);
};

// Функция для перехода на страницу создания мероприятия
const createEvent = () => {
  router.push('/events');
};
</script>