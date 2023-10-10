import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Card } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(Card);
app.mount('#app');
