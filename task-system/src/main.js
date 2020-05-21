import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin.js'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)

const firebaseConfig = {
    apiKey: "AIzaSyDjcMdfnMSEpevEHPM8Vbe9Ux3Yr2RB2Eo",
    authDomain: "task-system-d2b09.firebaseapp.com",
    databaseURL: "https://task-system-d2b09.firebaseio.com",
    projectId: "task-system-d2b09",
    storageBucket: "task-system-d2b09.appspot.com",
    messagingSenderId: "33024657369",
    appId: "1:33024657369:web:f94c574441664c96e97bc8",
    measurementId: "G-6BYX1GWWR6"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app 

firebase.auth().onAuthStateChanged(() => {
	if(!app){
		app = new Vue({
  		  router,
  		  store,
  		  render: h => h(App)
		}).$mount('#app')
	}
})


