
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf_XGF-toa6K6fGQ4xl-4IPhb_5M7sW5g",
  authDomain: "miniapp-1f380.firebaseapp.com",
  projectId: "miniapp-1f380",
  storageBucket: "miniapp-1f380.appspot.com",
  messagingSenderId: "565751507170",
  appId: "1:565751507170:web:bf2a84af192275fa0d56bb",
};

const db = initializeApp(firebaseConfig);
console.log(db)
// Initialize Firebase
module.exports = db;
