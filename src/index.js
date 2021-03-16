import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const libraries = [
{name: 'Backbone' , url: 'http://google.com/Backbone'},
{name: 'Angular' , url: 'http://google.com/Angular'},
{name: 'jQuery' , url: 'http://google.com/jQuery'},
{name: 'Prototype' , url: 'http://google.com/Prototype'},
{name: 'React' , url: 'http://google.com/React'},
{name: 'Ember',  url: 'http://google.com/Ember'},
{name: 'Dojo' , url: 'http://google.com/Dojo'},
{name: 'Express' ,  url: 'http://google.com/Express'},
{name: 'Koa' , url: 'http://google.com/Koa'},
{name: 'Moontool' , url: 'http://google.com/Moontool'},
];

ReactDOM.render(
  <React.StrictMode>
    <App libraries ={libraries} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
