import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBPsdhlRFsr8KfLSrUrQtskU0ECI9O-yj4',
  authDomain: 'gooddevice29.ru',
  projectId: 'gooddevice29',
  storageBucket: 'todoapp-eeeb7.appspot.com',
  messagingSenderId: '1072574112522',
  appId: '1:1072574112522:web:65fc4e184aed9894dc90f3'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
