<template>
    <v-container>
      <h1>{{ event.title }}</h1>
      <p>{{ event.description }}</p>
      <p>   {{ event.date }}</p>
      <v-btn color="primary" @click="joinEvent">Присоединиться</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useEventStore } from '../stores/storeEvent.js';
  import { useUserStore } from '../stores/userStore.js';
  
  const route = useRoute();
  const eventId = route.params.id;
  const eventStore = useEventStore();
  const userStore = useUserStore();

  const userId = userStore.user?.id; 

  const getEvent = ( async () => {
    const eventNow = await eventStore.getEvent(eventId);
    if (eventNow) {
      event.value = eventNow;
    }
    else{
      console.error('Ошибка при загрузке мероприятия:', error);
    }
    
  })
  
onMounted ( async()=>{
  await getEvent()
});

  const event = ref({
    id: eventId,
    title:'',
    description: '',
    date: '',
      });

      const joinEvent = async () => {
  await eventStore.joinEvent(event.value.id, userId); 
  console.log('Мероприятие добавлено в профиль.');
};
  </script>
  