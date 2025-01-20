import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/style.css'
import { FirebaseProvider } from './context/Firebase';
window.$ = $;
window.jQuery = $;
library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>
);