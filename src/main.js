import { createApp } from 'vue';
import '@fontsource/silkscreen';
import './assets/scss/style.scss';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// TYPE ICONS //

/* Fire */
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
/* Grass */
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
/* Water */
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
/* Bug */
import { faBug } from '@fortawesome/free-solid-svg-icons';
/* Poison */
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
/* Bird */
import { faDove } from '@fortawesome/free-solid-svg-icons';
/* Normal */
import { faStar } from '@fortawesome/free-solid-svg-icons';
/* Electric */
import { faBolt } from '@fortawesome/free-solid-svg-icons';
/* Ground */
import { faHillRockslide } from '@fortawesome/free-solid-svg-icons';
/* Fairy */
import { faClover } from '@fortawesome/free-solid-svg-icons';

library.add(faFireFlameCurved, faLeaf, faDroplet, faBug, faSkullCrossbones, faDove, faStar, faBolt, faHillRockslide, faClover);

createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app');
