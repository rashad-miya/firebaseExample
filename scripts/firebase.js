// scripts/firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyBU9wwCuN_tXdpYww6ESf2pDZX6zXjxV5E",
    authDomain: "business-manager-d3c9e.firebaseapp.com",
    projectId: "business-manager-d3c9e",
    storageBucket: "business-manager-d3c9e.appspot.com",
    messagingSenderId: "966957540161",
    appId: "1:966957540161:web:ada5e144f2ddec4a5577c0"
};

firebase.initializeApp(firebaseConfig);
function testFirebase() {
    console.log("Firebase initialized!");
};
