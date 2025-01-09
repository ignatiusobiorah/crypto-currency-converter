import { useState } from 'react';
import Navbar from './components/Navbar';
import Converter from './components/Converter';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Converter/>
      <Footer/>
    </>
  )
}

export default App;
