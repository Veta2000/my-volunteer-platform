import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router'; 
import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersistedState);

app.use(vuetify);
app.use(router);
app.use(pinia);

app.mount('#app');
