import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'

import {install} from 'giantgo-render'

import 'giantgo-render/dist/style.css'
import './styles/index.scss'
const app = createApp(App)

app.use(ElementPlus)

// 还可以全局注册FormDesign 和 FormRender组件
app.use(install)
app.mount('#app')
