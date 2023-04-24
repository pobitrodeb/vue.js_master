import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


//  Custom CSS 
import './assets/sass/style.scss'



const app = createApp(App)

app.use(createPinia())

app.mount('#app')


//bootstrap JS support 
import * as bootstrap from 'bootstrap'