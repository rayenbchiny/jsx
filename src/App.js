import React from 'react'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Kavbar from './Navbar';
import Sard from './Sard';

function App() {
  return (
    <>
    <div className='App'>
     <Kavbar/>
     <header className='Sa'>
        <Sard/>
        <Sard/>
        <Sard/>
     </header>
    </div>
    </>
  )
}

export default App
