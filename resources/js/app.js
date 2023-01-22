import './bootstrap';

import { createApp } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { plugin, defaultConfig } from '@formkit/vue';
import VueSweetalert2 from 'vue-sweetalert2';
import app from './components/App.vue';
import router from './router';
import store from './store';

createApp(app)
    .use(router)
    .use(store)
    .use(autoAnimatePlugin)
    .use(VueSweetalert2)
    .use(plugin, defaultConfig())
    .mount('#app');
