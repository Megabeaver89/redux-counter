import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем createRoot из react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'; // Используем configureStore из Redux Toolkit
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

// Создаем хранилище Redux с помощью configureStore и передаем в него корневой редуктор
const store = configureStore({
  reducer: rootReducer
});

const root = createRoot(document.getElementById('root')); // Создаем корневой элемент React
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
