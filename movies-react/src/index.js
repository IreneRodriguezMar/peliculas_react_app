import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //estilos globales nada más
import { App } from './App';

function Componenete({ titulo, children }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
