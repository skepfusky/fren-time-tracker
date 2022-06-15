import { createApp } from "vue"
import "./assets/main.scss"
import App from "./App.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { dom } from "@fortawesome/fontawesome-svg-core"

library.add(fas)
dom.watch()

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app")
