// firebase-init.js

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDytFA6jSmRXpnwiIY6hz6u0F62y5JtFA",
  authDomain: "podclub-bdcc9.firebaseapp.com",
  databaseURL: "https://podclub-bdcc9-default-rtdb.firebaseio.com",
  projectId: "podclub-bdcc9",
  storageBucket: "podclub-bdcc9.appspot.com",
  messagingSenderId: "980388381441",
  appId: "1:980388381441:web:e12821b7b00cdf0be3d100"
};

// Initialize Firebase (non-module style)
firebase.initializeApp(firebaseConfig);

// Expose Auth and Firestore globally
window.firebaseAuth = firebase.auth();
window.firebaseDB = firebase.firestore();
