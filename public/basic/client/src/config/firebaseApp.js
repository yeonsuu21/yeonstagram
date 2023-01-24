import firebaseApp from 'firebase'
import 'firebase/compat/app'
import 'firebase/compat/auth'

  
  const firebaseConfig = {
    apiKey: "AIzaSyAk6PmUPnnMEi9biBTquEcL6FwPzuDmOHU",
    authDomain: "yeonstagram-1.firebaseapp.com",
    databaseURL: "https://yeonstagram-1-default-rtdb.firebaseio.com",
    projectId: "yeonstagram-1",
    storageBucket: "yeonstagram-1.appspot.com",
    messagingSenderId: "382124356248",
    appId: "1:382124356248:web:10ddaefda75539d1f416ed",
    measurementId: "G-L5YQ9RTJ86"
  };


  
  // Initialize Firebase
  const firebase = firebase.initializeApp(firebaseConfig);
  
export default firebaseApp;
