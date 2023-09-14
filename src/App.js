import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='container'>
        <div className='card'>
            <div className='card--header' />
            <img 
            className='avatar'
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/330445283_220291300481988_2383491924458735024_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4v4PYALCVB4AX_qSNoO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCa9WrivByTQdivSel5stFihcC4C-ldX57uS7zQqTFPHg&oe=65075395" 
            alt="avatar" 
            />
            <div className='card--body'>
                <div>
                  <p className='text--header'>Phương Long</p>
                  <p className='text--sub'>
                  <i class="fab fa-instagram"></i>Intagram: __25thang4_
                  </p>
                  <button type='button' className='btn third' >
                      <a href="https://www.instagram.com/__25thang4_/" target="_blank">FOLLOW ME</a>
                  </button>
                </div>
            </div>
        </div>
    </div>
  </> 


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();