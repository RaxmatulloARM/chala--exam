import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider as AuthProvider } from "../src/components/context/paroluchun";
import { Provider as Till } from './components/context/Localiz';
import App from './App';
import "./index.scss"
import "../src/components/Page/Home/section2.scss"
import "../src/components/Page/Home/section3.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Till>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Till>
  </React.StrictMode>
);

