// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
const app = createApp(App)
app.use(store)
app.mount('#app')
