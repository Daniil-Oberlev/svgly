import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faVk, faGoogle, faYandex } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faVk, faGoogle, faYandex)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
