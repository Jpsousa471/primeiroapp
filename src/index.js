import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/UserContext';
import { TwoStore } from './contexts/TwoContext';
import { ComentaryStore } from './contexts/ComentaryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <UserStore>
          <TwoStore>
          <ComentaryStore>
              <App />
          </ComentaryStore>
          </TwoStore>
        </UserStore>
      </React.StrictMode>
   
);

