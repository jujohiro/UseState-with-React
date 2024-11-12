// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Estilos globales de Tailwind y otros
import {App} from './App';

createRoot(document.getElementById('root')).render(  <App />
);