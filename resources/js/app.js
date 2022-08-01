import './bootstrap';

import App from './components/App.vue';
import router from './components/router/routes';
import { createApp } from 'vue';

createApp(App).use(router).mount("#app");
