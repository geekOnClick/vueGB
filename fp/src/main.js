import { createApp } from 'vue'
import App from './App'
import './theme.css'
import store from './store/index'


const app = createApp(App)
app.use(store)
app.mount('#app')