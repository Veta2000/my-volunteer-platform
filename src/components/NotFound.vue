<template>
    <div class="not-found">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не найдена.</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  