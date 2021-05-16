import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDVBW9kSYe3dqGVrUnRoK0jZkQp2snzgYk',
  authDomain: 'todo-app-ef949.firebaseapp.com',
  databaseURL: 'https://todo-app-ef949-default-rtdb.firebaseio.com',
  projectId: 'todo-app-ef949',
  storageBucket: 'todo-app-ef949.appspot.com',
  messagingSenderId: '866026646770',
  appId: '1:866026646770:web:f3a7fd91e30ad0b8dd346b',
  measurementId: 'G-FRLYEF96S6',
  // apiKey: 'AIzaSyCKobVC5B8t5T6BykPxom0MUj-51tUuSDA',
  // authDomain: 'todo-40688.firebaseapp.com',
  // projectId: 'todo-40688',
  // storageBucket: 'todo-40688.appspot.com',
  // messagingSenderId: '587630785745',
  // appId: '1:587630785745:web:a2df52a7f9f92ed1db41f0',
  // measurementId: 'G-JKQZNMEG84',
});

export { firebaseConfig as firebase };
