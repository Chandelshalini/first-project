import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import '@fortawesome/fontawesome-free/css/all.css'
createApp(App).use(router).mount('#app')
