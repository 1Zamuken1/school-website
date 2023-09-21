import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBGoIsZrXa42YENzmk_zihg-Hin5qSZ0uc",
    authDomain: "schoolar-website.firebaseapp.com",
    projectId: "schoolar-website",
    storageBucket: "schoolar-website.appspot.com",
    messagingSenderId: "724730587831",
    appId: "1:724730587831:web:a9b384acf0bbc3c29e3b32"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;