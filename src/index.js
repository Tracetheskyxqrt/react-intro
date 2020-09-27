import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 1},
    {id: 2, message: 'Its my first post', likesCount: 3},
]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you? :)'},
    {id: 3, message: 'Whats going on?'},
    {id: 4, message: 'Whats going on?'},
    {id: 5, message: 'Whats going on?'},
    {id: 6, message: 'Whats going on?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
