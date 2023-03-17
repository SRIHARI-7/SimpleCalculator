
import React from 'react';
import './App.css';
import ViewResult from './components/ViewResult';



function App() {
  

  return (
    <div className="App container-fluid bg-dark">
      <div className='row pt-2 pb-2'>
        <div className='col-12'>
          <ViewResult val="0"/>
        </div>
      </div>
      
      <div className='row pt-2 pb-2'>
        <div className='col-3' >
          <ViewResult val="AC"  color="danger"/>
        </div>
        <div className='col-3'>
          <ViewResult val="+/-"  color="warning"/>
        </div>
        <div className='col-3'>
          <ViewResult val="%"  color="warning"/>
        </div>
        <div className='col-3'>
          <ViewResult val="/"  color="warning"/>
        </div>
      </div>

      <div className='row pt-2 pb-2'>
        <div className='col-3'>
          <ViewResult val="7"/>
        </div>
        <div className='col-3'>
          <ViewResult val="8"/>
        </div>
        <div className='col-3'>
          <ViewResult val="9"/>
        </div>
        <div className='col-3'>
          <ViewResult val="X"  color="warning"/>
        </div>
      </div>

      <div className='row pt-2 pb-2'>
        <div className='col-3'>
          <ViewResult val="4"/>
        </div>
        <div className='col-3'>
          <ViewResult val="5"/>
        </div>
        <div className='col-3'>
          <ViewResult val="6"/>
        </div>
        <div className='col-3'>
          <ViewResult val="-"  color="warning"/>
        </div>
      </div>

      <div className='row pt-2 pb-2'>
        <div className='col-3'>
          <ViewResult val="1"/>
        </div>
        <div className='col-3'>
          <ViewResult val="2"/>
        </div>
        <div className='col-3'>
          <ViewResult val="3"/>
        </div>
        <div className='col-3'>
          <ViewResult val="+"  color="warning"/>
        </div>
      </div>
      
      <div className='row pt-2 pb-2'>
        <div className='col-6'>
          <ViewResult val="0"/>
        </div>
        <div className='col-3'>
          <ViewResult val="."  color="warning"/>
        </div>
        <div className='col-3'>
          <ViewResult val="="  color="warning"/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
