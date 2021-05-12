import firebse from 'firebase/app';
import 'firebase/firestore';

const firebseConfig = firebse.initializeApp({
  apiKey: 'AIzaSyDVBW9kSYe3dqGVrUnRoK0jZkQp2snzgYk',
  authDomain: 'todo-app-ef949.firebaseapp.com',
  databaseURL: 'https://todo-app-ef949-default-rtdb.firebaseio.com',
  projectId: 'todo-app-ef949',
  storageBucket: 'todo-app-ef949.appspot.com',
  messagingSenderId: '866026646770',
  appId: '1:866026646770:web:f3a7fd91e30ad0b8dd346b',
  measurementId: 'G-FRLYEF96S6',
});

export { firebseConfig as firebse };
