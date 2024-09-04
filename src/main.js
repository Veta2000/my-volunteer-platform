
import { createApp } from 'vue';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router'; 
import { createPinia } from 'pinia';

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

const app = createApp(App);


app.use(vuetify);
app.use(router);
app.use(createPinia());

app.mount('#app');
