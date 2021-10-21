import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBS4QtZaFgiF8Aez_B5Mqs70IJaB2jcZbo",
  authDomain: "chess-three.firebaseapp.com",
  databaseURL: "https://chess-three-default-rtdb.firebaseio.com",
  projectId: "chess-three",
  storageBucket: "chess-three.appspot.com",
  messagingSenderId: "1018144644540",
  appId: "1:1018144644540:web:1a59994066f1e95764dfb9"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
