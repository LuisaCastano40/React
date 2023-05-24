import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter';
import './counter.module.css'
import Footer from './Footer';
import './Footer.module.css'


ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        {/*llamamos nuestros componentes*/}
        <Counter/>   
        <Footer/>
    </React.StrictMode>
);