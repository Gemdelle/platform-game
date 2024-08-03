import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARq1VayBw8bAkM3izDG9XSW1tuX4K0NfY",
    authDomain: "platform-game-6d42b.firebaseapp.com",
    databaseURL: "https://platform-game-6d42b-default-rtdb.firebaseio.com",
    projectId: "platform-game-6d42b",
    storageBucket: "platform-game-6d42b.appspot.com",
    messagingSenderId: "1039628279783",
    appId: "1:1039628279783:web:63ed04202e3acc1cabe742",
    measurementId: "G-KLPDXFL58T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };