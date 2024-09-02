// Importa o StrictMode e createRoot do React, e o componente principal App
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Cria a raiz do aplicativo e renderiza o componente App dentro do StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
