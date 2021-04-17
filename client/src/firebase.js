import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_REVITALIZE_API,
  authDomain: process.env.REACT_APP_REVITALIZE_AUTH,
  projectId: process.env.REACT_APP_REVITALIZE_PROJECT,
  storageBucket: process.env.REACT_APP_REVITALIZE_STORAGE,
  messagingSenderId: process.env.REACT_APP_REVITALIZE_MESSAGE,
  appId: process.env.REACT_APP_REVITALIZE_APPID,
  measurementId: process.env.REACT_APP_REVITALIZE_MEASUREMENT,
});

export const db = firebase.firestore;
export const auth = app.auth();
export default app;
