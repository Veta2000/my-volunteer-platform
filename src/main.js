import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router'; 
import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate';

const app = createApp(App);

// Создаем экземпляр Pinia
const pinia = createPinia();

// Используем плагин piniaPersistedState
pinia.use(piniaPersistedState);

// Подключаем Vuetify, Router и Pinia
app.use(vuetify);
app.use(router);
app.use(pinia);

app.mount('#app');
