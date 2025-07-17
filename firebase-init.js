// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDytFA6jSmRXpnwiIY6hz6u0F62y5JtFA",
  authDomain: "podclub-bdcc9.firebaseapp.com",
  databaseURL: "https://podclub-bdcc9-default-rtdb.firebaseio.com",
  projectId: "podclub-bdcc9",
  storageBucket: "podclub-bdcc9.appspot.com",
  messagingSenderId: "980388381441",
  appId: "1:980388381441:web:e12821b7b00cdf0be3d100"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;