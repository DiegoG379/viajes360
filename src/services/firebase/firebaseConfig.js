import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFDrk1AT_VWm_BkZoofgzaTlmbJt2sIEc",
    authDomain: "viajes360-3464d.firebaseapp.com",
    projectId: "viajes360-3464d",
    storageBucket: "viajes360-3464d.appspot.com",
    messagingSenderId: "38350175803",
    appId: "1:38350175803:web:8c1129c2005db74fd9661e"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)