//載入 body css for App_test.vue
//import './assets/base.css'; 
// 從 vue 載入  createApp 組件
import { createApp } from "vue"; 
// 載入根組件
import App from "./App.vue";
// 建立根組件
const app = createApp(App);
// 掛載根組件至  HTML 標籤
app.mount("#vue_app");