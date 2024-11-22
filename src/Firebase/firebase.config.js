// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7WhHXtJMAWlxf5UIZC4_BlbuJxvg7pHk",
    authDomain: "dragon-news-544f6.firebaseapp.com",
    projectId: "dragon-news-544f6",
    storageBucket: "dragon-news-544f6.firebasestorage.app",
    messagingSenderId: "325347871625",
    appId: "1:325347871625:web:a29e94bc15406ba07e6f58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;