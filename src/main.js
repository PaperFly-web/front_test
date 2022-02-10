import { createApp } from 'vue'
import App from './App.vue'
import naiveUI from './naiveUI'

const AppBase = createApp(App);
AppBase.use(naiveUI)
    .mount('#app')
