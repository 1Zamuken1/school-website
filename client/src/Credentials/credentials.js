import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCRD8Dshf2iNbm1aklKlQ0AYcOffzs9FCc",
    authDomain: "schoolar-website-1e686.firebaseapp.com",
    projectId: "schoolar-website-1e686",
    storageBucket: "schoolar-website-1e686.appspot.com",
    messagingSenderId: "1035466982943",
    appId: "1:1035466982943:web:8fa934589943e9b058f72a",
    measurementId: "G-DDR38KBNEC"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;