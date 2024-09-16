import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './index.module.scss';
import Dialog from '@components/dialog/'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={classes.container}>
      <App />
      <Dialog mode="alert" isShow={true}>hello</Dialog>
    </div>
  </React.StrictMode>
);
