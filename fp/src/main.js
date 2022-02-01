import { createApp } from 'vue'
import App from './App'
import './theme.css'
import router from '@/router/router';
import store from './store/index'


const app = createApp(App)
.use(router)
app.use(store)
app.mount('#app')