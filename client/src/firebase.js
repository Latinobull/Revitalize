import firebase from firebase/app
import "firebase/auth";
import "firebase/firestore"

var app = {
    apiKey: process.env.REVITALIZE_API,
    authDomain: process.env.REVITALIZE_AUTH,
    projectId: process.env.REVITALIZE_PROJECT,
    storageBucket: process.env.REVITALIZE_STORAGE,
    messagingSenderId: process.env.REVITALIZE_MESSAGE,
    appId: process.env.REVITALIZE_APPID,
    measurementId: process.env.REVITALIZE_MEASUREMENT
  };
  
  firebase.initializeApp(app);

 
  export default app