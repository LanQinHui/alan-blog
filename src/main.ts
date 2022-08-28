import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { create,NButton } from 'naive-ui'
import { createPinia } from 'pinia'
import router from './router'
import '@/styles/tailwindcss/tailwind.css'
import CScrollbar from 'c-scrollbar'

const naive = create({
  components: [NButton]
})

const app = createApp(App);

app.use(createPinia())
app.use(naive)
app.use(router)
app.use(CScrollbar)



app.mount('#app');
