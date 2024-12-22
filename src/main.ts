import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './routers/router'
import appConfigs from './configs/appConfigs'

const app = createApp(App)
app.config.globalProperties.$appConfigs = appConfigs
app.use(MotionPlugin)
app.use(router)
app.mount('#app')
