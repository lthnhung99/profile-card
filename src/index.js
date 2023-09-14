import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
  <div className="card">
    <div className="card--header" />
    <img 
          className='avatar'
         
          src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/376882998_3636573219906724_5251353149889406288_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=hSR-zx9csYsAX8lsk87&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAppHCiBbGxZlmoty3DwE5IdKx5hbyyIlMCSyLd81AbTw&oe=65080901" 
          alt="avatar" 
          />
    <div className="card--body">
      <div>
        <p className="text-header">Lê Thị Hồng Nhung</p>
        <p className="text-sub">
          14-10-1999
        </p>
        <button className="btn third">FOLLOW</button>
      </div>
    </div>
  </div>
</div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
