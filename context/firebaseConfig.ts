// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Chave do Firebase vem aqui, onde pegamos da criação de projeto do site
const firebaseConfig = {
  apiKey: "AIzaSyDjDRGtXE3QyTmUdJwk_EL24dfoTXC0Pb8",
  authDomain: "reuse-f2e68.firebaseapp.com",
  projectId: "reuse-f2e68",
  storageBucket: "reuse-f2e68.firebasestorage.app",
  messagingSenderId: "372135335672",
  appId: "1:372135335672:web:d4484eaadb400766990d0d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);