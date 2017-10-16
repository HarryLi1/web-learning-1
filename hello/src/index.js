import React from 'react';
import ReactDOM from 'react-dom';
import createCalc from './calc/calc';
import createBootstrap from './bootstrap_demo/index';
import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const content = document.getElementById('content');
const calc = document.getElementById('calc_entry');
calc.onclick = function () {
  createCalc(content);
};
const bootstrapDemo = document.getElementById('bootstrap_entry');
bootstrapDemo.onclick = function () {
  createBootstrap(content);
};
createCalc(content);
