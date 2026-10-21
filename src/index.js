import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './State/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </HashRouter>
    </React.StrictMode>
  );
};

// Вызываем первую отрисовку, передавая актуальный стейт
rerenderEntireTree(store.getState());

// Отдаем функцию перерисовки в store
store.subscribe(rerenderEntireTree);