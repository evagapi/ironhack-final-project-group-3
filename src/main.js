import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import "./style.css";
import App from "./App.vue";

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia);
app.mount("#app");
