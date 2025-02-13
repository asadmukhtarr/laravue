import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Import Font Awesome CSS
import 'font-awesome/css/font-awesome.min.css';
const app = createApp(App);
app.use(router);
app.mount('#app');
