import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем createRoot из react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // Используем configureStore из Redux Toolkit
import rootReducer from './reducers/rootReducer';
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';

// Создаем хранилище Redux с помощью configureStore и передаем в него корневой редуктор
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)

});

const root = createRoot(document.getElementById('root')); // Создаем корневой элемент React
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
