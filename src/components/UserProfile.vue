<template>
  <v-container>
    <h2>Профиль {{ user?.role }}</h2>
    <p>Email: {{ user?.email }}</p>
 
    <v-btn v-if="user?.role === 'Организация'" color="primary" @click="createEvent">
      Создать мероприятие
    </v-btn>
  
    <v-list>
      <v-list-item v-for="event in userStore.joinedEvents" :key="event.events.id">
        <v-list-item-content>
          <v-list-item-title>{{ event.events.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ event.events.date }}</v-list-item-subtitle>
        
        </v-list-item-content>
        
        <v-btn v-if="user?.role === 'Волонтер'"  color="primary" @click="generateCertificate(event.name, event.date)">Сгенерировать сертификат</v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import { jsPDF } from 'jspdf';
import { useUserStore } from '../stores/userStore.js';
import { useRouter } from 'vue-router';
import { useEventStore } from '../stores/storeEvent.js';

const eventStore = useEventStore();
const userStore = useUserStore();
const user = userStore.user;
const router = useRouter();
const joinedEvents = ref([]);

onMounted(async () => {
  await eventStore.fetchJoinedEvents(user.id) 
  
  // await loadEventDetails(); 
});

// const loadEventDetails = async () => {
//   joinedEvents.value = await Promise.all(
//     userStore.joinedEvents.map(async (eventId) => {
//       const event = await eventStore.getEvent(eventId); 
//       return {
//         title: event.title,
//         date: event.date,
//       };
//     })
//   );
// };

const generateCertificate = (eventName, eventDate) => {

  const doc = new jsPDF();


  
  doc.setFontSize(20);
   doc.setFont("helvetica", "bold");
   doc.text('СЕРТИФИКАТ', 105, 40, null, null, 'center');

   doc.setFontSize(12);
   doc.setFont("helvetica", "normal");
   doc.text(`Подтверждаем, что`, 105, 60, null, null, 'center');


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
  router.push('/event-form');
};
</script>