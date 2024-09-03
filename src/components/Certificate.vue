<template>
    <v-container>
      <v-card>
        <v-card-title>Ваш Сертификат</v-card-title>
        <v-card-text>
          <p>Этот сертификат подтверждает ваше участие в мероприятии "{{ eventTitle }}"</p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="generateCertificate">Сгенерировать и скачать сертификат</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { jsPDF } from 'jspdf';
  
  const eventTitle = ref('Название мероприятия');
  
  const generateCertificate = () => {
    const doc = new jsPDF();
  

    doc.setFontSize(16);
    doc.text('СЕРТИФИКАТ', 105, 40, null, null, 'center');
  
    doc.setFontSize(12);
    doc.text(`Подтверждаем, что`, 105, 60, null, null, 'center');
  
    doc.setFontSize(14);
    doc.text(`[Имя пользователя]`, 105, 80, null, null, 'center');   
    doc.setFontSize(12);
    doc.text(`успешно принял(а) участие в мероприятии`, 105, 100, null, null, 'center');
  
    doc.setFontSize(14);
    doc.text(`${eventTitle.value}`, 105, 120, null, null, 'center'); 
  
    doc.setFontSize(12);
    doc.text(`Дата мероприятия: [Дата]`, 105, 140, null, null, 'center'); 
  
    // подпись печать
    doc.setFontSize(10);
    doc.text(`Подпись`, 20, 200);
    doc.text(`Печать`, 180, 200);
  

    doc.save('certificate.pdf');
  };
  </script>
  
  <style scoped>

  </style>
  