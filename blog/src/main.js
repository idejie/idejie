import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faRobot } from '@fortawesome/free-solid-svg-icons'; // Keep only the solid robot icon

/* import Font Awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(faRobot);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Antd);

/* add font awesome icon component globally */
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
