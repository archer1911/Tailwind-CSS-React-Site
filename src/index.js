import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <div className='w-[95%]  m-auto sm:w-[75%]'>
  <Navbar/>
  <Section1/>
  <Section2/>
  <Footer/>
    </div>
  


  
  





  </>
);



